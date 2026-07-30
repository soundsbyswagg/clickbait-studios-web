const gaps = { 1: 'gap-1', 2: 'gap-2', 3: 'gap-3', 4: 'gap-4', 6: 'gap-6', 8: 'gap-8', 10: 'gap-10', 12: 'gap-12' } as const;
type Gap = keyof typeof gaps;

export function Stack({ gap = 4, className = '', children }: { gap?: Gap; className?: string; children: React.ReactNode }) {
  return <div className={`flex flex-col ${gaps[gap]} ${className}`}>{children}</div>;
}
export function Inline({ gap = 4, className = '', children }: { gap?: Gap; className?: string; children: React.ReactNode }) {
  return <div className={`flex items-center ${gaps[gap]} ${className}`}>{children}</div>;
}
export function Cluster({ gap = 4, className = '', children }: { gap?: Gap; className?: string; children: React.ReactNode }) {
  return <div className={`flex flex-wrap items-center ${gaps[gap]} ${className}`}>{children}</div>;
}
