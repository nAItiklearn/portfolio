/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useRef, useState } from "react";

const words = "About me now!".split(" ");

const socialItems = [
  { label: "GitHub", link: "https://github.com/nAItiklearn" },
  { label: "LinkedIn", link: "https://linkedin.com/in/nAItiklearn" },
  { label: "Insta", link: "https://instagram.com/naitiknyc" },
];

const visuals = [
  // Posters
  {
    src: "/posters/poster1.jpg",
    alt: "poster-1",
    className:
      "absolute w-[28vw] sm:w-[20vw] lg:w-68 h-auto rotate-6 right-[2%] lg:right-6 top-[4%] lg:top-6 shadow-2xl rounded-xl",
    delay: 0.1,
  },
  {
    src: "/posters/poster2.jpg",
    alt: "poster-2",
    className:
      "absolute w-[30vw] sm:w-[22vw] lg:w-72 h-auto rotate-12 left-[2%] lg:left-6 bottom-[4%] lg:bottom-6 shadow-2xl rounded-xl",
    delay: 0.2,
  },
  {
    src: "/posters/poster3.jpg",
    alt: "poster-3",
    className:
      "absolute w-[28vw] sm:w-[20vw] lg:w-68 h-auto -rotate-8 left-[3%] lg:left-8 top-[3%] lg:top-5 shadow-2xl rounded-xl",
    delay: 0.3,
  },
  {
    src: "/posters/poster4.jpg",
    alt: "poster-4",
    className:
      "absolute w-[30vw] sm:w-[22vw] lg:w-72 h-auto -rotate-6 right-[3%] lg:right-8 bottom-[3%] lg:bottom-5 shadow-2xl rounded-xl",
    delay: 0.4,
  },
  {
    src: "/posters/poster5.jpeg",
    alt: "poster-5",
    className:
      "absolute w-[26vw] sm:w-[18vw] lg:w-64 h-auto rotate-3 left-[36%] lg:left-[38%] top-[2%] lg:top-4 shadow-2xl rounded-xl",
    delay: 0.5,
  },
  {
    src: "/posters/poster6.png",
    alt: "poster-6",
    className:
      "absolute w-[28vw] sm:w-[20vw] lg:w-68 h-auto -rotate-12 right-[2%] lg:right-6 top-[38%] shadow-2xl rounded-xl",
    delay: 0.6,
  },
  {
    src: "/posters/poster7.png",
    alt: "poster-7",
    className:
      "absolute w-[28vw] sm:w-[20vw] lg:w-68 h-auto rotate-8 left-[2%] lg:left-6 top-[36%] shadow-2xl rounded-xl",
    delay: 0.7,
  },

  // Stickers from /hero-sec/
  {
    src: "/hero-sec/charizard.png",
    alt: "charizard-sticker",
    className:
      "absolute w-[18vw] sm:w-[13vw] lg:w-44 h-auto rotate-12 right-[18%] lg:right-[22%] top-[8%] lg:top-12 drop-shadow-xl",
    delay: 0.35,
  },
  {
    src: "/hero-sec/nyan_cat.png",
    alt: "nyan-cat-sticker",
    className:
      "absolute w-[22vw] sm:w-[15vw] lg:w-52 h-auto -rotate-6 left-[8%] lg:left-[12%] top-[14%] lg:top-20 drop-shadow-xl",
    delay: 0.45,
  },
  {
    src: "/hero-sec/banana_cat.png",
    alt: "banana-cat-sticker",
    className:
      "absolute w-[16vw] sm:w-[11vw] lg:w-36 h-auto -rotate-12 left-[18%] lg:left-[22%] bottom-[12%] lg:bottom-16 drop-shadow-xl",
    delay: 0.55,
  },
  {
    src: "/hero-sec/batman.png",
    alt: "batman-sticker",
    className:
      "absolute w-[15vw] sm:w-[10vw] lg:w-32 h-auto -rotate-10 right-[6%] lg:right-[8%] bottom-[20%] lg:bottom-26 drop-shadow-xl",
    delay: 0.65,
  },
  {
    src: "/hero-sec/gengar.png",
    alt: "gengar-sticker",
    className:
      "absolute w-[16vw] sm:w-[11vw] lg:w-36 h-auto rotate-10 left-[32%] lg:left-[35%] bottom-[3%] lg:bottom-5 drop-shadow-xl",
    delay: 0.75,
  },
  {
    src: "/hero-sec/cat_cupcake.png",
    alt: "cat-cupcake-sticker",
    className:
      "absolute w-[16vw] sm:w-[11vw] lg:w-36 h-auto rotate-6 right-[26%] lg:right-[30%] bottom-[3%] lg:bottom-5 drop-shadow-xl",
    delay: 0.85,
  },
  {
    src: "/hero-sec/french_horn.png",
    alt: "french-horn-sticker",
    className:
      "absolute w-[15vw] sm:w-[10vw] lg:w-32 h-auto -rotate-12 right-[32%] lg:right-[35%] top-[5%] lg:top-6 drop-shadow-xl",
    delay: 0.95,
  },
  {
    src: "/hero-sec/kafka.png",
    alt: "kafka-sticker",
    className:
      "absolute w-[14vw] sm:w-[10vw] lg:w-32 h-auto rotate-6 left-[4%] lg:left-[6%] bottom-[22%] lg:bottom-28 drop-shadow-xl",
    delay: 1.05,
  },
  {
    src: "/hero-sec/hp.png",
    alt: "hp-sticker",
    className:
      "absolute w-[14vw] sm:w-[9vw] lg:w-28 h-auto rotate-8 left-[22%] lg:left-[26%] top-[6%] lg:top-10 drop-shadow-xl",
    delay: 1.15,
  },
];

