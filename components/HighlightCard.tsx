type HighlightCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  variant?: "compact" | "regular";
  interactive?: boolean;
  href?: string;
};

export default function HighlightCard({
  title,
  description,
  eyebrow,
  variant = "regular",
  interactive = false,
  href,
}: HighlightCardProps) {
  const baseClasses = "border border-white/10 bg-white/5";
  const variantClasses =
    variant === "compact" ? "rounded-2xl p-5" : "rounded-3xl p-6";
  const interactiveClasses = interactive
    ? "cursor-pointer transition hover:-translate-y-1 hover:border-white/25"
    : "";
  const Component = href ? "a" : "div";

  return (
    <Component
      className={`${baseClasses} ${variantClasses} ${interactiveClasses}`.trim()}
      href={href}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.25em] text-white/60">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </Component>
  );
}
