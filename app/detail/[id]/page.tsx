"use client";

import GradientOrbsBackground from "@/app/_components/background";
import { ChevronDown, Github } from "lucide-react";
import { useParams } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
import { projects } from "@/app/_components/projects-data";


export default function DetailPage() {
    const params = useParams();
    const id = params.id as string;
    console.log(projects[2].imageUrl)

    return (

        <div>
            <GradientOrbsBackground />
            {projects.filter(project => project._id === id).map(
                project => (
                    <div key={project._id} className="flex justify-center items-center">
                        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 ">
                            <div className=" mt-15 flex gap-3">
                                <a href="/" className="group cursor-pointer inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base" >

                                    <IoIosArrowRoundBack className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                                    Back
                                </a>
                                <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
                                    <span>Projects</span>
                                    <MdChevronRight />
                                    <span className="text-white/90">{project.title}</span>
                                </div>
                            </div>

                            <div className="grid mt-20 lg:grid-cols-2 gap-8 md:gap-20">
                                <div className="space-y-4 md:space-y-6">
                                    <h1 className="text-3xl md:text-6xl font-bold bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                                        {project.title}
                                    </h1>
                                    <div className="relative h-1 w-16 md:w-24">
                                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-sm"></div>
                                    </div>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
                                        <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0"></div>
                                        <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
                                            <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">

                                            </div>
                                            <div className="grow">
                                                <div className="text-lg md:text-xl font-semibold text-blue-200">{project.techStack.length}</div>
                                                <div className="text-[10px] md:text-xs text-gray-400">Total Technology</div>

                                            </div>
                                        </div>
                                        <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
                                            <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full"></div>
                                            <div className="grow">
                                                <div className="text-lg md:text-xl font-semibold text-blue-200">6</div>
                                                <div className="text-[10px] md:text-xs text-gray-400">Key Features</div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-wrap gap-3 md:gap-4">
                                        <a target="_blank" href={project.projectUrl} className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-linear-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base">

                                            <FiExternalLink className="lucide lucide-github relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                                            <span className="relative font-medium">Live Demo</span>
                                        </a>
                                        <a target="_blank" href={project.githuburl} className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-linear-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base">

                                            <Github className=" relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                                            <span className="relative font-medium">Github</span>
                                        </a>


                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {project.techStack.map((tech, index) => (

                                            <div key={index} className="overflow-hidden flex justify-center items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-linear-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
                                                <div className="lucide lucide-package w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors">{tech.icon}</div>
                                                {tech.name}
                                            </div>

                                        ))}</div>

                                </div>


                                <img className="w-full rounded-xl  object-cover transform transition-transform duration-700  group-hover:scale-105" src={project.imageUrl}></img>



                            </div>
                        </div>
                    </div>
                )

            )}

        </div>

    );
}
