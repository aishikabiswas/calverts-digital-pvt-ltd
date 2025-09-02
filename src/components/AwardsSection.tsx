import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AwardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgEl = imgRef.current;

      if (imgEl) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        });

        // Step 1: Animate background image
        tl.fromTo(
          imgEl,
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        );

        // Step 2: Animate texts AFTER image finishes
        tl.fromTo(
          textRefs.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
          },
          ">0.2"
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image */}
      <div
        ref={imgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1739437753183-ad22527c73aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Overlay divs (3 columns) */}
      <div className="relative z-10 grid grid-cols-3 w-full h-screen text-white">
        {/* Left */}
        <div
          ref={(el) => el && textRefs.current.push(el)}
          className="flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ease-in-out hover:backdrop-blur-lg hover:bg-black/40"
        >
          <h3 className="text-lg uppercase tracking-wider">Happy Clients</h3>
          <p className="text-6xl font-bold mt-12">98+</p>
        </div>

        {/* Middle */}
        <div
          ref={(el) => el && textRefs.current.push(el)}
          className="flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ease-in-out hover:backdrop-blur-lg hover:bg-black/40"
        >
          <h3 className="text-lg uppercase tracking-wider">Our Revenue</h3>
          <p className="text-6xl font-bold mt-12 text-orange-400">200M</p>
        </div>

        {/* Right */}
        <div
          ref={(el) => el && textRefs.current.push(el)}
          className="flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ease-in-out hover:backdrop-blur-lg hover:bg-black/40"
        >
          <h3 className="text-lg uppercase tracking-wider y-10 ">Project Delivery</h3>
          <p className="text-6xl font-bold mt-12">99%</p>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
