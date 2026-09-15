import Image from "next/image";

export default function Introsection() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        mt-[100px]
        bg-[var(--color-cream)]
        text-[var(--color-blue)]
      "
    >
      <div
        className="
          relative
          min-h-[900px]
          w-full
        "
      >
        {/* =========================
            LEFT CONTENT AREA
        ========================== */}

        <div
          className="
            w-full
            px-8
            py-20
            sm:px-12
            sm:py-24
            lg:w-[70%]
            lg:px-[9%]
            lg:py-[100px]
          "
        >
          {/* Main heading */}

          <h2
            className="
              max-w-[900px]
              font-serif
              text-[42px]
              font-normal
              leading-[1.18]
              tracking-[-0.025em]
              sm:text-[48px]
              lg:text-[54px]
              xl:text-[56px]
            "
          >
            Honoring where you’ve been &amp;
            <br className="hidden lg:block" />
            helping shape where you’re headed.
          </h2>

          {/* =========================
              TEXT COLUMNS
          ========================== */}

          <div
            className="
              mt-20
              grid
              grid-cols-1
              gap-12
              md:grid-cols-2
              md:gap-14
              lg:mt-[92px]
              lg:grid-cols-[0.9fr_1fr]
              lg:gap-[70px]
            "
          >
            {/* COLUMN ONE */}

            <div>
              <p
                className="
                  max-w-[390px]
                  text-[15px]
                  font-medium
                  uppercase
                  leading-[1.55]
                  tracking-[0.17em]
                  text-[var(--color-blue)]
                "
              >
                THERAPY FOR ADULTS
                <br />
                READY TO UNDERSTAND
                <br />
                THEMSELVES MORE DEEPLY.
              </p>

              <p
                className="
                  mt-7
                  max-w-[390px]
                  text-[18px]
                  font-normal
                  leading-[2.05]
                  tracking-[-0.01em]
                  text-[var(--color-blue)]
                "
              >
                When anxiety, stress, or the lingering effects
                of past experiences begin to shape how you
                think, feel, and move through life, therapy can
                offer a space to slow down, reflect, and find
                your footing again.
              </p>
            </div>

            {/* COLUMN TWO */}

            <div>
              <p
                className="
                  max-w-[420px]
                  text-[18px]
                  font-normal
                  leading-[2.05]
                  tracking-[-0.01em]
                  text-[var(--color-blue)]
                "
              >
                Dr. Maya Reynolds offers warm, collaborative
                therapy for adults in Santa Monica who may
                feel exhausted, stuck in overthinking, or
                emotionally on edge. Together, therapy can
                create greater insight, resilience, and a
                stronger relationship with yourself.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT IMAGE
        ========================== */}

        <div
          className="
            relative
            h-[500px]
            w-full
            md:h-[650px]
            lg:absolute
            lg:right-0
            lg:top-0
            lg:h-full
            lg:w-[30%]
          "
        >
          <Image
            src="/images/con3.jfif"
            alt="Calm and peaceful therapy environment"
            fill
            sizes="30vw"
            className="
              object-cover
              object-center
            "
          />
        </div>
      </div>
    </section>
  );
}