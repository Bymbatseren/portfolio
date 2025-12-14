import StackIcon from "tech-stack-icons";
import { motion, Transition } from "framer-motion";

export default function TechStack() {
  const techs = [
    { name: "TypeScript", icon: <StackIcon name="typescript" /> },
    { name: "JavaScript", icon: <StackIcon name="js" /> },
    { name: "React", icon: <StackIcon name="react" /> },
    { name: "Next.js", icon: <StackIcon name="nextjs2" /> },
    { name: "Node.js", icon: <StackIcon name="nodejs" /> },
    { name: "Express.js", icon: <StackIcon name="expressjs" /> },
    { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
    { name: "Prisma", icon: <StackIcon name="prisma" /> },
    { name: "Tailwind CSS", icon: <StackIcon name="tailwindcss" /> },
    { name: "GitHub", icon: <StackIcon name="github" /> },
  ];

  // TypeScript-д зөв spring transition
  const spring: Transition = {
    type: "spring",
    stiffness: 250,
    damping: 20
  };

  return (
    <div className="grid mt-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-6 lg:gap-8 gap-5">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.08, boxShadow: "0 20px 30px rgba(139,92,246,0.35)" }}
          className="relative flex flex-col items-center justify-center p-8 bg-white/10 rounded-2xl border border-white/20 cursor-pointer overflow-hidden"
        >
          {/* Gradient background */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
            whileHover={{ opacity: 0.35, scale: 1.05 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              background: "linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899)",
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10 text-5xl w-12 h-12 mb-4 text-white"
            whileHover={{ rotate: 10 }}
            transition={spring}
          >
            {tech.icon}
          </motion.div>

          {/* Tech name */}
          <motion.p
            className="relative z-10 text-white font-semibold"
            whileHover={{ y: -2 }}
            transition={spring}
          >
            {tech.name}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
