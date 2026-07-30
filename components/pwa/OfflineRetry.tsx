'use client';
export function OfflineRetry() {
  return <button type="button" className="rounded-md bg-accent px-6 font-semibold text-accent-foreground" onClick={() => window.location.reload()}>Try again</button>;
}
