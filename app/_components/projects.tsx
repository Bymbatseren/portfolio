import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { projects } from "./projects-data";


export default function Projects() {

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

                        <div className="ml-4 mr-4">
                            <div className="flex justify-between items-center">
                                <p className="font-bold">{project.title}</p>

                                {project.isTeam === true && (
                                    <div className="
                                    flex items-center justify-center gap-1
                                              px-2 py-0.5
                                        text-xs font-medium
                                     rounded-full
                                    bg-emerald-500/10
                                        text-purple-300
                                         border border-purple-300/90
      ">
                                        👥 Team
                                    </div>
                                )}
                            </div>

                            <div className="text-gray-300/80 text-sm leading-relaxed line-clamp-2 mt-1">
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
                                href={`/detail/${project._id}`}

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