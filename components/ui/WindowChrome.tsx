import type { ReactNode } from "react";

export function WindowChrome({
  title,
  titleId,
  inset = false,
}: {
  title?: ReactNode;
  titleId?: string;
  inset?: boolean;
}) {
  return (
    <div
      className={`${inset ? "absolute inset-x-0 top-0" : ""} flex h-6 items-center border-b border-border/60 bg-card px-2.5 text-[10px] leading-none tracking-wide text-muted`}
    >
      {title ? <span id={titleId}>{title}</span> : null}
      <span className="ml-auto flex gap-1" aria-hidden="true">
        <span className="h-2 w-2 rounded-[2px] border border-border/80 bg-border/20" />
        <span className="h-2 w-2 rounded-[2px] border border-border/80 bg-border/20" />
        <span className="h-2 w-2 rounded-[2px] border border-border/80 bg-border/20" />
      </span>
    </div>
  );
}
