"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";
import useWindowSize from "./windowSize";

interface HeaderProps {
  onHomeClick?: () => void;

  onProjectsClick?: () => void;
  onContactClick?: () => void;
}

export default function Header({ 
  onHomeClick, 
  onProjectsClick, 
  onContactClick 
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
    
  const isMobile = width! < 768; 

  const responsiveOpenState: {
    maxWidth: number | string,
    height: number | string,
    width: number | string,
    borderRadius: number,
    padding: number,
  } = {
    maxWidth: 460, 
    height: 400, 
    width: 450,
    borderRadius: 24, 
    padding: 20,
  };

  if (isMobile) {
    responsiveOpenState.width = '250px'; 
    responsiveOpenState.maxWidth = '90vw'; 
    responsiveOpenState.height = 300; 
    responsiveOpenState.padding = 20;
  }

  const menuItems = [
    { name: "HOME", action: onHomeClick },
    { name: "PROJECTS", action: onProjectsClick },
    { name: "CONTACT", action: onContactClick },
  ];

  const handleMenuClick = (action?: () => void) => {
    if (action) {
      action();
    }
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>

    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full px-6 sm:px-10 py-5 flex justify-between items-center">
        
        <div className="text-white text-xl sm:text-2xl font-black tracking-tight">
          <Logo width={30} height={30}/>
        </div>

        <div className="relative"> 
          
          <motion.div
            initial={false}
            animate={
              open
                ? responsiveOpenState
                : { width: 110, height: 40, borderRadius: 999, padding: "8px 18px", maxWidth: 1000 }
            }
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 14,
              mass: 1,
            }}
            className="bg-linear-to-b from-[#667eea] to-[#764ba2] cursor-pointer shadow-xl overflow-hidden absolute right-0 top-[-20]"
          >
            {!open && (
              <motion.p
                onClick={() => setOpen(true)}
                className="text-black font-bold flex justify-center items-center h-full"
                initial={{ opacity: 1 }}
                animate={{ opacity: open ? 0 : 1 }}
              >
                MENU
              </motion.p>
            )}

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.05, type: "spring", stiffness: 200, damping: 16 }}
                  className="text-black w-full mt-2"
                >
                  <motion.ul className="md:mt-12">
                    {menuItems.map((item, i) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.1 + i * 0.05, type: "spring", stiffness: 240, damping: 16 }
                        }}
                        exit={{ opacity: 0, y: 12 }}
                        className="py-5 font-bold text-2xl md:text-4xl 2xl:text-5xl hover:text-yellow-700 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMenuClick(item.action);
                        }}
                      >
                        {item.name}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </header>
    </>
  );
}