export function SplitText({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  easing?: string;
}) {
  return <span className={`split-text ${className}`}>{children}</span>;
}
