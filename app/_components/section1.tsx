"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./function";
import { RiContactsLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";


interface SectionProps {
  onProjectsClick?: () => void;
  onContactClick?: () => void;
}

export default function Section1({onProjectsClick ,onContactClick}:SectionProps) {
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
      const ViewItems = [
    { name: "View My Projects", action: onProjectsClick },
  ];
    const ContactItems = [
    { name: "Contact me", action: onContactClick },
  ];
   const handleMenuClick = (action?: () => void) => {
    if (action) {
      action();
    }
 
  };

    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full min-h-svh flex items-center justify-center px-4 py-12 md:py-20"
        >
            <div className="max-w-7xl w-full mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
                    <div className="relative shrink-0">
                        <div
                            className="
                         relative bg-primary polygon
                          h-75 sm:h-87.5 md:h-100 lg:h-112.5
                           w-70 sm:w-[320px] md:w-90 lg:w-100
                           transition-transform duration-500 hover:scale-[1.02]
                           "
                        >
                            <div className="absolute inset-0 p-4 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 blur-2xl opacity-30" />
                                    <div className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-black/30 backdrop-blur-md shadow-2xl">
                                        <img
                                            src="./ghibli-photo.png"
                                            alt="Ghibli style"
                                            className="w-full h-auto scale-105 hover:scale-110 transition-transform duration-3000 ease-out"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">


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
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                            Hi, I’m Byambatseren, a beginner Fullstack Web Developer and a graduate of Pinecone Academy. I am passionate about learning new technologies and building web applications from scratch.
                        </p>
                        <div className="flex mt-6 gap-3">
                           {ViewItems.map((view)=>(
                             <button onClick={(e)=>{e.stopPropagation();handleMenuClick(view.action)}} key={view.name} className="group cursor-pointer relative px-4 py-2 rounded-xl border overflow-hidden">
                                <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110" />
                                <div className="relative flex items-center gap-2 text-white font-medium">
                                    {view.name}
                                    <FiExternalLink />
                                </div>
                            </button>
                           ))}

                           {ContactItems.map((contact)=>(
                             <button key={contact.name} onClick={(e)=>{e.stopPropagation;handleMenuClick(contact.action)}} className="group cursor-pointer relative px-4 py-2 rounded-xl border overflow-hidden">
                                <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110" />
                                <div className="relative flex items-center gap-2 text-white font-medium">
                                    {contact.name}
                                    <RiContactsLine />
                                </div>
                            </button>
                           ))}
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    );
}
