import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent-hover)]"
      : "border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-7 text-sm tracking-wide transition-colors duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}