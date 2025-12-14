import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
export default function Certificates(){

    return <>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-5 mt-8">
                <motion.div
                  
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.15 * 0.1,
                        ease: "easeOut"
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group relative"
                >

                    <div className="border border-white/20 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 backdrop-blur-md">

                        <div className="p-5">
                            <img
                                src={"./image.png"}
                                alt={"certificate"}
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        

                    </div>

                </motion.div>
          
        </div>
    </>
}
