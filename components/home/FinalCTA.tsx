import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative h-[600px] w-full sm:h-[650px] md:h-[680px] lg:h-[665px]">
        <Image
          src="/images/beee.png"
          alt="Peaceful natural landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/35"
        />

        {/* TEXT — ALWAYS ON IMAGE */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full px-6 sm:px-10 md:px-14 lg:px-[7.55%]">
            
            <div className="max-w-[950px]">
              <p className="mb-6 font-body text-[10px] font-medium uppercase leading-[1.7] tracking-[0.16em] text-white/90 sm:text-[11px] md:text-[12px] lg:text-[13px]">
                A GROUNDED SPACE FOR MEANINGFUL CHANGE
              </p>

            <h2
  className="
    font-heading
    text-[34px]
    font-light
    leading-[1.08]
    tracking-[-0.02em]
    text-white
    sm:text-[42px]
    md:text-[50px]
    lg:text-[58px]
  "
>
  <span className="block whitespace-nowrap">
    You don’t have to keep
  </span>

  <span className="block whitespace-nowrap">
    carrying everything
  </span>

  <span className="block whitespace-nowrap">
    on your own.
  </span>

  <span className="mt-1 block whitespace-nowrap font-script font-normal text-white">
    Let’s begin.
  </span>
</h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}