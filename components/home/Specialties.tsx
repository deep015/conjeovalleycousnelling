const specialties = [
  {
    title: "Trauma",
    description:
      "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
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
      <h3 className="font-heading text-[30px] font-light leading-[1.15] text-[#333333] md:text-[32px]">
        {title}
      </h3>

      <p className="mt-10 max-w-[430px] font-body text-[19px] font-normal leading-[1.9] tracking-[0.01em] text-[#555555] md:text-[21px] md:leading-[1.9]">
        {description}
      </p>

<a
  href="/about"
  className="link-underline text-[15px] tracking-[0.14em] text-[#333333]"
>
  LEARN MORE
</a>
    </article>
  );
}

export default function Specialties() {
  return (
    <section className="bg-white">
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
            <h2 className="font-heading text-[44px] font-light leading-[1.05] text-[#333333] md:text-[48px] lg:text-[50px]">
              Our{" "}
              <span className="font-script text-[52px] font-normal text-[#82bec1] md:text-[56px] lg:text-[60px]">
                specialties
              </span>
              <br />
              include...
            </h2>
          </div>

          {/* RIGHT SPECIALTIES */}
          <div
            className="
              grid
              grid-cols-1
              gap-x-[75px]
              gap-y-[135px]
              md:grid-cols-2
              lg:gap-x-[85px]
              lg:gap-y-[145px]
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