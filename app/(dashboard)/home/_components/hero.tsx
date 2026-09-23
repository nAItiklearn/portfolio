"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function Hero() {
  const isMobile = useIsMobile();

  const gradients = isMobile
    ? [
        "radial-gradient(ellipse 0% 20% at 50% 150%, #38bdf8 0%, #7dd3fc 15%, #bae6fd 60%, #ffffff 100%)",
        "radial-gradient(ellipse 120% 45% at 50% -10%, #38bdf8 0%, #7dd3fc 15%, #bae6fd 50%, #ffffff 100%)",
      ]
    : [
        "radial-gradient(ellipse 0% 30% at 50% 150%, #38bdf8 0%, #7dd3fc 15%, #bae6fd 60%, #ffffff 100%)",
        "radial-gradient(ellipse 70% 80% at 50% -10%, #38bdf8 0%, #7dd3fc 15%, #bae6fd 50%, #ffffff 100%)",
      ];

  return (
    <motion.div
      id="hero"
      animate={{ background: gradients }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-screen h-screen relative overflow-hidden mb-5"
    >
      <div className="absolute z-10 flex flex-col bottom-[16vh] sm:bottom-0 w-full">
        <p
          className="font-inter px-4 sm:px-7 py-0 m-0 mb-4 sm:mb-16 bg-gradient-to-r from-gray-800 via-sky-800/80 to-sky-500/40 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] font-medium"
          style={{ fontSize: "clamp(1.2rem, 3.2vw, 2.5rem)" }}
        >
          Howdy! I am Naitik
        </p>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.3,
          }}
          className="font-sinteca select-none drop-shadow-2xl m-0 leading-none whitespace-nowrap overflow-hidden"
          style={{ fontSize: "clamp(2.5rem, 18vw, 21.98rem)" }}
        >
          Naitik Sahu
        </motion.p>
      </div>
    </motion.div>
  );
}
