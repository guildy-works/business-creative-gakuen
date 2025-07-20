import clsx from "clsx";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';

export const NumberBorderBox = ({ children, className, innerClassName, numberText }: { numberText: StaticImageData, children: React.ReactNode, className?: string, innerClassName?: string }) => {
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
            style={{ outlineStyle: "solid" }}
            className={clsx("rounded-xl relative top-0",
                "border-[3px] border-[#B9A244] outline-black outline-solid outline-2 bg-[#B9A244]",
                className)}
        >
            <div className={`rounded-lg border-4 border-color2  pt-6 bg-white ${innerClassName}`}>
                {children}
            </div>
            <div style={{ WebkitTextStroke: "1px black" }}
                className="text-4xl font-bold font-dot absolute text-color2 -top-1 left-5" >
                <Image src={numberText} alt="Number" className="h-8 w-8" />
            </div>
        </motion.div>
    );
}