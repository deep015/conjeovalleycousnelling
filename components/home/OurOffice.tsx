import Image from "next/image";

const officeImages = [
  {
    src: "/images/office.jfif",
    alt: "Dr. Maya Reynolds therapy office in Santa Monica",
  },
  {
    src: "/images/office1.jfif",
    alt: "Quiet and comfortable therapy space in Santa Monica",
  },
 
];

export default function OurOffice() {
  return (
    <section
      id="office"
      className="w-full overflow-hidden bg-[#E9DECC]"
    >
      <div className="mx-auto w-[82%] max-w-[1400px] py-[100px] md:py-[130px] lg:py-[155px]">

        {/* Heading + Intro */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[32%_68%] lg:gap-x-[50px]">

          <div>
            <p className="font-body text-[14px] uppercase tracking-[0.16em] text-[#343434] sm:text-[15px]">
              OUR OFFICE
            </p>

            <h2 className="mt-[55px] font-heading text-[46px] font-light leading-[1.05] tracking-[-0.025em] text-[#171717] sm:text-[52px] lg:text-[58px]">
              A calm place to
              <br />
              slow down &
              <br />
              <span className="font-script text-[#6D9C98]">
                reconnect.
              </span>
            </h2>
          </div>

          <div className="lg:pt-[68px]">
            <p className="max-w-[620px] font-body text-[18px] leading-[1.9] text-[#292929] md:text-[19px]">
              Dr. Maya Reynolds offers in-person therapy from her
              Santa Monica office, a quiet and private space designed
              to feel calm, comfortable, and grounding.
            </p>

            <p className="mt-[24px] max-w-[620px] font-body text-[18px] leading-[1.9] text-[#292929] md:text-[19px]">
              Natural light, an uncluttered environment, and a
              comfortable setting create space to slow down and
              focus on the work that brings you here.
            </p>

            <div className="mt-[38px]">
              <p className="font-body text-[14px] uppercase tracking-[0.15em] text-[#343434]">
                SANTA MONICA, CALIFORNIA
              </p>

              <p className="mt-[8px] font-body text-[17px] leading-[1.6] text-[#4a4a4a]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
            </div>
          </div>
        </div>

        {/* Office Images */}
        <div className="mt-[85px] grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Large image */}
          <div className="relative aspect-[1.15/1] overflow-hidden md:row-span-2">
            <Image
              src={officeImages[0].src}
              alt={officeImages[0].alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 55vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Small image */}
          <div className="relative aspect-[1.35/1] overflow-hidden">
            <Image
              src={officeImages[1].src}
              alt={officeImages[1].alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Small image */}
        
        </div>

        {/* Bottom info */}
        <div className="mt-[65px] flex flex-col gap-6 border-t border-[#cfc3b0] pt-[28px] md:flex-row md:items-start md:justify-between">

          <p className="max-w-[620px] font-body text-[17px] leading-[1.8] text-[#4a4a4a]">
            Prefer to meet from home? Secure telehealth is also
            available for clients located in California.
          </p>

          <a
            href="#contact"
            className="w-fit border-b border-[#303030] pb-[7px] font-body text-[14px] tracking-[0.15em] text-[#242424] transition-opacity duration-300 hover:opacity-60"
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}