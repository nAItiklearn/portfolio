/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Space Shooter",
    initial: "S",
    description:
      "Pygame arcade space shooter with custom sprite physics, particle explosions, dynamic wave difficulty, and real-time score tracking.",
    image: "/projects/game.png",
    repo: "https://github.com/nAItiklearn/SPACE-SHOOTER",
    website: "https://naitiklearn.github.io/SPACE-SHOOTER/",
  },
  {
    name: "Bias Detector",
    initial: "B",
    description: "NLP engine that flags sensationalism, emotional triggers, and manipulative rhetoric in news headlines.",
    image: "/projects/bias.png",
    repo: "https://github.com/nAItiklearn/bias-detecter-",
    website: "https://bias-detector.naitik.hackclub.app/",
  },
  {
    name: "AI Research",
    initial: "A",
    description: "Multi-agent architecture using Gemini 2.5 that automates discovering, ingesting, and synthesizing academic research papers.",
    image: "/projects/multi-agent-assist.png",
    repo: "https://github.com/nAItiklearn/ai-research-assistant",
    website: "https://multi-agent-assist.streamlit.app/",
  },
  {
    name: "Match Predictor",
    initial: "M",
    description:
      "Trained on 3,086 international cricket fixtures with 68.61% accuracy. Predicts winner probability and match trajectory.",
    image: "/projects/ml_model.png",
    repo: "https://github.com/nAItiklearn/T20-final-winner-predictor-",
  },
  {
    name: "Frequency 2004",
    initial: "F",
    description:
      "An iPod-era throwback website with synchronized music party rooms, Winamp vibes, and early-2000s nostalgia.",
    image: "/projects/freq_2004.png",
    repo: "https://github.com/mishraansh07/Frequency2004",
  },
  {
    name: "Portfolio",
    initial: "P",
    description: "unfiltered me",
    image: "/projects/myspace.png",
    repo: "https://github.com/nAItiklearn/naitik-portfolio",
    website: "https://naitik.xyz/",
  },
  {
    name: "Rabbit Hole",
    initial: "R",
    description:
      "A fun, interactive website where you enter rabbit holes across history, cinema, and the internet. Built for Pixl, Hack Club.",
    image: "/projects/rabbit-hole.png",
    repo: "https://github.com/nAItiklearn/rabbit-hole",
    website: "https://rabbitholeee.netlify.app/",
  },
  {
    name: "Egg",
    initial: "E",
    description:
      "Digital time-capsule app where memories stay sealed inside virtual eggs until a future unlock date. Built with FastAPI, JWT auth, and Railway deployment.",
    image: "/projects/egg.png",
    repo: "https://github.com/nAItiklearn/Egg",
    website: "https://egg-snowy.vercel.app/",
  },
];

const words = "My latest projects!".split(" ");

export function Work() {
  const router = useRouter();

  return (
    <section id="projects" className="relative w-full px-4 sm:px-10 lg:px-20 mt-24 sm:mt-48 lg:mt-80 scroll-mt-20">
      <p className="hidden sm:block text-zinc-400 text-lg sm:text-2xl absolute -top-8 sm:-top-10 right-4 sm:right-24 lg:right-90 rotate-3 font-finger-paint">
        from 2024 till today!
      </p>

      <p
        className="z-10 font-inter font-medium text-center select-none drop-shadow-2xl m-0 leading-none mb-12 sm:mb-16 lg:mb-23"
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

      <div className="flex flex-col gap-4 sm:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative bg-[#f3f3f3] rounded-3xl sm:rounded-4xl w-full p-5 sm:p-8 **:font-inter group cursor-pointer"
            onClick={() => {
              router.push(`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`);
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl sm:rounded-4xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 90% 50% at 100% -5%, #38bdf8 0%, #7dd3fc 30%, #e0f2fe 70%, transparent 100%)",
              }}
            />

            <div className="flex items-center justify-between relative z-30 flex-wrap gap-3">
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <span className="shrink-0 bg-black rounded-md text-white flex items-center justify-center px-2 py-1 text-xl sm:text-3xl lg:text-4xl">
                  {project.initial}
                </span>
                <p
                  className="font-medium leading-none truncate"
                  style={{ fontSize: "clamp(1.4rem, 4vw, 3.75rem)" }}
                >
                  {project.name}
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto relative z-30">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-mono font-medium hover:bg-black transition-all hover:scale-105 shadow-md border border-neutral-700/20"
                  >
                    Repo <ArrowUpRight size={15} className="sm:hidden" /><ArrowUpRight size={18} className="hidden sm:inline" />
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-sky-600 text-white text-xs sm:text-sm font-mono font-medium hover:bg-sky-700 transition-all hover:scale-105 shadow-md"
                  >
                    Demo <ExternalLink size={15} className="sm:hidden" /><ExternalLink size={18} className="hidden sm:inline" />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-4 sm:my-5 relative">
              <p
                className="font-medium text-[#6b7280] w-full sm:max-w-[60%] lg:max-w-[45%]"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1.5rem)" }}
              >
                {project.description}
              </p>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl mt-6 sm:mt-10 w-full object-cover"
              />
            </div>
          </motion.div>
        ))}

        <span className="text-lg sm:text-2xl font-inter font-medium">
          Much more!! on{" "}
          <a
            href="https://github.com/nAItiklearn"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:underline"
          >
            github
          </a>
        </span>
      </div>
    </section>
  );
}
