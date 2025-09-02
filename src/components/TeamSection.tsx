// import { useLayoutEffect, useRef, useState, useMemo } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Card } from "@/components/ui/card";
// import { Linkedin, Twitter, Dribbble } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const viewportRef = useRef<HTMLDivElement>(null); // the visible window
//   const trackRef = useRef<HTMLDivElement>(null);    // the moving strip
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const orbRef = useRef<HTMLImageElement>(null);
//   const [index, setIndex] = useState(0);
//   const slideTween = useRef<gsap.core.Tween | null>(null);
//   const revealTL = useRef<gsap.core.Timeline | null>(null);

//   const members = useMemo(
//     () => [
//       {
//         name: "Sophia Lawson",
//         role: "UI/UX Designer",
//         hashtag: "#thestatic",
//         image: "https://picsum.photos/400/500?random=1",
//         socials: [
//           { icon: <Twitter size={18} />, url: "#" },
//           { icon: <Dribbble size={18} />, url: "#" },
//           { icon: <Linkedin size={18} />, url: "#" },
//         ],
//       },
//       {
//         name: "Ethan Carter",
//         role: "Frontend Developer",
//         hashtag: "#reactmaster",
//         image: "https://picsum.photos/400/500?random=2",
//         socials: [
//           { icon: <Twitter size={18} />, url: "#" },
//           { icon: <Dribbble size={18} />, url: "#" },
//           { icon: <Linkedin size={18} />, url: "#" },
//         ],
//       },
//       {
//         name: "Maya Patel",
//         role: "Project Manager",
//         hashtag: "#visionlead",
//         image: "https://picsum.photos/400/500?random=3",
//         socials: [
//           { icon: <Twitter size={18} />, url: "#" },
//           { icon: <Dribbble size={18} />, url: "#" },
//           { icon: <Linkedin size={18} />, url: "#" },
//         ],
//       },
//     ],
//     []
//   );

//   // Section entrance
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       if (!sectionRef.current) return;
//       gsap.from(sectionRef.current, {
//         opacity: 0,
//         y: 60,
//         duration: 1.1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   // Prepare only the first slide visible; others hidden but measured
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       cardRefs.current.forEach((card, i) => {
//         if (!card) return;
//         const img = card.querySelector("img");
//         const textEls = card.querySelectorAll(".fade-text");
//         if (i === 0) {
//           gsap.set(img, { opacity: 1, scale: 1, rotate: 0 });
//           gsap.set(textEls, { opacity: 1, y: 0 });
//         } else {
//           gsap.set(img, { opacity: 0, scale: 1.1, rotate: 2 });
//           gsap.set(textEls, { opacity: 0, y: 30 });
//         }
//       });
//     }, trackRef);
//     return () => ctx.revert();
//   }, [members.length]);

//   // Reveal helper (kills previous)
//   const playCardReveal = (i: number) => {
//     revealTL.current?.kill();
//     const card = cardRefs.current[i];
//     if (!card) return null;
//     const img = card.querySelector("img");
//     const textEls = card.querySelectorAll(".fade-text");
//     // reset target before animating (only this card)
//     gsap.set(img, { opacity: 0, scale: 1.1, rotate: 2 });
//     gsap.set(textEls, { opacity: 0, y: 30 });
//     const tl = gsap
//       .timeline()
//       .to(img, {
//         opacity: 1,
//         scale: 1,
//         rotate: 0,
//         duration: 0.9,
//         ease: "power4.out",
//       })
//       .to(
//         textEls,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power4.out",
//         },
//         "-=0.4"
//       );
//     revealTL.current = tl;
//     return tl;
//   };

//   // Ensure slide sizing: each slide equals viewport width
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const viewport = viewportRef.current!;
//       const slides = cardRefs.current.filter(Boolean) as HTMLDivElement[];
//       const setSizes = () => {
//         const vw = viewport.clientWidth;
//         slides.forEach((s) => {
//           // lock each slide width so transform math is stable
//           s.style.flex = `0 0 ${vw}px`;
//           s.style.width = `${vw}px`;
//         });
//         // reposition to current index after resize
//         moveTo(index, 0);
//       };
//       setSizes();
//       const ro = new ResizeObserver(setSizes);
//       ro.observe(viewport);
//       return () => ro.disconnect();
//     }, viewportRef);
//     return () => ctx.revert();
//   }, [index, members.length]);

//   // Move track by px instead of xPercent
//   const moveTo = (i: number, dur = 0.9) => {
//     const viewport = viewportRef.current;
//     const track = trackRef.current;
//     if (!viewport || !track) return;
//     const vw = viewport.clientWidth;
//     slideTween.current?.kill();
//     slideTween.current = gsap.to(track, {
//       x: -i * vw,
//       duration: dur,
//       ease: "power3.inOut",
//     });
//   };

//   // Apply slide + reveal on index change
//   useLayoutEffect(() => {
//     moveTo(index, 0.9);
//     // pre-clear the outgoing slide so its content doesn't tween again
//     playCardReveal(index);
//   }, [index]);

//   // Orb animation (unchanged)
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const orb = orbRef.current;
//       if (!orb || !sectionRef.current) return;

//       gsap.to(orb, {
//         y: -30,
//         duration: 2,
//         ease: "power1.inOut",
//         repeat: -1,
//         yoyo: true,
//       });

//       gsap.to(orb, {
//         filter: "brightness(1.3) saturate(1.2)",
//         duration: 2,
//         ease: "power2.inOut",
//         repeat: -1,
//         yoyo: true,
//       });

//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 1,
//         onUpdate: (self) => {
//           const p = self.progress;
//           gsap.to(orb, {
//             y: p * 180,
//             rotation: p * 180,
//             scale: 1 - p * 0.25,
//             duration: 0.3,
//             ease: "none",
//           });
//         },
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % members.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + members.length) % members.length);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
//     >
//       {/* Background */}
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
//         style={{ backgroundImage: "url('/bg-hero.png')" }}
//       />

