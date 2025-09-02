// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Footer = () => {
//   const footerRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Footer entrance animation
//       gsap.from(footerRef.current?.children, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: footerRef.current,
//           start: "top 90%"
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <footer
//       ref={footerRef}
//       className="py-16 relative overflow-hidden border-t border-border/30"
//     >
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Logo and Description */}
//           <div className="md:col-span-2">
//             <div className="flex items-center space-x-2 mb-6">
//               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold text-sm">A</span>
//               </div>
//               <span className="text-xl font-bold">Agenz</span>
//               <span className="text-sm text-muted-foreground">| based in UK</span>
//             </div>
//             <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
//               We are a creative digital agency that transforms brands through innovative design and strategic thinking.
//             </p>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Services</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
//                   Visual Design
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
//                   Art Direction
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
//                   Branding Strategy
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
//                   Web Development
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Contact</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="mailto:hello@agenz.studio" className="text-muted-foreground hover:text-primary transition-colors">
//                   hello@agenz.studio
//                 </a>
//               </li>
//               <li>
//                 <a href="tel:+442012345678" className="text-muted-foreground hover:text-primary transition-colors">
//                   +44 (0) 20 1234 5678
//                 </a>
//               </li>
//               <li>
//                 <span className="text-muted-foreground">
//                   London, UK
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-border/30">
//           <div className="flex items-center space-x-6 mb-4 md:mb-0">
//             <span className="text-sm text-muted-foreground">
//               © 2025 Agenz. All rights reserved.
//             </span>
//           </div>
          
//           <div className="flex items-center space-x-6">
//             <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scope = footerRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.from(Array.from(scope.children), {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scope,
          start: "top 90%",
        },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        {/* Top row: Left label + right columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Links label with square accent */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 bg-orange-400" /> {/* accent square */}
              <span className="text-white/80">Links</span>
            </div>
          </div>

          {/* Right columns: Menu + Legal */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8 md:gap-16">
            {/* Menu */}
            <div>
              <div className="text-white/70">Menu</div>
              <ul className="mt-6 space-y-5">
                <li>
                  <a href="/" className="text-white/90 hover:text-orange-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-white/90 hover:text-orange-400 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-white/90 hover:text-orange-400 transition">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="text-white/70">Legal</div>
              <ul className="mt-6 space-y-5">
                <li>
                  <a href="/pricing" className="text-white/90 hover:text-orange-400 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-white/90 hover:text-orange-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white/90 hover:text-orange-400 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/10" />

        {/* Bottom row: Subscribe label + newsletter input and helper text */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Subscribe label */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 bg-orange-400" />
              <span className="text-white/80">Subscribe</span>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="md:col-span-2">
            <div>
              <div className="text-white/70">Newsletter</div>

              {/* email input bar */}
              <form
                className="mt-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  // hook up later
                }}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Enter your email
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  autoComplete="email"
                  className="w-full bg-black text-white placeholder-white/40 border border-white/15 focus:border-orange-400 focus:outline-none px-4 py-3"
                />
              </form>

              {/* helper line */}
              <p className="mt-6 text-white/70">
                Sign up to learn about AI in the <span className="text-white">business world</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright strip (optional; keep minimal to match screenshot density) */}
        <div className="mt-12 h-px w-full bg-white/10" />
        <div className="py-6 text-sm text-white/60">
          © {new Date().getFullYear()} Agenz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
