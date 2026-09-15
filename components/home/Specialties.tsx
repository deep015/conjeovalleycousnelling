const specialties = [
  {
    title: "Anxiety & Stress Therapy",
    description:
      "When constant worry, overthinking, body tension, or difficulty sleeping begins to affect everyday life, therapy can help you slow down, understand what is happening, and develop practical tools for feeling more grounded and in control.",
  },
  {
    title: "Trauma Therapy",
    description:
      "Past experiences can continue to shape relationships, confidence, and your sense of safety. Trauma therapy offers a carefully paced space to build safety, process difficult experiences, and develop greater regulation, resilience, and understanding.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For professionals, entrepreneurs, and creatives carrying high expectations and constant internal pressure, therapy can create space to explore burnout, perfectionism, and the patterns that keep you feeling exhausted or stuck.",
  },
];

function SpecialtyItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="specialty-item">
      <h3
        className="
          font-heading
          text-[30px]
          font-light
          leading-[1.15]
          text-[#333333]
          md:text-[32px]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-10
          max-w-[430px]
          font-body
          text-[19px]
          font-normal
          leading-[1.9]
          tracking-[0.01em]
          text-[#555555]
          md:text-[21px]
          md:leading-[1.9]
        "
      >
        {description}
      </p>

      <a
        href="#contact"
        className="
          link-underline
          text-[15px]
          tracking-[0.14em]
          text-[#333333]
        "
      >
        LEARN MORE
      </a>
    </article>
  );
}

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="bg-white"
    >
      <div
        className="
          mx-auto
          w-[82%]
          max-w-[1400px]
          py-[110px]
          md:py-[145px]
          lg:py-[170px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-y-[80px]
            lg:grid-cols-[30%_70%]
            lg:gap-x-[40px]
          "
        >
          {/* LEFT HEADING */}

          <div className="lg:pt-[5px]">
            <h2
              className="
                font-heading
                text-[44px]
                font-light
                leading-[1.05]
                text-[#333333]
                md:text-[48px]
                lg:text-[50px]
              "
            >
              How I can
              <br />
              <span
                className="
                  font-script
                  text-[52px]
                  font-normal
                  text-[#82bec1]
                  md:text-[56px]
                  lg:text-[60px]
                "
              >
                help
              </span>
              ...
            </h2>
          </div>

          {/* RIGHT SPECIALTIES */}

          <div
            className="
              grid
              grid-cols-1
              gap-x-[75px]
              gap-y-[100px]
              md:grid-cols-2
              lg:gap-x-[85px]
              lg:gap-y-[120px]
            "
          >
            {specialties.map((specialty) => (
              <SpecialtyItem
                key={specialty.title}
                title={specialty.title}
                description={specialty.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}