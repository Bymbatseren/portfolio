"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingLineReveal({
  children,
}: {
  children: React.ReactNode
}) {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [stars] = useState(() =>
    [...Array(120)].map((_, i) => ({
      id: i,
      style: {
        width: Math.random() * 3 + 1 + "px",
        height: Math.random() * 3 + 1 + "px",
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        animationDelay: Math.random() * 8 + "s",
        animationDuration: Math.random() * 5 + 4 + "s",
      } as React.CSSProperties,
    }))
  )

  useEffect(() => {
    const duration = 3800 
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress < 100) {
        requestAnimationFrame(tick)
      }
    }

    tick()
  }, [])

  
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setIsLoading(false), 600) 
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {children}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 "
            initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{
              duration: 1.3,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute inset-0">
                {stars.map((star) => (
                  <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-ping"
                    style={star.style}
                  />
                ))}
              </div>
              <div className="relative z-10 flex flex-col items-center gap-10">
               <motion.h1
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-3xl md:text-8xl font-black tracking-tighter text-white"
                  style={{ textShadow: "0 0 40px rgba(255,255,255,0.8)" }}
                >
                  HELLO WORLD!
                </motion.h1>
                <div className="w-80 md:w-96 h-2 bg-white/10 rounded-full overflow-hidden border border-white/20">
                  <motion.div
                    className="h-full bg-white relative rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-white/50 blur-xl animate-pulse" />
                  </motion.div>
                </div>
                {/* <motion.span
                  key={Math.round(progress)}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-mono text-white"
                >
                  {Math.round(progress)}%
                </motion.span> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}