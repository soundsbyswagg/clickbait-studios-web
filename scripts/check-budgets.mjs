import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, 'performance-budgets.json'), 'utf8'));
const staticChunks = join(root, '.next', 'static', 'chunks');
const buildManifest = JSON.parse(readFileSync(join(root, '.next', 'build-manifest.json'), 'utf8'));

const files = walk(staticChunks);
const javascript = files.filter((file) => file.endsWith('.js'));
const css = files.filter((file) => file.endsWith('.css'));
const metrics = {
  largestChunkBytes: Math.max(...javascript.map(size)),
  totalCssBytes: css.reduce((total, file) => total + size(file), 0),
  translationCatalogBytes: [
    'content/translations/en.ts',
    'content/translations/es.ts',
    'content/translations/pages.ts',
  ].reduce((total, file) => total + size(join(root, file)), 0),
  runtimeDependencies: Object.keys(JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).dependencies ?? {}).length,
  routes: Object.fromEntries(
    Object.entries(config.routes).map(([route, budget]) => [route, routeBytes(route, budget.manifest, buildManifest.rootMainFiles)]),
  ),
};

const failures = [];
check('largest emitted JavaScript chunk', metrics.largestChunkBytes, config.largestChunkBytes, failures);
check('total emitted CSS', metrics.totalCssBytes, config.totalCssBytes, failures);
check('translation catalog source', metrics.translationCatalogBytes, config.translationCatalogBytes, failures);
check('runtime dependency count', metrics.runtimeDependencies, config.runtimeDependencies, failures);

for (const [route, current] of Object.entries(metrics.routes)) {
  const baseline = config.routes[route].baselineBytes;
  const maximum = Math.ceil(baseline * (1 + config.maxRouteDeltaPercent / 100));
  check(`${route} first-load JavaScript`, current, maximum, failures);
}

for (const dependency of config.forbiddenDependencies) {
  const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
  if (packageJson.dependencies?.[dependency] || packageJson.devDependencies?.[dependency]) {
    failures.push(`forbidden dependency reintroduced: ${dependency}`);
  }
  for (const file of walkSources()) {
    if (readFileSync(file, 'utf8').match(new RegExp(`(?:from|import\\()\\s*['"]${escapeRegExp(dependency)}(?:/[^'"]*)?['"]`))) {
      failures.push(`forbidden import reintroduced: ${dependency} in ${file.slice(root.length + 1)}`);
    }
  }
}

console.table({
  largest_chunk: format(metrics.largestChunkBytes),
  total_css: format(metrics.totalCssBytes),
  translation_catalogs: format(metrics.translationCatalogBytes),
  runtime_dependencies: metrics.runtimeDependencies,
  ...Object.fromEntries(Object.entries(metrics.routes).map(([route, bytes]) => [`route ${route}`, format(bytes)])),
});

if (failures.length) {
  for (const failure of failures) console.error(`BUDGET FAIL: ${failure}`);
  process.exit(1);
}
console.log('Bundle and route budgets passed.');

function routeBytes(route, manifestPath, rootMainFiles) {
  const source = readFileSync(join(root, manifestPath), 'utf8');
  const jsonStart = source.indexOf('= {') + 2;
  const manifest = JSON.parse(source.slice(jsonStart, source.lastIndexOf(';')));
  const routeFiles = Object.values(manifest.entryJSFiles ?? {}).flat();
  const unique = new Set([...rootMainFiles, ...routeFiles]);
  return [...unique].reduce((total, file) => total + size(join(root, '.next', file)), 0);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function walkSources() {
  return ['app', 'components', 'lib'].flatMap((directory) =>
    walk(join(root, directory)).filter((file) => /\.(?:ts|tsx|js|jsx|mjs)$/.test(file)),
  );
}

function size(file) {
  return statSync(file).size;
}

function check(label, current, maximum, failures) {
  if (current > maximum) failures.push(`${label}: ${current} bytes exceeds ${maximum} bytes`);
}

function format(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
