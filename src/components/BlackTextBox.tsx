import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import clsx from "clsx";
import { motion } from "motion/react";

export const BlackTextBox = ({ children, className, isOutline }: { children: React.ReactNode, className?: string, isOutline?: boolean }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            style={{outlineStyle:"solid"}}
            className={clsx("rounded-lg bg-black p-3 z-10 text-white",
                isOutline ? "outline-4  outline-black outline-solid border-2 border-white " : "border-1 border-white ",
                className)}>
            {children}
        </FadeAndSlideScrollTriggerAnimation>
    );
}