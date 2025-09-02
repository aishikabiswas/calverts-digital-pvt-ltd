import { useState } from "react";

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "What is your typical project timeline?",
    answer:
      "It depends on the project! Simple tasks take about 1–2 weeks, while full branding or websites usually take 3–6 weeks.",
  },
  {
    question: "What services does your agency offer?",
    answer:
      "We offer a wide range of creative services including branding, web design, development, digital strategy, and more.",
  },
  {
    question: "What is your revision policy?",
    answer:
      "We provide multiple revision rounds to ensure the final result matches expectations. Details depend on the project scope.",
  },
  {
    question: "How do we get started working together?",
    answer:
      "Reach out via the contact form or email, and we’ll set up an intro call to understand the vision and goals.",
  },
  {
    question: "Will I own the rights to the designs?",
    answer:
      "Yes! Once the project is completed and payment is made, full rights to the designs transfer.",
  },
  {
    question: "How do you approach a new project or brand?",
    answer:
      "We start with research and discovery to understand the business, followed by strategy, design, and iterative feedback.",
  },
];

export default function FAQSection() {
  // multiple open: boolean array, initially first open
  const [open, setOpen] = useState<boolean[]>(
    () => faqs.map((_, i) => i === 0)
  );

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = [...prev]; // new array to trigger rerender
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-black">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left: Title 1/3 */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="inline-block h-2 w-2 bg-orange-400 align-middle mr-2" />
              <span className="text-sm font-semibold uppercase text-white/70">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-[0.95]">
              <span className="block text-white">Answers to</span>
              <span className="block text-orange-400">Your Queries</span>
            </h2>
          </div>

          {/* Right: List 2/3, edge-to-edge, no gaps */}
          <div className="md:col-span-2 max-w-none w-full">
            <div className="space-y-0">
              {faqs.map((f, i) => {
                const active = open[i];
                return (
                  <div
                    key={i}
                    className={[
                      "w-full text-left transition-colors border border-transparent",
                      "bg-neutral-900/90",
                      active ? "bg-neutral-800 border-l-4 border-orange-400" : "border-l border-white/10",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="w-full text-left px-6 py-5 focus:outline-none"
                      aria-expanded={active}
                      aria-controls={`faq-panel-${i}`}
                    >
                      <h3 className={["text-xl font-semibold", active ? "text-orange-400" : "text-white/80"].join(" ")}>
                        {f.question}
                      </h3>
                    </button>

                    {/* Collapsible answer using Tailwind-safe arbitrary max-height */}
                    <div
                      id={`faq-panel-${i}`}
                      className={[
                        "overflow-hidden transition-[max-height] duration-300 ease-out",
                        active ? "max-h-[320px]" : "max-h-0",
                      ].join(" ")}
                      aria-hidden={!active}
                    >
                      <div className="px-6 pb-6 pt-0 text-white/80 transition-opacity duration-200">
                        <p className="leading-relaxed">{f.answer}</p>
                      </div>
                    </div>

                    {!active && <div className="h-px bg-white/10" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
