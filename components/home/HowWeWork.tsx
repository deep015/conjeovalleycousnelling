export default function HowWeWork() {
  return (
    <section
      id="methods"
      className="relative w-full overflow-hidden bg-[#E9DECC]"
    >
      <div className="mx-auto min-h-[850px] max-w-[1920px]">

        {/* MAIN CONTENT AREA */}

        <div
          className="
            px-6
            pt-24
            pb-20
            sm:px-10
            md:px-16
            lg:ml-[8.8%]
            lg:w-[68%]
            lg:px-0
            lg:pt-[140px]
            lg:pb-[65px]
          "
        >

          {/* SECTION LABEL */}

          <p
            className="
              font-body
              text-[14px]
              font-normal
              tracking-[0.16em]
              text-[#343434]
              sm:text-[15px]
            "
          >
            HOW I WORK
          </p>

          {/* MAIN HEADING */}

          <h2
            className="
              mt-[145px]
              font-heading
              text-[48px]
              font-light
              leading-[1.05]
              tracking-[-0.025em]
              text-[#171717]
              sm:text-[54px]
              md:text-[58px]
              lg:text-[60px]
            "
          >
            A warm, collaborative approach
            <br className="hidden md:block" />
            to meaningful change.
          </h2>

          {/* TWO TEXT COLUMNS */}

          <div
            className="
              mt-[72px]
              grid
              grid-cols-1
              gap-12
              md:grid-cols-2
              md:gap-x-[7%]
            "
          >

            {/* LEFT COLUMN */}

            <div>
              <p
                className="
                  font-body
                  text-[15px]
                  font-normal
                  uppercase
                  leading-[1.9]
                  tracking-[0.14em]
                  text-[#202020]
                  sm:text-[16px]
                "
              >
                THERAPY SHOULD FEEL SUPPORTIVE,
                <br />
                GROUNDED, AND TAILORED TO YOU.
              </p>

              <p
                className="
                  mt-7
                  font-body
                  text-[17px]
                  font-normal
                  leading-[1.75]
                  text-[#292929]
                  sm:text-[18px]
                "
              >
                Dr. Maya Reynolds takes a warm, collaborative,
                and grounded approach to therapy. Sessions are
                structured enough to feel supportive while still
                leaving room for reflection, depth, and a deeper
                understanding of your experiences.
              </p>
            </div>

            {/* RIGHT COLUMN */}

            <div>
              <p
                className="
                  font-body
                  text-[17px]
                  font-normal
                  leading-[1.75]
                  text-[#292929]
                  sm:text-[18px]
                "
              >
                Depending on your needs, therapy may incorporate
                cognitive behavioral therapy (CBT), EMDR,
                mindfulness-based practices, and body-oriented
                techniques.
              </p>

              <p
                className="
                  mt-7
                  font-body
                  text-[17px]
                  font-normal
                  leading-[1.75]
                  text-[#292929]
                  sm:text-[18px]
                "
              >
                Trauma work is approached carefully and at a pace
                that supports safety, stabilization, and regulation.
                The goal is not simply to reduce symptoms, but to
                help you develop greater insight, resilience, and
                a stronger relationship with yourself.
              </p>
            </div>

          </div>

          {/* CTA */}

          <a
            href="#specialties"
            className="
              mt-[75px]
              inline-block
              border-b
              border-[#303030]
              pb-[8px]
              font-body
              text-[14px]
              font-normal
              tracking-[0.15em]
              text-[#242424]
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            EXPLORE MY SERVICES
          </a>
        </div>

        {/* RIGHT IMAGE */}

        <div
          className="
            relative
            mx-6
            mb-10
            h-[600px]
            sm:mx-10
            md:mx-16
            lg:absolute
            lg:right-[0.7%]
            lg:top-[140px]
            lg:mx-0
            lg:mb-0
            lg:h-[738px]
            lg:w-[22.7%]
          "
        >
          <img
            src="/images/how.png"
            alt="Calm and welcoming therapy environment"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>

      </div>
    </section>
  );
}