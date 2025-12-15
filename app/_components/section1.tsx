"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./function";
import { RiContactsLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

export default function Section1() {
  const texts = ["Hello", "Сайн уу", "ᠰᠠᠶᠢᠨ ᠤᠤ"] as const;

  const [index, setIndex] = useState(0);
  const currentText = texts[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const isMongolian = currentText.includes("ᠰᠠᠶᠢᠨ");

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full min-h-[100svh] flex items-center justify-center px-4 py-12 md:py-20"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">

          {/* IMAGE */}
          <div className="relative shrink-0">
            <div
              className="
                relative bg-primary polygon
                h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]
                w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]
                transition-transform duration-500 hover:scale-[1.02]
              "
            >
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-2xl opacity-30" />
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-black/30 backdrop-blur-md shadow-2xl">
                    <img
                      src="./ghibli-photo.png"
                      alt="Ghibli style"
                      className="w-full h-auto scale-105 hover:scale-110 transition-transform duration-[3000ms] ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">

            {/* HELLO + WORLD */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentText}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center shrink-0"
                >
                  {isMongolian ? (
                    <div
                      className="font-mongolian text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "sideways",
                        lineHeight: "1.8",
                      }}
                    >
                      <TypeWriter
                        text={currentText}
                        speed={150}
                        isMongolian
                      />
                    </div>
                  ) : (
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight whitespace-nowrap">
                      <TypeWriter text={currentText} speed={100} />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white whitespace-nowrap">
                World!
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Hi, I'm Bymbatseren. I'm a dedicated Full-Stack Developer passionate
              about building high-quality web applications. From frontend UI to
              backend logic and databases, I aim to create systems that are fast,
              secure, and easy to scale.
            </p>

            {/* BUTTONS */}
            <div className="flex mt-6 gap-3">
              <button className="group relative px-4 py-2 rounded-xl border overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110" />
                <div className="relative flex items-center gap-2 text-white font-medium">
                  View My Projects
                  <FiExternalLink />
                </div>
              </button>

              <button className="group relative px-4 py-2 rounded-xl border overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110" />
                <div className="relative flex items-center gap-2 text-white font-medium">
                  Contact me
                  <RiContactsLine />
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
