
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#3f3f3f]">

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-[7.5%]
          pt-[80px]
          pb-[125px]
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

          {/* =========================
              BRAND / DESCRIPTION
          ========================== */}
          <div className="w-[390px] max-w-full">
  <Image
    src="/images/logo.webp"
    alt="Conejo Valley Family Counseling"
    width={390}
    height={100}
    priority
    className="h-auto w-full object-contain object-left"
  />
</div>


          {/* =========================
              NAVIGATE
          ========================== */}
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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


          {/* =========================
              OUR TEAM
          ========================== */}
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
              Our Team
            </h3>

            <div
              className="
                mt-[26px]
                flex
                flex-col
                gap-[8px]
                font-[var(--font-body)]
                text-[17px]
                leading-[1.25]
                text-[#3f3f3f]
              "
            >
              <a href="#" className="hover:opacity-60 transition-opacity">
                Jennifer Anderson
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Heather Williams-Baumgart
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Autumn Bodily
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Michaela Gorospe
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Candace Bletscher
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Samantha Johnson
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Andrea Watkins
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Rosa Gomez
              </a>

              <a href="#" className="hover:opacity-60 transition-opacity">
                Chad Flores
              </a>
            </div>
          </div>


          {/* =========================
              CONTACT
          ========================== */}
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
              Contact
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
              <p>925 Broadbeck Dr</p>
              <p>Suites 200 and 225</p>
              <p>Newbury Park, CA 91320</p>

              <p className="mt-[1px]">
                info@conejovalleycounseling.com
              </p>

              <p>805.242.3120</p>

              {/* Service area */}
              <p
                className="
                  mt-[23px]
                  max-w-[330px]
                  font-[var(--font-heading)]
                  text-[18px]
                  italic
                  leading-[1.7]
                  text-[#555555]
                "
              >
                Serving Thousand Oaks, Westlake
                Village, Camarillo, Moorpark, &amp; Simi
                Valley
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* =========================
          BOTTOM LEGAL BAR
      ========================== */}
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
            text-[16px]
            font-normal
            leading-none
            text-white
          "
        >
          Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.
        </p>
      </div>

    </footer>
  );
}