//       {/* Glow */}
//       <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-orange-400/25 to-yellow-500/25 rounded-full blur-3xl" />

//       {/* Orb */}
//       <div className="pointer-events-none absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//         <img
//           ref={orbRef}
//           src="/hero1.png"
//           alt="Decorative orb"
//           className="w-72 h-72 md:w-60 md:h-60 object-contain"
//         />
//         <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-cyan-400/30 rounded-full blur-xl" />
//       </div>

//       {/* Slider viewport */}
//       <div ref={viewportRef} className="overflow-hidden w-full max-w-md relative z-20">
//         <div ref={trackRef} className="flex will-change-transform">
//           {members.map((member, i) => (
//             <Card
//               key={i}
//               ref={(el) => (cardRefs.current[i] = el)}
//               className="
//                 p-8 bg-gradient-to-b from-gray-900/80 to-gray-800/70
//                 backdrop-blur-xl border border-white/10
//                 text-center rounded-2xl shadow-2xl
//               "
//             >
//               <div className="flex justify-between items-center mb-6 fade-text">
//                 <p className="text-sm text-gray-300">{member.role}</p>
//                 <div className="flex space-x-3">
//                   {member.socials.map((s, j) => (
//                     <a
//                       key={j}
//                       href={s.url}
//                       className="w-8 h-8 rounded-full bg-gray-700/60 flex items-center justify-center hover:bg-primary/60 transition"
//                     >
//                       {s.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <div className="w-full flex justify-center mb-6">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-60 object-cover rounded-lg shadow-lg"
//                 />
//               </div>

//               <p className="text-sm text-gray-400 mb-2 fade-text">
//                 {member.hashtag}
//               </p>

//               <h3 className="text-2xl font-semibold text-white fade-text">
//                 {member.name}
//               </h3>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 hover:bg-white/20 transition z-30"
//       >
//         <span className="text-white text-lg">‹</span>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 hover:bg-white/20 transition z-30"
//       >
//         <span className="text-white text-lg">›</span>
//       </button>
//     </section>
//   );
// };

