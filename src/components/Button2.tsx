import clsx from "clsx"
import { ReactNode } from "react"
import css from "./Button2.module.scss"
import { DOMMotionComponents, motion, useInView } from "motion/react"
import { MdPlayCircleFilled } from "react-icons/md"

export const Button2 = ({ children, subTitle, className, href }: {
    children?: ReactNode,
    subTitle?: string,
    className?: string,
    href: string
}) => {
    return (
        <motion.a
            target="_blank"
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            initial={{ opacity: 0, translateY: "20px", scale: 0.6 }}
            whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
            href={href} className={clsx(css.button, className)} >
            <div className="flex items-center justify-center gap-2">
                <p className="text-title3 ">{children}</p>
                <MdPlayCircleFilled className="text-[20px] mt-1" />
            </div>
        </motion.a>
    )
}