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
            You’re holding onto hope that life
            <br className="hidden lg:block" />
            can be better than it is right now.
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
                AT CONEJO VALLEY FAMILY
                <br />
                COUNSELING WE WANT TO MAKE
                <br />
                THAT HOPE A REALITY.
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
                Whether you're an adult seeking personal
                growth, looking to work through your
                trauma, a couple working on your
                relationship, or a parent looking for
                support for your child, we provide a
                compassionate and safe space to help
                you navigate all of life’s ups and downs.
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
                First and foremost, we believe what
                you’re going through is real, valid, and
                worthy of support. Our team offers clients
                in the Newbury Park area and across CA
                an environment to discover a new life and
                a deeper sense of self in the midst of their
                struggles. As we tap into the power of
                connection and understanding, you can
                find your footing again and take a
                transformative path forward.
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
            src="/images/03.webp"
            alt="Ocean and beach"
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