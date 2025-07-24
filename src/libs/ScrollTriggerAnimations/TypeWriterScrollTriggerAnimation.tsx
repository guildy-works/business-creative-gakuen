
import clsx from "clsx";
import React, { ElementType, ReactNode, use, useEffect, useRef, useState } from "react";
import { DOMMotionComponents, motion, useInView } from "motion/react"

interface TypeWriterScrollTriggerAnimationProp {
    className?: string;
    text?: string;
    delay?: number;
    tag?: ElementType;
    onComplete?: () => void;
    in?: boolean;
    desableInView?: boolean;
    span?: number;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const TypeWriterScrollTriggerAnimation = (props: TypeWriterScrollTriggerAnimationProp) => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null)
    const isInView = useInView(ref)
    const Tag = (props.tag ?? "div") as any;

    const text = props.text ?? "";
    const onComplete = props.onComplete ?? (() => { });
    const span = props.span ?? 40;

    useEffect(() => {
        if ((!isInView && !props.desableInView) || (!props.in && props.desableInView)) {
            return;
        }

        if (index >= text.length) {
            onComplete()
            return;
        }

        const animate = async () => {
            if (index === 0 && props.delay) {
                await delay(props.delay);
            }

            await delay(span)
            setIndex(index + 1);
        };


        animate();
    }, [index, isInView, props.in]);

    useEffect(() => {
        setIndex(0);
    }, [text.length,]);

    const items = []
    for (let i = 0; i < text.length; i++) {
        items.push({
            index: i,
            character: text[i],
        })
    }

    return <Tag ref={ref} className={props.className}>
        {
            items.map(item => (<span key={item.index} style={{ opacity: item.index < index ? 1 : 0 }}>
                {item.character}
            </span>))
        }
    </Tag>;
};
