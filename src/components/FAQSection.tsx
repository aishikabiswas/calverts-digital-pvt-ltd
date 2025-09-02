// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Card } from "@/components/ui/card";

// gsap.registerPlugin(ScrollTrigger);

// const faqs = [
//   {
//     question: "What is your typical project timeline?",
//     answer:
//       "It depends on the project! Simple tasks take about 1–2 weeks, while full branding or websites usually take 3–6 weeks."
//   },
//   {
//     question: "What services does your agency offer?",
//     answer:
//       "We offer a wide range of creative services including branding, web design, development, digital strategy, and more."
//   },
//   {
//     question: "What is your revision policy?",
//     answer:
//       "We provide multiple revision rounds to ensure the final result matches your expectations. Details depend on the project scope."
//   },
//   {
//     question: "How do we get started working together?",
//     answer:
//       "Simply reach out via our contact form or email, and we’ll set up an intro call to understand your vision and goals."
//   },
//   {
//     question: "Will I own the rights to the designs?",
//     answer:
//       "Yes! Once the project is completed and payment is made, you will own full rights to the designs."
//   },
//   {
//     question: "How do you approach a new project or brand?",
//     answer:
//       "We start with research and discovery to understand your business, followed by strategy, design, and iterative feedback."
//   }
// ];

// const FAQSection = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const faqRef = useRef<HTMLDivElement>(null);

//   // by default only first FAQ is active
//   const [activeSteps, setActiveSteps] = useState<number[]>([0]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title animation
//       gsap.from(titleRef.current?.children, {
//         y: 60,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%"
//         }
//       });

//       // FAQ animation
//       gsap.from(faqRef.current?.children, {
//         y: 40,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: faqRef.current,
//           start: "top 85%"
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   const handleClick = (index: number) => {
//     // progressively open → all previous stay active
//     const newSteps = Array.from({ length: index + 1 }, (_, i) => i);
//     setActiveSteps(newSteps);
//   };

//   return (
//     <section
//       id="faq"
//       ref={sectionRef}
//       className="py-32 relative overflow-hidden"
//     >
//       <div className="container mx-auto px-6">
//         {/* Section Label */}
//         <div className="mb-16">
//           <span className="inline-block px-4 py-2 glass-card rounded-full text-primary text-sm font-medium tracking-wider uppercase">
//             FAQ
//           </span>
//         </div>

//         {/* Section Title */}
//         <div ref={titleRef} className="mb-20">
//           <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
//             <span className="block overflow-hidden">
//               <span className="inline-block">Answers to</span>
//             </span>
//             <span className="block overflow-hidden">
//               <span className="inline-block text-primary">Your Queries</span>
//             </span>
//           </h2>
//         </div>

//         {/* FAQ List */}
//         <div ref={faqRef} className="space-y-4 max-w-3xl">
//           {faqs.map((faq, i) => {
//             const isActive = activeSteps.includes(i);

//             return (
//               <Card
//                 key={i}
//                 className={`glass-card border border-border/50 overflow-hidden transition-all duration-300 cursor-pointer ${
//                   isActive ? "bg-primary/5 border-primary/40" : ""
//                 }`}
//                 onClick={() => handleClick(i)}
//               >
//                 <div className="p-6">
//                   <h3
//                     className={`text-lg font-medium transition-colors ${
//                       isActive ? "text-primary" : "text-foreground/90"
//                     }`}
//                   >
//                     {faq.question}
//                   </h3>

//                   <div
//                     className={`transition-all duration-500 text-muted-foreground ${
//                       isActive
//                         ? "max-h-40 mt-3 opacity-100"
//                         : "max-h-0 opacity-0"
//                     } overflow-hidden`}
//                   >
//                     <p className="text-base leading-relaxed">{faq.answer}</p>
//                   </div>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
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
  // Single-open: store index or -1 for all closed
  const [openIndex, setOpenIndex] = useState<number>(0); // default first open for visibility

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? -1 : i)); // click again to close the same item
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      {/* Outer container keeps left column readable; adjust px at xl to truly hit edges if needed */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-6">
        {/* 2-column grid: 1/3 left, 2/3 right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left: Heading (1/3) */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-16 mb-10">
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-400">
          <span className="w-2 h-2 rounded-none bg-orange-400"></span>
          FAQ
        </span>
      </div>
            </div>
            <h2 className="text-white text-6xl md:text-5xl font-extrabold leading-tight">
              <span className="block">Answers to</span>
              <span className="block text-orange-400">Your Queries</span>
            </h2>
          </div>

          {/* Right: FAQ list (2/3), edge-to-edge and no gaps between boxes */}
          <div className="md:col-span-2 max-w-none w-full">
            <div className="space-y-0">
              {faqs.map((f, i) => {
                const active = openIndex === i;

                return (
                  <div
                    key={i}
                    className={[
                      "w-full text-left border bg-transparent transition-colors",
                      active ? "border-orange-500" : "border-white/30",
                      "hover:bg-white/5", // subtle hover
                      // square boxes: intentionally no rounded-* classes
                    ].join(" ")}
                  >
                    {/* Click area for toggling open/close */}
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="w-full text-left p-5 focus:outline-none"
                      aria-expanded={active}
                      aria-controls={`faq-panel-${i}`}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {f.question}
                      </h3>
                    </button>

                    {/* Collapsible answer: smooth max-height + fade (no inter-item spacing) */}
                    <div
                      id={`faq-panel-${i}`}
                      className="overflow-hidden transition-[max-height] duration-300 ease-out"
                      style={{ maxHeight: active ? 800 : 0 }}
                      aria-hidden={!active}
                    >
                      <div
                        className={`px-5 pb-5 pt-0 text-white/90 transition-opacity duration-200 ${
                          active ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {f.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End right column */}
        </div>
      </div>
    </section>
  );
}
