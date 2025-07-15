import { MouseEventHandler, ReactNode } from "react"
import styles from "./ButtonRightArrow.module.scss"
import clsx from "clsx"
import Link from "next/link"

export const ButtonRightArrow = ({ onClick,href,children ,className}: {href:string, onClick?: MouseEventHandler, className?:string, children: ReactNode }) => {


    return (
        <Link target="_blank" href={href} onClick={onClick} className={clsx("flex cursor-pointer overflow-hidden group", styles.button,className)}>
            <div className={clsx("h-full  bg-[#8c52ff] flex-1 group-hover:bg-[#9865ff]",styles.left)}>
                {children}
            </div>
            <div className={clsx(styles.triangle,"group-hover:border-l-[#9865ff]")}></div>
        </Link>
    )
}