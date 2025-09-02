// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { Button } from "@/components/ui/button";
// import { Menu } from "lucide-react";

// const Header = () => {
//   const headerRef = useRef<HTMLElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);
//   const menuRef = useRef<HTMLButtonElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Header entrance animation
//       gsap.from(headerRef.current, {
//         y: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         delay: 0.5
//       });

//       // Stagger logo, menu, and CTA
//       gsap.from([logoRef.current, menuRef.current, ctaRef.current], {
//         y: -30,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power2.out",
//         delay: 0.8
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <header
//       ref={headerRef}
//       className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div ref={logoRef} className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-sm">A</span>
//             </div>
//             <span className="text-xl font-bold">Agenz</span>
//             <span className="text-sm text-muted-foreground hidden md:block">| based in UK</span>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             ref={menuRef}
//             className="md:hidden p-2 glass-card rounded-lg hover:bg-muted/50 transition-colors"
//           >
//             <Menu className="w-6 h-6" />
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
//               Services
//             </a>
//             <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
//               Projects
//             </a>
//             <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
//               About
//             </a>
//           </nav>

//           {/* CTA Button */}
//           <div ref={ctaRef}>
//             <Button 
//               className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-semibold px-6 py-2 transition-all duration-300 hover:scale-105"
//             >
//               Contact Us
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, ArrowRight } from "lucide-react";

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scope = headerRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.from(scope, { y: -100, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
      gsap.from([leftRef.current, ctaRef.current], {
        y: -24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.4,
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/35 border-b border-white/10"
    >
      {/* No container so edge elements can touch the viewport */}
      <div className="flex items-stretch justify-between">
        {/* LEFT: hamburger + brand inline (flush left) */}
        <div ref={leftRef} className="flex items-center">
          {/* Hamburger block */}
          <button
            className="inline-flex h-full items-center justify-center px-6 md:px-8 bg-orange-400 text-black font-medium"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Brand right beside hamburger */}
          <div className="flex items-center gap-3 pl-4 pr-3">
            {/* Replace with actual logo SVG if needed */}
            <div className="h-6 w-6 bg-white" />
            <div className="text-white font-semibold">Agenz</div>
            <div className="text-white/60 hidden sm:block">| based in UK</div>
          </div>
        </div>

        {/* RIGHT: split CTA (flush right) */}
        <div ref={ctaRef} className="inline-flex">
          <a
            href="/contact"
            className="group inline-flex items-stretch bg-orange-400 text-black"
          >
            <span className="px-6 md:px-8 py-4 text-base">Contact Us</span>
            <span className="flex items-center justify-center px-6 py-4 border-l border-black/30">
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