// export default TeamSection;
import { useLayoutEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Dribbble } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null); // visible window
  const trackRef = useRef<HTMLDivElement>(null);    // moving strip
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const orbRef = useRef<HTMLImageElement>(null);

  const [index, setIndex] = useState(0);
  const slideTween = useRef<gsap.core.Tween | null>(null);
  const revealTL = useRef<gsap.core.Timeline | null>(null);

  const members = useMemo(
    () => [
      {
        name: "Sophia Lawson",
        role: "UI/UX Designer",
        hashtag: "#thestatic",
        image: "https://picsum.photos/400/500?random=1",
        socials: [
          { icon: <Twitter size={18} />, url: "#" },
          { icon: <Dribbble size={18} />, url: "#" },
          { icon: <Linkedin size={18} />, url: "#" },
        ],
      },
      {
        name: "Ethan Carter",
        role: "Frontend Developer",
        hashtag: "#reactmaster",
        image: "https://picsum.photos/400/500?random=2",
        socials: [
          { icon: <Twitter size={18} />, url: "#" },
          { icon: <Dribbble size={18} />, url: "#" },
          { icon: <Linkedin size={18} />, url: "#" },
        ],
      },
      {
        name: "Maya Patel",
        role: "Project Manager",
        hashtag: "#visionlead",
        image: "https://picsum.photos/400/500?random=3",
        socials: [
          { icon: <Twitter size={18} />, url: "#" },
          { icon: <Dribbble size={18} />, url: "#" },
          { icon: <Linkedin size={18} />, url: "#" },
        ],
      },
    ],
    []
  );

  // Section entrance
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []); [4][5]

  // Initial states: only first card visible
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const img = card.querySelector("img");
        const textEls = card.querySelectorAll(".fade-text");
        if (i === 0) {
          gsap.set(img, { opacity: 1, scale: 1, rotate: 0, y: 0 });
          gsap.set(textEls, { opacity: 1, y: 0 });
        } else {
          gsap.set(img, { opacity: 0, scale: 1.06, rotate: 1.5, y: 8 });
          gsap.set(textEls, { opacity: 0, y: 24 });
        }
      });
    }, trackRef);
    return () => ctx.revert();
  }, [members.length]); [4]

  // Slide-in reveal animation for a given card
  const playCardReveal = (i: number) => {
    revealTL.current?.kill();
    const card = cardRefs.current[i];
    if (!card) return null;

    const img = card.querySelector("img");
    const textEls = card.querySelectorAll(".fade-text");

    // reset incoming card to start state
    gsap.set(img, { opacity: 0, scale: 1.06, rotate: 1.5, y: 8 });
    gsap.set(textEls, { opacity: 0, y: 24 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(img, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      duration: 0.9,
    }).to(
      textEls,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
      },
      "-=0.35"
    );

    revealTL.current = tl;
    return tl;
  }; [11][12]

  // Ensure per-slide width equals viewport width; keep position on resize
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const viewport = viewportRef.current!;
      const slides = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      const setSizes = () => {
        const vw = viewport.clientWidth;
        slides.forEach((s) => {
          s.style.flex = `0 0 ${vw}px`;
          s.style.width = `${vw}px`;
        });
        moveTo(index, 0);
      };

      setSizes();
      const ro = new ResizeObserver(setSizes);
      ro.observe(viewport);
      return () => ro.disconnect();
    }, viewportRef);
    return () => ctx.revert();
  }, [index, members.length]); [4]

  // Move track by px (stable across transforms)
  const moveTo = (i: number, dur = 0.9) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const vw = viewport.clientWidth;
    slideTween.current?.kill();
    slideTween.current = gsap.to(track, {
      x: -i * vw,
      duration: dur,
      ease: "power3.inOut",
    });
  }; [4]

  // Slide + reveal on index changes
  useLayoutEffect(() => {
    moveTo(index, 0.9);
    playCardReveal(index);
  }, [index]); [11]

  // Orb animation (unchanged)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const orb = orbRef.current;
      if (!orb || !sectionRef.current) return;

      gsap.to(orb, {
        y: -30,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(orb, {
        filter: "brightness(1.3) saturate(1.2)",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.to(orb, {
            y: p * 180,
            rotation: p * 180,
            scale: 1 - p * 0.25,
            duration: 0.3,
            ease: "none",
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []); [4][13]

  const nextSlide = () => setIndex((prev) => (prev + 1) % members.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + members.length) % members.length);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/bg-hero.png')" }}
      />

      {/* Glow */}
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-orange-400/25 to-yellow-500/25 rounded-full blur-3xl" />

      {/* Orb */}
      <div className="pointer-events-none absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          ref={orbRef}
          src="/hero1.png"
          alt="Decorative orb"
          className="w-72 h-72 md:w-60 md:h-60 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-cyan-400/30 rounded-full blur-xl" />
      </div>

      {/* Slider viewport */}
      <div ref={viewportRef} className="overflow-hidden w-full max-w-md relative z-20">
        <div ref={trackRef} className="flex will-change-transform">
          {members.map((member, i) => (
            <Card
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="
                p-8
    bg-slate-900/40                
    backdrop-blur-md               
    border border-white/10        
    ring-1 ring-white/5            
    shadow-2xl/40                  
    text-center rounded-2xl
    transition-colors
    hover:bg-slate-900/50 hover:border-white/15
              "
            >
              <div className="flex justify-between items-center mb-6 fade-text">
                <p className="text-sm text-gray-300">{member.role}</p>
                <div className="flex space-x-3">
                  {member.socials.map((s, j) => (
                    <a
                      key={j}
                      href={s.url}
                      className="w-8 h-8 rounded-full bg-gray-700/60 flex items-center justify-center hover:bg-primary/60 transition"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full flex justify-center mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-60 object-cover rounded-lg shadow-lg"
                />
              </div>

              <p className="text-sm text-gray-400 mb-2 fade-text">
                {member.hashtag}
              </p>

              <h3 className="text-2xl font-semibold text-white fade-text">
                {member.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 hover:bg-white/20 transition z-30"
      >
        <span className="text-white text-lg">‹</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 hover:bg-white/20 transition z-30"
      >
        <span className="text-white text-lg">›</span>
      </button>
    </section>
  );
};

export default TeamSection;
