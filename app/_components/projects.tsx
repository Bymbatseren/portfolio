import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { title } from "process";

type Project = {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    techStack: string[];
    githuburl: string;
    isTeam: boolean;
};

export default function Projects() {

    const projects = [
        { title: "MNG-YOGA", description: "This website is designed to help users in Mongolia access yoga classes online anytime and from anywhere.", 
            _id: "1",
        imageUrl: "https://res.cloudinary.com/df88yvhqr/image/upload/v1765631361/coed3gbvpj1vlqoyzd0k.png",
        projectUrl: "https://www.mngyoga.mn/",
         techStack: ["React", "Node.js"],
          githuburl: "https://github.com/pinecone-2a/MNG-YOGA",
          isTeam : true}
          
    ]
    return <>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-5 mt-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group relative"
                >
                    <div className="border border-white/20 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 backdrop-blur-md">

                        <div className="p-5">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        <div className="ml-4">
                            <p className="font-bold">{project.title}</p>
                            <div className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                                {project.description}
                            </div>
                        </div>

                        <div className="flex justify-between mt-5 mb-5">
                            <a
                                href={`${project.projectUrl}`}
                                target="_blank"
                                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 ml-4"
                            >
                                <span className="text-sm font-medium">Live Demo</span>
                                <FiExternalLink />
                            </a>

                            <a
                                href={project.githuburl}
                                target="_blank"
                                className="inline-flex items-center mr-5 space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                <span className="text-sm font-medium">Details</span>
                                <IoIosArrowRoundForward className="w-5 h-5" />
                            </a>
                        </div>

                    </div>
                </motion.div>
            ))}

        </div>
    </>
}