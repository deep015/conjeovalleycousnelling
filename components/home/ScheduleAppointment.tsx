import Image from "next/image";

export default function ScheduleAppointment() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5ef]">
      <div className="relative min-h-[815px]">

        {/* LEFT DECORATIVE IMAGE
            Only part of the image is intentionally visible */}
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
            src="/images/10.webp"
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
          {/* Small section label */}
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
            Schedule an appointment
          </p>

          {/* Main heading */}
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
            Find a therapist who is the
            <br />

            right fit for{" "}
            <span
              className="
                font-[var(--font-script)]
                font-normal
                italic
                text-[#83bdc0]
              "
            >
              you.
            </span>
          </h2>

          {/* Body copy */}
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
              Coming to therapy is a courageous decision, and connecting with
              the right kind of therapist makes all the difference. We
              understand that your journey is personal, and we're here to
              support you with care and understanding every step of the way.
              Each member of our team brings dedicated expertise and a
              commitment to support you in your struggles. We want you to feel
              prioritized, understood, and empowered.
            </p>

            <p className="mt-[18px]">
              Click the button below to schedule an appointment.
            </p>
          </div>

          {/* BOOK NOW */}
       <a
  href="#"
  className="
    inline-flex
    h-[60px]
    w-[145px]
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
  BOOK NOW
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
            src="/images/9.webp"
            alt=""
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