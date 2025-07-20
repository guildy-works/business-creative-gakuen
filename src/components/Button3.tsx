import clsx from "clsx"
import { ReactNode } from "react"
import css from "./Button3.module.scss"
import Link from "next/link"
import { motion } from "motion/react";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";

export const Button3 = ({ children, className, href }: { children?: ReactNode, className?: string, href: string }) => {

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, }}
            className={clsx("flex flex-col items-center h-24 w-fit", className)}>
            <div className={clsx(css.button)}>
                <Link href={href} className="text-[1.4rem] font-bold py-2 px-2 tracking-wider">{children}</Link>
            </div>
        </motion.div>
    )
}