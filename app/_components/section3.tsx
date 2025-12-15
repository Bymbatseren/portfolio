"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Send,
  Github,
  Instagram,
  CheckCircle,
  Loader2,
  Facebook,
} from "lucide-react";

export default function Section3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", text: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 overflow-x-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <motion.div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <motion.div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />

     
      <motion.div className="relative z-10 w-full max-w-2xl">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
          
        
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-50"
            style={{
              background:
                "linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899,#3b82f6)",
              backgroundSize: "300% 300%",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="absolute inset-[2px] bg-slate-900 rounded-3xl" />
          </motion.div>

          <div className="relative z-10">
                      <h2 className="text-4xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Let's Talk
            </h2>
            <p className="text-center text-gray-400 mt-3 mb-8">
              Have a project in mind? Drop me a message!
            </p>

             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 mb-8 group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <motion.div
                  className="p-3 sm:p-4 rounded-xl bg-blue-500/20 shrink-0"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                </motion.div>
                <div className="w-full min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">Email me at</p>
                  <p className="text-white font-semibold text-sm sm:text-base break-all sm:break-normal">
                    byambatseren.personal@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="text-green-400" />
                  <span className="text-green-300">
                    Message sent successfully!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white outline-none"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white outline-none"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white outline-none resize-none"
                placeholder="Your message"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
                required
              />

              <button
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold flex justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Send Message <Send />
                  </>
                )}
              </button>
            </form>

            <div className="flex justify-center gap-4 mt-8">
              <a href="https://github.com/bymbatseren" target="_blank">
                <Github />
              </a>
              <a href="https://instagram.com/bymbatseren_u" target="_blank">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
