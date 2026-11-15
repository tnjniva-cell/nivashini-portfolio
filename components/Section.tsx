import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-20 sm:py-24 ${className}`}
    >
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">
          {eyebrow}
        </p>
        <h2
          id={`${id}-heading`}
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-4 leading-7 text-slate-400">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
