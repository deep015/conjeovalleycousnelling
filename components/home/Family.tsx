import Image from "next/image";

export default function Family() {
  return (
    <main className="w-full bg-white">
      {/* Other homepage sections */}

      <section className="w-full bg-white">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[45.3%_54.7%]">
          
          {/* LEFT IMAGE */}
          <div className="relative  mt-[100px] h-[520px] w-full sm:h-[600px] lg:h-[630px]">
            <Image
              src="/images/8.webp"
              alt="Family standing together at the beach"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45.3vw"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex min-h-[520px] items-end px-8 pb-16 sm:px-12 sm:pb-20 lg:min-h-[730px] lg:items-center lg:px-[5.1vw] lg:pb-0">
            <h2
              className="
                max-w-[540px]
                font-[var(--font-heading)]
                text-[42px]
                font-light
                leading-[1.32]
                tracking-[-0.02em]
                text-[#292929]
                sm:text-[48px]
                lg:text-[54px]
                xl:text-[56px]
              "
            >
              Honoring where you’ve
              <br />

              been{" "}
              <span
                className="
                  relative
                  inline-block
                  font-[var(--font-script)]
                  text-[1.12em]
                  font-normal
                  leading-none
                  text-[#7db7b9]
                "
              >
                &
              </span>{" "}
              helping shape
              <br />

              where you’re headed.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}