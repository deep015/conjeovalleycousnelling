import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      className="
        relative
        w-full
        h-[620px]
        overflow-hidden
        bg-[#5f5b55]

        sm:h-[640px]

        lg:h-[665px]
      "
    >
      {/* Background image */}

      <Image
        src="/images/beach.png"
        alt="Children playing together on the beach"
        fill
        priority={false}
        sizes="100vw"
        className="
          object-cover
          object-center
        "
      />

      {/* Dark overlay */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-black/35
        "
      />

      {/* Content */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
        "
      >
        <div
          className="
            w-full
            px-8

            sm:px-12

            lg:px-[7.55%]
          "
        >
  <h2
  className="
    max-w-[1000px]
    font-[family-name:var(--font-cormorant)]
    text-[42px]
    leading-[1.15]
    font-light
    tracking-[-0.02em]
    text-white
    md:text-[50px]
    lg:text-[58px]
  "
>
  You deserve a place where your story is
  <br className="hidden md:block" />

  {" "}heard, valued, and understood.{" "}

  <span className="font-[family-name:var(--font-cormorant)] font-light italic">
    Nothing will
  </span>

  <br className="hidden md:block" />

  <span className="font-[family-name:var(--font-cormorant)] font-light italic">
    be too heavy for us to carry together.
  </span>
</h2>
        </div>
      </div>
    </section>
  );
}