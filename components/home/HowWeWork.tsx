export default function HowWeWork() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E9DECC]">
      <div className="mx-auto min-h-[850px] max-w-[1920px]">

        {/* MAIN CONTENT AREA */}
        <div className="px-6 pt-24 pb-20 sm:px-10 md:px-16 lg:ml-[8.8%] lg:w-[68%] lg:px-0 lg:pt-[140px] lg:pb-[65px]">

          {/* SECTION LABEL */}
          <p className="font-body text-[14px] font-normal tracking-[0.16em] text-[#343434] sm:text-[15px]">
            HOW WE WORK
          </p>

          {/* MAIN HEADING */}
          <h2 className="mt-[145px] font-heading text-[48px] font-light leading-[1.05] tracking-[-0.025em] text-[#171717] sm:text-[54px] md:text-[58px] lg:text-[60px]">
            We’re here to make a difference.
          </h2>

          {/* TWO TEXT COLUMNS */}
          <div className="mt-[72px] grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-[7%]">

            {/* LEFT COLUMN */}
            <div>
              <p className="font-body text-[15px] font-normal uppercase leading-[1.9] tracking-[0.14em] text-[#202020] sm:text-[16px]">
                THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT
                ONCE, IT’S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
              </p>

              <p className="mt-7 font-body text-[17px] font-normal leading-[1.75] text-[#292929] sm:text-[18px]">
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that
                no two people are the same and that personalized therapy means
                an intentional, tailored approach. (You won’t find anything
                “one-size-fits-all” here.) If you’re ready to do the work,
                we’re ready to help.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <p className="font-body text-[17px] font-normal leading-[1.75] text-[#292929] sm:text-[18px]">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you’ve learned in your
                daily life.
              </p>

              <p className="mt-7 font-body text-[17px] font-normal leading-[1.75] text-[#292929] sm:text-[18px]">
                We take what we do seriously because we know how important it
                is for you to heal from what’s hurting you, discover a
                fulfilling life, and build meaningful relationships. Our goal
                is to walk alongside you in this journey, offering support and
                guidance as you uncover your strengths and embrace what the
                future can hold for you.
              </p>
            </div>

          </div>

          {/* CTA */}
          <a
            href="#"
            className="mt-[75px] inline-block border-b border-[#303030] pb-[8px] font-body text-[14px] font-normal tracking-[0.15em] text-[#242424] transition-opacity duration-300 hover:opacity-60"
          >
            LEARN MORE ABOUT US
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-6 mb-10 h-[600px] sm:mx-10 md:mx-16 lg:absolute lg:right-[0.7%] lg:top-[140px] lg:mx-0 lg:mb-0 lg:h-[738px] lg:w-[22.7%]">
          <img
            src="/images/7.webp"
            alt="Mother and daughter walking together on the beach"
            className="h-full w-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}