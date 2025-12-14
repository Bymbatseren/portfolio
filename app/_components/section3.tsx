"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Section3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const socials = [
    { 
      icon: <Github className="w-6 h-6" />, 
      link: "https://github.com/bymbatseren", 
      bgColor: "bg-white/10",
      iconColor: "text-white"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      link: "#", 
      bgColor: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
      iconColor: "text-white"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      link: "#", 
      bgColor: "bg-[#1da1f2]/20",
      iconColor: "text-[#1da1f2]"
    }
  ];

  return (
     <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20"
        >

      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full relative z-10"
      >

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
    
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-50"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
              backgroundSize: "300% 300%"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-0.5 bg-slate-900/95 rounded-3xl" />
          </motion.div>

   
          <div className="relative z-10">
         
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <motion.h1 
                className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 mb-3"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                
              >
                Let's Talk
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-base sm:text-lg"
              >
                Have a project in mind? Drop me a message!
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="p-4 rounded-xl bg-blue-500/20"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-7 h-7 text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email me at</p>
                  <p className="text-white font-semibold text-lg">hello@example.com</p>
                </div>
              </div>
            </motion.div>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 mb-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-gray-300 mb-2 font-medium">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.3)" }}
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.3)" }}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.3)" }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-r   cursor-pointer from-blue-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold flex items-center justify-center gap-2 relative overflow-hidden group shadow-lg shadow-purple-500/50"
              >
                <motion.div
                  className="absolute inset-0  bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.2 }}
                />
                <span className=" relative z-10">Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.form>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <p className="text-gray-400 mb-4 text-sm">Or connect with me on</p>
              <div className="flex justify-center gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    target="_blank"
                    href={social.link}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl ${social.bgColor} ${social.iconColor} transition-all`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}