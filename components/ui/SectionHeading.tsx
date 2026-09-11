interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}