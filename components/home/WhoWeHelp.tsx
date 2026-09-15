import Image from "next/image";

const people = [
  {
    title: "Adults",
    image: "/images/04.webp",
    alt: "Adults sitting together near the ocean",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    image: "/images/5.webp",
    alt: "Couple standing together near the ocean",
    description:
      "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    image: "/images/6.webp",
    alt: "Children playing together at the beach",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
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
          <span>Who we</span>

          <span
            className="
              hero-script
              relative
              -top-[2px]
              text-[1.05em]
            "
          >
            help
          </span>
        </h2>
      </div>


      {/* =========================
          THREE COLUMN GRID
      ========================== */}

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
                  className="
                    object-cover
                  "
                />
              </div>


              {/* Card content */}

              <div
                className="
                  pt-[62px]
                "
              >
                <h3
                  className="
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