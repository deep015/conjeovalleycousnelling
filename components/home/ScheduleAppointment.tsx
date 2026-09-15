import Image from "next/image";

export default function ScheduleAppointment() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f5ef]"
    >
      <div className="relative min-h-[815px]">

        {/* LEFT DECORATIVE IMAGE */}

        <div
          className="
            absolute
            left-[-245px]
            top-[135px]
            hidden
            h-[565px]
            w-[438px]
            lg:block
          "
        >
          <Image
            src="/images/scc.png"
            alt=""
            fill
            className="object-cover"
            sizes="438px"
          />
        </div>

        {/* MAIN CONTENT */}

        <div
          className="
            relative
            z-10
            ml-auto
            mr-auto
            w-full
            max-w-[1000px]
            px-6
            pt-[30px]
            lg:ml-[20%]
            lg:mr-0
            lg:w-[57%]
            lg:max-w-none
            lg:px-0
          "
        >

          {/* SECTION LABEL */}

          <p
            className="
              font-[var(--font-body)]
              text-[17px]
              font-normal
              uppercase
              tracking-[0.12em]
              text-[#444444]
            "
          >
            SCHEDULE A CONSULTATION
          </p>

          {/* MAIN HEADING */}

          <h2
            className="
              mt-[112px]
              max-w-[650px]
              font-[var(--font-heading)]
              text-[48px]
              font-light
              leading-[1.12]
              tracking-[-0.02em]
              text-[#292929]
              lg:text-[52px]
            "
          >
            A thoughtful space to begin
            <br />
            your next{" "}
            <span
              className="
                font-[var(--font-script)]
                font-normal
                italic
                text-[#83bdc0]
              "
            >
              chapter.
            </span>
          </h2>

          {/* BODY COPY */}

          <div
            className="
              mt-[38px]
              max-w-[620px]
              font-[var(--font-body)]
              text-[19px]
              font-normal
              leading-[1.85]
              tracking-[-0.01em]
              text-[#4a4a4a]
            "
          >
            <p>
              Starting therapy can feel like a meaningful step, especially
              when you have been carrying anxiety, stress, trauma, or burnout
              for a long time. Dr. Maya Reynolds offers a warm, grounded space
              where you can slow down, reflect, and begin to better understand
              yourself.
            </p>

            <p className="mt-[18px]">
              In-person therapy is available from her Santa Monica office,
              with secure telehealth available for clients located in
              California.
            </p>
          </div>

          {/* CONTACT CTA */}

          <a
            href="#"
            className="
              mt-[42px]
              inline-flex
              h-[60px]
              w-[175px]
              items-center
              justify-center
              rounded-[50%]
              border
              border-[#4a4a4a]
              bg-transparent
              font-[var(--font-body)]
              text-[14px]
              font-normal
              uppercase
              tracking-[0.14em]
              text-[#3f3f3f]
              transition-all
              duration-300
              hover:bg-[#3f3f3f]
              hover:text-[#f7f5ef]
            "
          >
            GET IN TOUCH
          </a>

        </div>

        {/* RIGHT IMAGE */}

        <div
          className="
            absolute
            right-0
            top-0
            hidden
            h-[700px]
            w-[34.5%]
            lg:block
          "
        >
          <Image
            src="/images/sch.png"
            alt="Calm and welcoming therapy space"
            fill
            priority
            className="object-cover"
            sizes="35vw"
          />
        </div>

      </div>
    </section>
  );
}