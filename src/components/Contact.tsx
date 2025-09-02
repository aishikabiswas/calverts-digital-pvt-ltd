// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ContactHeroOnly() {
//   const heroRef = useRef<HTMLElement | null>(null);
//   const orbRef = useRef<HTMLImageElement | null>(null);
//   const copyRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const scope = heroRef.current;
//     if (!scope) return;

//     const ctx = gsap.context(() => {
//       if (orbRef.current) {
//         gsap.to(orbRef.current, { y: -24, duration: 2, ease: "power1.inOut", repeat: -1, yoyo: true }); // float [web:113]
//         gsap.to(orbRef.current, { filter: "brightness(1.25) saturate(1.1)", duration: 2, ease: "power2.inOut", repeat: -1, yoyo: true }); // glow [web:113]
//       }

//       ScrollTrigger.create({
//         trigger: scope,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//         onUpdate: (self) => {
//           const p = self.progress;
//           if (orbRef.current) {
//             gsap.to(orbRef.current, { y: p * 140, rotation: p * 120, scale: 1 - p * 0.2, duration: 0.3 }); // parallax [web:116][web:32]
//           }
//         },
//       });

//       if (copyRef.current) {
//         gsap.from(copyRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 }); // entrance [web:113]
//       }
//     }, scope);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main className="bg-black text-white">
//       {/* Hero only */}
//       <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
//         {/* Optional background image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
//           style={{ backgroundImage: "url('/bg-hero.png')" }}
//           aria-hidden
//         />

//         {/* Floating orb on the right */}
//         <div className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 pointer-events-none">
//           <img
//             ref={orbRef}
//             src="/hero1.png"
//             alt=""
//             aria-hidden
//             className="w-64 h-64 md:w-80 md:h-80 object-contain"
//           />
//           {/* Orange glow */}
//           <div className="absolute inset-0 rounded-full blur-2xl bg-orange-400/25" aria-hidden />
//         </div>

//         {/* Headline copy */}
//         <div ref={copyRef} className="relative z-10 w-full max-w-7xl mx-auto px-6">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-2 text-white/70 text-sm uppercase tracking-wider">
//               <span className="h-2 w-2 bg-orange-400" /> {/* orange badge */}
//               Contact Us
//             </span>
//             <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-[0.95]">
//               <span className="block">Let’s Discuss Your</span>
//               <span className="block text-orange-400">Next Project</span> {/* orange accent */}
//             </h1>
//             <p className="mt-6 text-white/70 max-w-xl">
//               Tell a bit about goals and timelines—get a tailored plan, quote, and start date within 24 hours.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHeroOnly() {
  const heroRef = useRef<HTMLElement | null>(null);
  const orbRef = useRef<HTMLImageElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scope = heroRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      if (orbRef.current) {
        gsap.to(orbRef.current, { y: -24, duration: 2, ease: "power1.inOut", repeat: -1, yoyo: true }); // float [web:113]
        gsap.to(orbRef.current, { filter: "brightness(1.25) saturate(1.1)", duration: 2, ease: "power2.inOut", repeat: -1, yoyo: true }); // glow [web:113]
      }

      ScrollTrigger.create({
        trigger: scope,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          if (orbRef.current) {
            gsap.to(orbRef.current, { y: p * 140, rotation: p * 120, scale: 1 - p * 0.2, duration: 0.3 }); // parallax [web:116][web:32]
          }
        },
      });

      if (copyRef.current) {
        gsap.from(copyRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 }); // entrance [web:113]
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-black text-white">
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/bg-hero.png')" }}
          aria-hidden
        />

        {/* Floating orb */}
        <div className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 pointer-events-none">
          <img ref={orbRef} src="/hero1.png" alt="" aria-hidden className="w-64 h-64 md:w-80 md:h-80 object-contain" />
          <div className="absolute inset-0 rounded-full blur-2xl bg-orange-400/25" aria-hidden /> {/* orange glow [web:125][web:127] */}
        </div>

        <div ref={copyRef} className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-white/70 text-sm uppercase tracking-wider">
              <span className="h-2 w-2 bg-orange-400" /> {/* badge [web:127][web:126] */}
              Contact Us
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-[0.95]">
              <span className="block">Let’s Discuss Your</span>
              <span className="block text-orange-400">Next Project</span> {/* orange accent [web:131] */}
            </h1>
            <p className="mt-6 text-white/70 max-w-xl">
              Tell a bit about goals and timelines—get a tailored plan, quote, and start date within 24 hours.
            </p>

            {/* Split button */}
            <div className="mt-8 inline-flex">
              <a
                href="/"
                className="group inline-flex items-stretch bg-orange-400 text-black font-medium"
              >
                {/* Left segment */}
                <span className="px-8 py-4">
                  Contact Us
                </span>
                {/* Divider + right arrow segment */}
                <span className="flex items-center justify-center px-6 py-4 border-l border-black/30"> {/* vertical divider [web:139][web:135] */}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
