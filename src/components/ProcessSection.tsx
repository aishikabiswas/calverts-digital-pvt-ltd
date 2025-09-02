// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ProcessSection = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [activeSteps, setActiveSteps] = useState([0]); // step 1 active by default

//   const processSteps = [
//     {
//       step: "Step 1",
//       title: "Research",
//       description:
//         "We listen stories of user to understand pain points and give a rough estimate about cost and time-frame.",
//       image: "https://picsum.photos/300/200?random=1",
//     },
//     {
//       step: "Step 2",
//       title: "Implementation",
//       description:
//         "We bring your vision to life with cutting-edge design and development practices, ensuring every detail is perfect.",
//       image: "https://picsum.photos/300/200?random=2",
//     },
//     {
//       step: "Step 3",
//       title: "Testing",
//       description:
//         "Rigorous testing ensures your project works flawlessly across all devices and platforms before launch.",
//       image: "https://picsum.photos/300/200?random=3",
//     },
//   ];

//   // GSAP fade-up animation
//   useEffect(() => {
//     if (sectionRef.current) {
//       gsap.from(sectionRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }
//   }, []);

//   const handleStepClick = (index: number) => {
//     // mark all steps up to the clicked one as active
//     const newActive = Array.from({ length: index + 1 }, (_, i) => i);
//     setActiveSteps(newActive);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-black text-white py-32 px-6 md:px-16"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//         {/* Left Title */}
//         <div className="flex flex-col justify-center">
//           <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-orange-400 mb-6">
//             <span className="w-2 h-2 bg-orange-400"></span> Process
//           </span>
//           <h2 className="text-4xl md:text-6xl font-light leading-tight">
//             A color rich in{" "}
//             <span className="text-orange-400 font-semibold">Meaning</span>
//           </h2>
//         </div>

//         {/* Right Steps (Vertical Timeline) */}
//         <div className="flex flex-col space-y-8 relative">
//           {processSteps.map((step, index) => {
//             const isActive = activeSteps.includes(index);
//             return (
//               <div
//                 key={index}
//                 className="relative pl-8 cursor-pointer"
//                 onClick={() => handleStepClick(index)}
//               >
//                 {/* Connector Line */}
//                 {index !== processSteps.length - 1 && (
//                   <div
//                     className={`absolute left-[7px] top-6 w-[2px] h-full ${
//                       activeSteps.includes(index + 1)
//                         ? "bg-orange-400"
//                         : "bg-gray-700"
//                     }`}
//                   ></div>
//                 )}

//                 {/* Step Dot */}
//                 <span
//                   className={`absolute -left-[2px] top-1 w-4 h-4 rounded-none ${
//                     isActive ? "bg-orange-400" : "bg-gray-600"
//                   }`}
//                 ></span>

//                 {/* Step Info */}
//                 <p
//                   className={`text-sm mb-1 ${
//                     isActive ? "text-orange-400" : "text-gray-400"
//                   }`}
//                 >
//                   {step.step}
//                 </p>
//                 <h3
//                   className={`text-lg font-medium mb-3 ${
//                     isActive ? "text-orange-400" : "text-gray-500"
//                   }`}
//                 >
//                   {step.title}
//                 </h3>

