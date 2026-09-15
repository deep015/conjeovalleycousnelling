"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "Dr. Maya Reynolds works with adults who may be feeling overwhelmed by anxiety, stress, burnout, or the lingering effects of past experiences. Many clients are thoughtful, self-aware, high-achieving professionals, entrepreneurs, and creatives who feel exhausted, stuck in overthinking, or emotionally on edge.",
  },
  {
    question: "What concerns can therapy help with?",
    answer:
      "Therapy can support adults navigating anxiety, panic, trauma, burnout, perfectionism, and chronic stress. Sessions can also explore how earlier life experiences may be affecting relationships, confidence, and your sense of safety.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "Dr. Reynolds takes a warm, collaborative, and grounded approach. Therapy is structured enough to feel supportive while still allowing space for reflection and depth. Depending on your needs, treatment may incorporate CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "Do you offer trauma therapy?",
    answer:
      "Yes. Trauma work is approached carefully and at a pace that supports safety, stabilization, and regulation. This can include working with single-incident experiences as well as complex or long-standing patterns connected to childhood, relationships, or chronic stress.",
  },
  {
    question: "Do you offer in-person and telehealth therapy?",
    answer:
      "Yes. In-person therapy is available from Dr. Reynolds' office in Santa Monica. Secure telehealth is also available for clients located in California.",
  },
  {
    question: "What is the therapy process like?",
    answer:
      "Therapy is collaborative and tailored to your needs. The work may include practical tools alongside deeper reflection and exploration, with the goal of developing greater insight, resilience, and a stronger relationship with yourself.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#d9d4cb]">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-8 py-[28px] text-left"
      >
        <span className="font-heading text-[25px] font-light leading-[1.25] text-[#333333] md:text-[28px]">
          {question}
        </span>

        <span
          aria-hidden="true"
          className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[#77716a] font-body text-[22px] font-light leading-none text-[#444444]"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[720px] pb-[30px] pr-10 font-body text-[17px] leading-[1.85] text-[#555555] md:text-[18px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="w-full bg-[#f7f5ef]">
      <div className="mx-auto grid w-[82%] max-w-[1400px] grid-cols-1 gap-[70px] py-[105px] md:py-[130px] lg:grid-cols-[30%_70%] lg:gap-x-[60px] lg:py-[155px]">

        {/* Left */}
        <div>
          <p className="font-body text-[14px] uppercase tracking-[0.16em] text-[#343434] sm:text-[15px]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-[55px] font-heading text-[46px] font-light leading-[1.05] tracking-[-0.025em] text-[#333333] sm:text-[52px] lg:text-[58px]">
            Questions
            <br />
            before we
            <br />
            <span className="font-script text-[#6D9C98]">
              begin?
            </span>
          </h2>

          <p className="mt-[40px] max-w-[330px] font-body text-[16px] leading-[1.8] text-[#5a5a5a]">
            A few things you may want to know about therapy
            with Dr. Maya Reynolds.
          </p>
        </div>

        {/* Right */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}