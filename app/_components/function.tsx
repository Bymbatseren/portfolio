import { motion } from "framer-motion";

const TypeWriter = ({ 
    text, 
    speed = 100,
    isMongolian = false 
}: { 
    text: string; 
    speed?: number;
    isMongolian?: boolean;
}) => {
    const letters = text.split("");
    if (isMongolian) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {text}
            </motion.div>
        );
    }
    return (
        <>
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: i * (speed / 1000), 
                        duration: 0.1,
                    }}
                    className="inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </>
    );
};

export default TypeWriter;