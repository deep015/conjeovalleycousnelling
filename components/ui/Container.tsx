interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-[clamp(1.25rem,4vw,4rem)] ${className}`}
    >
      {children}
    </div>
  );
}