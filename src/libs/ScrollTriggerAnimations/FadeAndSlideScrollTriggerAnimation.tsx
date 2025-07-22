import React, { CSSProperties, ElementType, ReactNode, useRef } from "react";
import { DOMMotionComponents, motion, useInView } from "motion/react"

interface FadeAndSlideScrollTriggerAnimationProps {
    children: ReactNode;
    delay?: number;
    style?: CSSProperties;
    className?: string;
    tag?: DOMMotionComponents;
}

export const FadeAndSlideScrollTriggerAnimation = ({
    tag,
    children,
    delay,
    style,
    className,
}: FadeAndSlideScrollTriggerAnimationProps) => {
    return (
        <motion.div
            viewport={{ once: true }}
            style={style}
            className={className}
            initial={{ opacity: 0, scale: 0.9, transform: "translateY(18px)" }}
            whileInView={{ opacity: 1, scale: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.1, delay: (delay ?? 0.2) }}
        >
            {children}
        </motion.div>
    );
};