export function About() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [topZ, setTopZ] = useState<{ [key: string]: number }>({});
  const zCounter = useRef(20);

  const bringToFront = (key: string) => {
    zCounter.current += 1;
    setTopZ((prev) => ({ ...prev, [key]: zCounter.current }));
  };

  return (
    <section id="me" className="relative w-full px-4 sm:px-10 lg:px-20 mt-16 sm:mt-24 lg:mt-30 scroll-mt-20">
      <p className="hidden sm:block text-zinc-400 text-lg sm:text-2xl absolute -top-8 sm:-top-10 right-4 sm:right-24 lg:right-90 rotate-3 font-finger-paint">
        niche me
      </p>

      <p
        className="z-10 font-inter text-center select-none drop-shadow-2xl m-0 leading-none mb-12 sm:mb-16 lg:mb-23"
        style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.15,
              duration: 0.5,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="inline-block mr-3 sm:mr-6 lg:mr-8"
          >
            {word}
          </motion.span>
        ))}
      </p>

      <div className="flex flex-col gap-4">
        {/* Bio Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="bg-[#f3f3f3] p-8 sm:p-12 lg:p-16 font-inter w-full rounded-3xl sm:rounded-4xl"
        >
          <p
            className="text-gray-600 font-medium max-w-4xl leading-relaxed"
            style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.6rem)" }}
          >
            I&apos;m a 17 year old developer based in Lucknow, India. currently learning system programming in C, machine learning, web development, and linux.
            <br />
            <br />
            Right now, I&apos;m focused on low-level projects, training and experimenting with AI models, and contributing to open-source software through Hack Club. Always building, constantly shipping, and excited to collaborate on meaningful projects.
          </p>
        </motion.div>

        {/* Posters & Stickers Interactive Draggable Showcase Block */}
        <motion.div
          id="for-fun"
          ref={constraintsRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="bg-[#f3f3f3] min-h-120 sm:min-h-170 lg:h-screen flex items-center justify-center w-full rounded-3xl sm:rounded-4xl p-8 relative overflow-hidden select-none"
        >
          {visuals.map((item) => (
            <motion.img
              key={item.alt}
              src={item.src}
              alt={item.alt}
              draggable={false}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0}
              dragMomentum={true}
              onDragStart={() => bringToFront(item.alt)}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.15, cursor: "grabbing" }}
              style={{
                zIndex: topZ[item.alt] ?? (item.alt.includes("sticker") ? 10 : 2),
              }}
              className={
                item.className +
                " cursor-grab active:cursor-grabbing select-none touch-none transition-shadow"
              }
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: item.delay,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
          ))}


          <span className="absolute bottom-4 right-6 text-xs text-zinc-400 font-mono select-none pointer-events-none">
            ✦ drag & place anywhere
          </span>
        </motion.div>
      </div>

      {/* Contact & Social Bar */}
      <div
        id="contact"
        className="w-full bg-[#f3f3f3] my-8 sm:my-15 rounded-3xl sm:rounded-4xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-4 sm:px-6 py-4 sm:h-20 scroll-mt-20"
      >
        <span className="flex items-center gap-3 sm:gap-4">
          <Send size={28} className="sm:hidden shrink-0" />
          <Send size={38} className="hidden sm:block shrink-0" />
          <a
            href="mailto:naiitik1526@gmail.com"
            className="font-inter font-medium"
            style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)" }}
          >
            naiitik1526@gmail.com
          </a>
        </span>
        <div className="flex items-center gap-3">
          <a href={socialItems[2].link} target="_blank" rel="noreferrer">
            <img
              src="/instagram.png"
              alt="instagram"
              className="w-10 sm:w-15 h-auto cursor-pointer hover:scale-110 transition-all rotate-2 hover:-translate-y-5 hover:rotate-15"
            />
          </a>
          <a href={socialItems[0].link} target="_blank" rel="noreferrer">
            <img
              src="/github.png"
              alt="github"
              className="w-10 sm:w-15 h-auto cursor-pointer hover:scale-110 transition-all -rotate-3 hover:-translate-y-5 hover:rotate-15"
            />
          </a>
          <a href={socialItems[1].link} target="_blank" rel="noreferrer">
            <img
              src="/linkel2.png"
              alt="linkedin"
              className="w-10 sm:w-15 h-auto cursor-pointer hover:scale-110 transition-all rotate-15 hover:-translate-y-5 hover:rotate-30"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
