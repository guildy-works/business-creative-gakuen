import clsx from "clsx";
import { motion } from "motion/react";

export const BlackTextBox = ({ children, className, isOutline }: { children: React.ReactNode, className?: string, isOutline?: boolean }) => {
    return (
        <motion.div
            viewport={{ once: true }}
            transition={{

                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, },
                scale: { type: "spring", bounce: 1, damping: 2, mass: 0.3, },
                opacity: { duration: 0.3, },
            }}
            initial={{ translateY: "60px", opacity: 0, scale: 0.9 }}
            whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
            style={{outlineStyle:"solid"}}
            className={clsx("rounded-lg bg-black p-3 z-10 text-white",
                isOutline ? "outline-4  outline-black outline-solid border-2 border-white " : "border-1 border-white ",
                className)}>
            {children}
        </motion.div>
    );
}