"use client"
import { motion } from "framer-motion";
import { Code2, Database, Layers, Zap } from "lucide-react";
import { set } from "mongoose";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import Projects from "./projects";
import Certificates from "./certificate";
import TechStack from "./tech-stack";




export default function Section2() {
    const [pagination, setPagination] = useState<Number>(1)



    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full min-h-screen flex items-center justify-center bg-linear-to-b from-transparent to-black/20"
        >
            <div className="max-w-7xl mx-5  w-full ">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl  sm:text-5xl font-bold lg:text-6xl  tracking-tight text-white mb-4`}>
                        Portfolio Showcase
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </motion.div>
                <div className="flex justify-around">
                    <div className={`w-full ${pagination === 1 && `bg-linear-to-b  from-[#667eea] to-[#764ba2]`} cursor-pointer flex justify-center rounded-xl items-center`} onClick={() => setPagination(1)}>
                        <p className={`text-center text-gray-400  ${pagination === 1 && `text-white font-bold `} pt-4 pb-4`}>
                            Projects
                        </p>
                    </div>
                    <div className={`w-full ${pagination === 2 && `bg-linear-to-b  from-[#667eea] to-[#764ba2]`} cursor-pointer rounded-xl flex justify-center items-center`} onClick={() => setPagination(2)}>
                        <p className={`text-center text-gray-400  ${pagination === 2 && `text-white font-bold `} pt-4 pb-4`}>
                            Certificates
                        </p>
                    </div>
                    <div className={`w-full ${pagination === 3 && `bg-linear-to-b  from-[#667eea] to-[#764ba2]`} cursor-pointer flex justify-center rounded-l-xl rounded-r-xl items-center`} onClick={() => setPagination(3)}>
                    <p className ={`text-center text-gray-400  ${pagination === 3 && `text-white font-bold`}`}>
                            Tech Stack
                        </p>
                    </div>
                </div>


                <div className="max-w-7xl mx-5 ">
                    {pagination === 1 && <motion.div
                        key="tech"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    ><Projects /></motion.div>}
                    {pagination === 2 && <motion.div
                        key="tech"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    > <Certificates /></motion.div>}
                    {pagination === 3 && <motion.div
                        key="tech"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    > <TechStack /></motion.div>}
                </div>

            </div>
        </motion.section>
    );
}