import Image from "next/image";

const people = [
  {
    title: "Adults",
    image: "/images/wh1.png",
    alt: "Adult sitting in a calm and peaceful environment",
    description:
      "For adults feeling overwhelmed by anxiety, stress, or constant overthinking. Therapy offers a grounded space to slow down, gain clarity, and develop practical tools for moving forward.",
  },
  {
    title: "High-Achieving Professionals",
    image: "/images/pro.png",
    alt: "Professional adult in a calm environment",
    description:
      "Many of my clients are professionals, entrepreneurs, and creatives who are used to carrying a lot. Together, we can explore burnout, perfectionism, and the pressure to always keep going.",
  },
  {
    title: "Adults Healing From Trauma",
    image: "/images/who3.png",
    alt: "Adult reflecting in a peaceful environment",
    description:
      "Past experiences can shape relationships, confidence, and your sense of safety. Trauma therapy provides a carefully paced space to build safety, regulation, understanding, and resilience.",
  },
];

export default function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="
        w-full
        overflow-hidden
        bg-[var(--color-cream)]
        text-[var(--color-blue)]
      "
    >
      {/* Section heading */}
      <div
        className="
          px-8
          pt-[100px]
          sm:px-12
          sm:pt-[120px]
          lg:px-[7.55%]
          lg:pt-[115px]
        "
      >
        <h2
          className="
            flex
            items-baseline
            gap-3
            font-serif
            text-[44px]
            font-normal
            leading-none
            tracking-[-0.035em]
            sm:text-[50px]
            lg:text-[56px]
          "
        >
          <span>Who I</span>

          <span
            className="
              hero-script
              relative
              -top-[2px]
              text-[1.05em]
            "
          >
            work with
          </span>
        </h2>
      </div>

      {/* THREE COLUMN GRID */}
      <div
        className="
          mx-auto
          mt-[52px]
          w-full
          max-w-[1278px]
          px-8
          sm:px-12
          lg:px-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-[70px]
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-[25px]
          "
        >
          {people.map((person) => (
            <article
              key={person.title}
              className="w-full"
            >
              {/* Image */}
              <div
                className="
                  relative
                  aspect-[0.83]
                  w-full
                  overflow-hidden
                "
              >
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="
                    (max-width: 767px) 100vw,
                    (max-width: 1023px) 50vw,
                    33vw
                  "
                  className="object-cover"
                />
              </div>

              {/* Card content */}
              <div className="pt-[62px]">
                <h3
                  className="
                    max-w-[380px]
                    font-serif
                    text-[29px]
                    font-normal
                    leading-[1.15]
                    tracking-[-0.025em]
                    sm:text-[30px]
                    lg:text-[31px]
                  "
                >
                  {person.title}
                </h3>

                <p
                  className="
                    mt-[46px]
                    max-w-[410px]
                    text-[18px]
                    font-normal
                    leading-[1.9]
                    tracking-[-0.01em]
                    text-[var(--color-blue)]
                    lg:text-[19px]
                  "
                >
                  {person.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom breathing space */}
      <div className="h-[110px] lg:h-[150px]" />
    </section>
  );
}