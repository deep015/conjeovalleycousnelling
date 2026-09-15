import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f5ef]">

      {/* =====================================================
          DESKTOP / TABLET
          ===================================================== */}

      <div
        className="
          grid
          w-full
          grid-cols-1

          lg:grid-cols-[43%_57%]
        "
      >

        {/* ===================================================
            LEFT CONTENT
            =================================================== */}

        <div
          className="
            order-2
            flex
            flex-col
            justify-center

            bg-[#f7f5ef]

            px-6
            py-14

            sm:px-10
            sm:py-16

            md:px-14
            md:py-20

            lg:order-1
            lg:min-h-[680px]
            lg:px-[5.2vw]
            lg:py-[90px]

            xl:min-h-[700px]
          "
        >

          {/* Eyebrow */}

          <p
            className="
              font-body
              text-[10px]
              font-normal
              uppercase
              leading-[1.9]
              tracking-[0.14em]
              text-[#28516b]

              sm:text-[11px]
              md:text-[12px]
              lg:text-[13px]
              xl:text-[14px]
            "
          >
            IN-PERSON THERAPY IN SANTA MONICA
            <br />
            &amp; SECURE TELEHEALTH ACROSS CALIFORNIA
          </p>


          {/* Heading */}

          <h1
            className="
              mt-10

              max-w-[650px]

              font-heading
              text-[42px]
              font-light
              leading-[1.08]
              tracking-[-0.025em]
              text-[#292929]

              sm:mt-11
              sm:text-[48px]

              md:mt-12
              md:text-[54px]

              lg:mt-[58px]
              lg:text-[clamp(48px,4vw,65px)]

              xl:text-[67px]
            "
          >
            Therapy for anxiety,
            <br />

            trauma &amp; burnout
            <br />

            in{" "}
            <span
              className="
                inline-block
                font-script
                font-normal
                leading-[0.8]
                tracking-[-0.02em]
                text-[#6d9c98]
              "
            >
              Santa Monica
            </span>
            .
          </h1>


          {/* Description */}

          <p
            className="
              mt-7

              max-w-[540px]

              font-body
              text-[14px]
              font-normal
              leading-[1.75]
              text-[#55524d]

              sm:mt-8
              sm:text-[15px]

              md:text-[16px]

              lg:mt-[40px]
              lg:text-[16px]

              xl:text-[17px]
            "
          >
            Grounded, collaborative therapy for adults navigating
            anxiety, stress, trauma, burnout, and the pressure to
            always keep going.
          </p>


          {/* CTA */}

          <Link
            href="#contact"
            className="
              group

              mt-8

              inline-flex
              w-fit
              items-center
              gap-7

              border-b
              border-[#555]
              pb-[8px]

              font-body
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-[#3f3f3f]

              transition-all
              duration-300

              hover:gap-10
              hover:opacity-65

              sm:mt-9
              sm:text-[11px]

              lg:mt-[45px]
              lg:text-[12px]
            "
          >
            <span>SCHEDULE A CONSULTATION</span>

            <span
              aria-hidden="true"
              className="
                text-[20px]
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

        </div>


        {/* ===================================================
            RIGHT MAYA IMAGE
            =================================================== */}

        <div
          className="
            order-1
            relative
            flex
            w-full
            items-center
            justify-center

            bg-[#f7f5ef]

            lg:order-2
            lg:min-h-[680px]

            xl:min-h-[700px]
          "
        >

          {/* 
            IMPORTANT:
            object-contain = NO CROPPING
            h-auto = natural image ratio
          */}

          <Image
            src="/images/IMGG1.png"
            alt="Dr. Maya Reynolds in her therapy office"
            width={1024}
            height={1536}
           
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 80vw,
              57vw
            "
            className="
              block
              h-auto
              max-h-[680px]
              w-auto
              max-w-full
              object-contain

              sm:max-h-[720px]

              lg:max-h-[680px]

              xl:max-h-[700px]
            "
          />


    

        </div>

      </div>


    

    </section>
  );
}