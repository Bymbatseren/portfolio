// app/components/Section1.tsx
"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./function";
import { RiContactsLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

export default function Section1() {
    const texts = [
        "Hello",
        "Сайн уу",
        "ᠰᠠᠶᠢᠨ ᠤᠤ",
    ] as const;

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
            className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20"
        >
            <div className="max-w-7xl w-full mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-20">
                    <div className="relative group shrink-0">
                        <div className="bg-primary relative group hover:scale-[1.02] transition-transform duration-500 
                          h-75 sm:h-87.5 md:h-100 lg:h-112.5 xl:h-125
                          w-70 sm:w-[320px] md:w-90 lg:w-100 xl:w-112.5
                          polygon cursor-crosshair">

                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
                                    <div className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-black/30 backdrop-blur-md shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-700">
                                        <img
                                            src="./ghibli-photo.png"
                                            alt="ghibli style"
                                            className="w-full h-auto 
                               scale-105 group-hover:scale-110 transition-transform duration-3000 ease-out"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 min-h-20 sm:min-h-25 lg:min-h-30">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentText}
                                    initial={{ opacity: 0, y: 80 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    exit={{ opacity: 0, y: -80 }}

                                    className="text-white"
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
                                            <TypeWriter text={currentText} speed={150} isMongolian={true} />
                                        </div>
                                    ) : (
                                        <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight">
                                            <TypeWriter text={currentText} speed={100} isMongolian={false} />
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                            <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white">
                                World!
                            </div>
                        </div>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                            Hi, I'm Bymbatseren . I'm a dedicated Full-Stack Developer passionate about building high-quality web applications.
                            From frontend UI to backend logic and databases, I aim to create systems that are fast, secure,
                            and easy to scale.
                        </p>
                        <div className="flex mt-5 gap-2">
                            <button className="group border  relative cursor-pointer px-4 py-2 rounded-xl overflow-hidden">
                                <div className="absolute inset-0  group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="flex justify-center items-center gap-2">
                                    <span className="relative text-white font-medium">
                                        View My Projects
                                    </span>
                                    <FiExternalLink />
                                </div>
                            </button>
                            <button className="group border  relative px-4 py-2 rounded-xl cursor-pointer overflow-hidden">
                                <div className="absolute inset-0  group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="flex justify-center items-center  gap-2">
                                    <span className="relative text-white font-medium">
                                        Contact me
                                    </span>
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