const expertiseLeft = [
  "DISSOCIATION",
  "TRAUMA",
  "FAMILY CONFLICT",
  "SPECIAL NEEDS PARENTING",
  "DEPRESSION",
  "MARRIAGE",
];

const expertiseRight = [
  "ANXIETY",
  "RELATIONSHIPS",
  "CHILDREN",
  "TEENS",
  "INTIMACY & CONNECTION",
  "...AND MORE.",
];

function ExpertiseColumn({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={item}
          className={`flex min-h-[92px] items-center ${
            index !== items.length - 1
              ? "border-b border-[#E8E3DC]"
              : ""
          }`}
        >
          <span className="font-body text-[15px] font-normal tracking-[0.16em] text-[#3D3D3D] sm:text-[16px]">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Expertise() {
  return (
    <section className="w-full bg-white px-6 py-24 sm:px-10 md:px-16 lg:px-[8.8%] lg:py-[110px]">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-14 lg:grid-cols-[28%_1fr] lg:gap-[7%]">

        {/* LEFT HEADING */}
        <div>
          <h2 className="font-heading font-light leading-[0.95] tracking-[-0.025em] text-[#303030]">
            <span className="block text-[44px] sm:text-[48px] lg:text-[50px]">
              Our areas of
            </span>

            <span
              className="
                relative
                -left-1
                mt-2
                block
                font-normal
                text-[58px]
                leading-[0.75]
                tracking-normal
                text-[#82B9BE]
                sm:text-[64px]
                lg:text-[68px]
              "
              style={{
                fontFamily:
                  '"Brush Script MT", "Segoe Script", cursive',
              }}
            >
              expertise
            </span>
          </h2>
        </div>

        {/* RIGHT SIDE — TWO COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[7.5%]">
          <ExpertiseColumn items={expertiseLeft} />
          <ExpertiseColumn items={expertiseRight} />
        </div>

      </div>
    </section>
  );
}