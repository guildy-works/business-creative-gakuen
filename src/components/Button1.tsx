import clsx from "clsx"
import { MouseEventHandler, ReactNode } from "react"
import css from "./Button1.module.scss"
import Link from "next/link"
import { Button } from "@headlessui/react"

export const Button1 = ({ children, className,onClick }: {
    children?: ReactNode,
    onClick: MouseEventHandler | undefined, className?: string,
}) => {
    return (
        <Button className={clsx(css.button,className,"text-[1.4rem] font-bold py-2 px-2 tracking-wider")} onClick={onClick}>
            {children}
        </Button>
    )
}