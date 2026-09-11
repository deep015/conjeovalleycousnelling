export default function Home() {
  return (
    <main>
      <section className="min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-[1280px] items-center px-[clamp(1.25rem,4vw,4rem)]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em]">
              Online & In-Person Counseling
            </p>

            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.9]">
              Rebuild your foundation on solid ground.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
              Specialized therapy for adults, couples, teens, and children.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}