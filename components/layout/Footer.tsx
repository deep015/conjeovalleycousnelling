export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#3f3f3f]">

      {/* MAIN FOOTER */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-[7.5%]
          pt-[80px]
          pb-[110px]
          lg:px-[6.8%]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-[55px]
            md:grid-cols-2
            lg:grid-cols-[2.15fr_0.9fr_1.05fr_1.35fr]
            lg:gap-[70px]
          "
        >

          {/* BRAND */}

          <div className="max-w-[390px]">
            <h2
              className="
                font-[var(--font-heading)]
                text-[38px]
                font-light
                leading-[1.05]
                tracking-[-0.02em]
                text-[#333333]
              "
            >
              Dr. Maya Reynolds
            </h2>

            <p
              className="
                mt-[12px]
                font-[var(--font-body)]
                text-[15px]
                uppercase
                tracking-[0.12em]
                text-[#6b6b6b]
              "
            >
              PsyD · Licensed Clinical Psychologist
            </p>

            <p
              className="
                mt-[28px]
                max-w-[360px]
                font-[var(--font-body)]
                text-[17px]
                leading-[1.8]
                text-[#555555]
              "
            >
              Warm, grounded therapy for adults navigating
              anxiety, trauma, stress, burnout, and the
              lingering effects of past experiences.
            </p>
          </div>

          {/* NAVIGATE */}

          <div>
            <h3
              className="
                font-[var(--font-body)]
                text-[18px]
                font-normal
                uppercase
                tracking-[0.12em]
                text-[#28516b]
              "
            >
              Navigate
            </h3>

            <nav
              className="
                mt-[26px]
                flex
                flex-col
                gap-[8px]
              "
            >
              <a
                href="/"
                className="
                  w-fit
                  font-[var(--font-body)]
                  text-[17px]
                  leading-[1.25]
                  text-[#3f3f3f]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                Home
              </a>

              <a
                href="#about"
                className="
                  w-fit
                  font-[var(--font-body)]
                  text-[17px]
                  leading-[1.25]
                  text-[#3f3f3f]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                About
              </a>

              <a
                href="#specialties"
                className="
                  w-fit
                  font-[var(--font-body)]
                  text-[17px]
                  leading-[1.25]
                  text-[#3f3f3f]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                Services
              </a>

              <a
                href="#methods"
                className="
                  w-fit
                  font-[var(--font-body)]
                  text-[17px]
                  leading-[1.25]
                  text-[#3f3f3f]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                Approach
              </a>

              <a
                href="#office"
                className="
                  w-fit
                  font-[var(--font-body)]
                  text-[17px]
                  leading-[1.25]
                  text-[#3f3f3f]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                Our Office
              </a>

              <a
                href="#faqs"
                className="
                  w-fit
                  font-[var(--font-body)]
                  text-[17px]
                  leading-[1.25]
                  text-[#3f3f3f]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                FAQs
              </a>

              <a
                href="#contact"
                className="
                  w-fit
                  font-[var(--font-body)]
                  text-[17px]
                  leading-[1.25]
                  text-[#3f3f3f]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                Contact
              </a>
            </nav>
          </div>

          {/* THERAPY */}

          <div>
            <h3
              className="
                font-[var(--font-body)]
                text-[18px]
                font-normal
                uppercase
                tracking-[0.12em]
                text-[#28516b]
              "
            >
              Therapy
            </h3>

            <div
              className="
                mt-[26px]
                flex
                flex-col
                gap-[8px]
                font-[var(--font-body)]
                text-[17px]
                leading-[1.35]
                text-[#3f3f3f]
              "
            >
              <a
                href="#specialties"
                className="transition-opacity hover:opacity-60"
              >
                Anxiety &amp; Stress
              </a>

              <a
                href="#specialties"
                className="transition-opacity hover:opacity-60"
              >
                Trauma Therapy
              </a>

              <a
                href="#specialties"
                className="transition-opacity hover:opacity-60"
              >
                Burnout &amp; Perfectionism
              </a>
            </div>
          </div>

          {/* LOCATION */}

          <div>
            <h3
              className="
                font-[var(--font-body)]
                text-[18px]
                font-normal
                uppercase
                tracking-[0.12em]
                text-[#28516b]
              "
            >
              Location
            </h3>

            <div
              className="
                mt-[26px]
                font-[var(--font-body)]
                text-[17px]
                leading-[1.85]
                text-[#3f3f3f]
              "
            >
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>

              <p
                className="
                  mt-[20px]
                  max-w-[300px]
                  font-[var(--font-heading)]
                  text-[19px]
                  italic
                  leading-[1.6]
                  text-[#555555]
                "
              >
                In-person therapy in Santa Monica and
                secure telehealth for clients located
                in California.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}

      <div
        className="
          flex
          min-h-[55px]
          w-full
          items-center
          bg-[#86b3b3]
          px-[7%]
        "
      >
        <p
          className="
            font-[var(--font-body)]
            text-[14px]
            font-normal
            leading-[1.5]
            text-white
            sm:text-[16px]
          "
        >
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}