//                 {/* Details: stays open once activated */}
//                 {isActive && (
//                   <div className="flex items-start gap-6 bg-gray-900 p-5 rounded-lg border border-green-700/30">
//                     <img
//                       src={step.image}
//                       alt={step.title}
//                       className="w-32 h-20 object-cover rounded"
//                     />
//                     <p className="text-gray-300 text-sm leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Header typing refs
  const preTextRef = useRef<HTMLSpanElement>(null);      // "A color rich in "
  const highlightRef = useRef<HTMLSpanElement>(null);    // "Meaning"
  const caretRef = useRef<HTMLSpanElement>(null);        // blinking cursor

  // Typed state (never undefined)
  const [activeSteps, setActiveSteps] = useState<number[]>([0]);

  const processSteps = [
    {
      step: "Step 1",
      title: "Research",
      description:
        "We listen stories of user to understand pain points and give a rough estimate about cost and time-frame.",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      step: "Step 2",
      title: "Implementation",
      description:
        "We bring your vision to life with cutting-edge design and development practices, ensuring every detail is perfect.",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      step: "Step 3",
      title: "Testing",
      description:
        "Rigorous testing ensures your project works flawlessly across all devices and platforms before launch.",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  // Section fade-up + typing headers
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Entrance fade/translate
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      // Start typing when section enters
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => typeHeaders(),
      });

      function typeHeaders() {
        const preEl = preTextRef.current!;
        const hiEl = highlightRef.current!;
        const caretEl = caretRef.current!;

        // Split into characters
        const preSplit = new SplitText(preEl, { type: "chars", charsClass: "char-pre" });
        const hiSplit = new SplitText(hiEl, { type: "chars", charsClass: "char-hi" });

        // Ensure base visibility and hide characters initially
        gsap.set([preEl, hiEl], { opacity: 1 });
        gsap.set([...preSplit.chars, ...hiSplit.chars], { autoAlpha: 0 });

        // Caret blink
        gsap.fromTo(
          caretEl,
          { autoAlpha: 1 },
          { autoAlpha: 0, duration: 0.6, repeat: -1, ease: "power1.inOut" }
        );

        // Helper to get last visible character as an HTMLElement (no ES2023 findLast)
        const lastVisible = (arr: Element[]): HTMLElement | undefined => {
          for (let i = arr.length - 1; i >= 0; i--) {
            const el = arr[i] as HTMLElement;
            if (getComputedStyle(el).visibility !== "hidden") return el;
          }
          return undefined;
        };

        // Move caret to end of a character
        const moveCaret = (el: HTMLElement | undefined) => {
          if (!el) return;
          const b = el.getBoundingClientRect();
          const parentB = caretEl.parentElement!.getBoundingClientRect();
          const x = b.right - parentB.left;
          const y = b.top - parentB.top + b.height - 4;
          gsap.set(caretEl, { x, y });
        };

        const tl = gsap.timeline({ defaults: { ease: "none" } });

        // Type the preface text
        tl.to(preSplit.chars, {
          autoAlpha: 1,
          duration: 0.04,
          stagger: 0.04,
          onUpdate: function () {
            const lastEl =
              lastVisible(preSplit.chars) ||
              (preSplit.chars[0] as HTMLElement | undefined);
            moveCaret(lastEl);
          },
        });

        // Small pause
        tl.to({}, { duration: 0.15 });

        // Type the highlighted word
        tl.to(hiSplit.chars, {
          autoAlpha: 1,
          duration: 0.035,
          stagger: 0.035,
          onUpdate: function () {
            const lastEl =
              lastVisible(hiSplit.chars) ||
              (hiSplit.chars[0] as HTMLElement | undefined);
            moveCaret(lastEl);
          },
        });

        // Cleanup SplitText instances when context is reverted
        ctx.add(() => {
          preSplit.revert();
          hiSplit.revert();
          trigger.kill();
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleStepClick = (index: number) => {
    const newActive: number[] = Array.from({ length: index + 1 }, (_, i) => i);
    setActiveSteps(newActive);
  };

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-32 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Title */}
        <div className="flex flex-col justify-center relative">
          <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-orange-400 mb-6">
            <span className="w-2 h-2 bg-orange-400" />
            Process
          </span>

          {/* Header with typing */}
          <h2 className="text-4xl md:text-6xl font-light leading-tight relative">
            <span ref={preTextRef} className="opacity-0">
              A color rich in{" "}
            </span>
            <span ref={highlightRef} className="text-orange-400 font-semibold opacity-0">
              Meaning
            </span>
            {/* caret */}
            <span
              ref={caretRef}
              aria-hidden
              className="absolute inline-block w-[2px] h-[1.2em] bg-orange-400"
              style={{ transform: "translate(0, 0)" }}
            />
          </h2>
        </div>

        {/* Right Steps (Vertical Timeline) */}
        <div className="flex flex-col space-y-8 relative">
          {processSteps.map((step, index) => {
            const isActive = activeSteps.includes(index);
            return (
              <div
                key={index}
                className="relative pl-8 cursor-pointer"
                onClick={() => handleStepClick(index)}
              >
                {/* Connector Line */}
                {index !== processSteps.length - 1 && (
                  <div
                    className={`absolute left-[7px] top-6 w-[2px] h-full ${
                      activeSteps.includes(index + 1) ? "bg-orange-400" : "bg-gray-700"
                    }`}
                  />
                )}

                {/* Step Dot */}
                <span
                  className={`absolute -left-[2px] top-1 w-4 h-4 rounded-none ${
                    isActive ? "bg-orange-400" : "bg-gray-600"
                  }`}
                />

                {/* Step Info */}
                <p className={`text-sm mb-1 ${isActive ? "text-orange-400" : "text-gray-400"}`}>
                  {step.step}
                </p>
                <h3 className={`text-lg font-medium mb-3 ${isActive ? "text-orange-400" : "text-gray-500"}`}>
                  {step.title}
                </h3>

                {/* Details: stays open once activated */}
                {isActive && (
                  <div className="flex items-start gap-6 bg-gray-900/60 backdrop-blur-sm p-5 rounded-lg border border-orange-700/30">
                    <img src={step.image} alt={step.title} className="w-32 h-20 object-cover rounded" />
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
