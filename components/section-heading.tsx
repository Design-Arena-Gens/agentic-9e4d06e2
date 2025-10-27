import { PropsWithChildren } from "react";

export function SectionHeading({ eyebrow, title, children }: PropsWithChildren<{ eyebrow: string; title: string }>) {
  return (
    <div className="section-heading">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p className="section-heading__summary">{children}</p> : null}
    </div>
  );
}
