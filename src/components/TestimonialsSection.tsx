
// "use client";

// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     highlight: "Love to work on the next project",
//     text: "The Agenz team truly amplified our messaging through their expert use of visuals.",
//     author: "Zlatan Amberland",
//     position: "PM at Dumar Inc",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     size: "big",
//   },
//   {
//     highlight: "Best team ever!",
//     author: "Martha Johnson",
//     position: "CEO, ULink",
//     avatar: "https://randomuser.me/api/portraits/women/45.jpg",
//     size: "small",
//   },
//   {
//     highlight: "Excellent Work!",
//     author: "Adam Lewis",
//     position: "Manager, OKG",
//     avatar: "https://randomuser.me/api/portraits/men/34.jpg",
//     size: "small",
//   },
//   {
//     highlight: "Impressive Showcase!",
//     text: "A rebrand is not typically done in such an archaic industry like ours, so this was huge really.",
//     author: "Conor Bradley",
//     position: "Senior Marketing, Spotify",
//     avatar: "https://randomuser.me/api/portraits/men/35.jpg",
//     size: "big",
//   },
//   {
//     highlight: "Super Creative!",
//     author: "Rachel Adams",
//     position: "Founder, Zeno",
//     avatar: "https://randomuser.me/api/portraits/women/29.jpg",
//     size: "small",
//   },
//   {
//     highlight: "Mind Blowing",
//     author: "John Smith",
//     position: "Director, Nova",
//     avatar: "https://randomuser.me/api/portraits/men/40.jpg",
//     size: "big",
//   },
// ];

// const TestimonialsMarquee = () => {
//   return (
//     <section className="relative bg-black text-white py-28 overflow-hidden">
//       {/* Left blackish fade overlay (top layer, non-interactive) */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-y-0 left-0
//           w-2/5 md:w-1/3
//           bg-gradient-to-r from-black/90 via-black/70 to-transparent
//           z-20
//         "
//         aria-hidden="true"
//       />

//       {/* Section Label (kept above overlay for readability) */}
//       <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-16 mb-10">
//         <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-green-400">
//           <span className="w-2 h-2 rounded-none bg-green-400"></span>
//           Testimonials
//         </span>
//       </div>

//       {/* Auto Scrolling Container */}
//       <motion.div
//         className="relative z-10 flex gap-3 w-[140%] -ml-[15%]"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//       >
//         {[...testimonials, ...testimonials].map((t, i) => (
//           <div
//             key={i}
//             className={`flex-shrink-0 bg-[#141414] rounded-xl border border-[#222] hover:border-green-500/50 transition-colors duration-300 ${
//               t.size === "big" ? "w-[380px] h-[320px]" : "w-[220px] h-[200px]"
//             } p-6 flex flex-col justify-between`}
//           >
//             {t.highlight && (
//               <p className="text-green-400 text-sm font-medium mb-4">
//                 {t.highlight}
//               </p>
//             )}
//             {t.text && (
//               <blockquote className="text-gray-200 text-sm mb-6 leading-relaxed">
//                 “{t.text}”
//               </blockquote>
//             )}
//             <div className="flex items-center gap-3 mt-auto">
//               <img
//                 src={t.avatar}
//                 alt={t.author}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-green-400 font-semibold text-sm">{t.author}</p>
//                 <p className="text-xs text-gray-400">{t.position}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default TestimonialsMarquee;
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    highlight: "Love to work on the next project",
    text: "The Agenz team truly amplified our messaging through their expert use of visuals.",
    author: "Zlatan Amberland",
    position: "PM at Dumar Inc",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    size: "big",
  },
  {
    highlight: "Best team ever!",
    author: "Martha Johnson",
    position: "CEO, ULink",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    size: "small",
  },
  {
    highlight: "Excellent Work!",
    author: "Adam Lewis",
    position: "Manager, OKG",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    size: "small",
  },
  {
    highlight: "Impressive Showcase!",
    text: "A rebrand is not typically done in such an archaic industry like ours, so this was huge really.",
    author: "Conor Bradley",
    position: "Senior Marketing, Spotify",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    size: "big",
  },
  {
    highlight: "Super Creative!",
    author: "Rachel Adams",
    position: "Founder, Zeno",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    size: "small",
  },
  {
    highlight: "Mind Blowing",
    author: "John Smith",
    position: "Director, Nova",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    size: "big",
  },
];

const TestimonialsMarquee = () => {
  return (
    <section
      className="
        relative text-white py-28 overflow-hidden
        bg-[url('/global.png')]
        bg-cover bg-center bg-no-repeat 
      "
    >
      {/* Left blackish fade overlay */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0
          w-2/5 md:w-1/3
          bg-gradient-to-r from-black via-black/90 to-transparent
          z-20
        "
        aria-hidden="true"
      />

      {/* Backdrop tint for contrast (optional) */}
      <div className="absolute inset-0 bg-black/40 -z-0" aria-hidden="true" />

      {/* Section Label */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-16 mb-10">
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-400">
          <span className="w-2 h-2 rounded-none bg-orange-400"></span>
          Testimonials
        </span>
      </div>

      {/* Auto Scrolling Container */}
      <motion.div
        className="relative z-10 flex gap-3 w-[140%] -ml-[15%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className={`flex-shrink-0 bg-[#141414] rounded-xl border border-[#222] hover:border-orange-500/50 transition-colors duration-300 ${
              t.size === "big" ? "w-[380px] h-[320px]" : "w-[220px] h-[200px]"
            } p-6 flex flex-col justify-between`}
          >
            {t.highlight && (
              <p className="text-orange-400 text-sm font-medium mb-4">
                {t.highlight}
              </p>
            )}
            {t.text && (
              <blockquote className="text-gray-200 text-sm mb-6 leading-relaxed">
                “{t.text}”
              </blockquote>
            )}
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-orange-400 font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-gray-400">{t.position}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsMarquee;
