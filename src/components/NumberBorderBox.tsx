import clsx from "clsx";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

export const NumberBorderBox = ({ children, className, innerClassName, numberText }: { numberText?: StaticImageData, children: React.ReactNode, className?: string, innerClassName?: string }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            className={clsx(
                className)}
                style={{ height: '-webkit-fill-available' }}
        >
            <div style={{ outlineStyle: "solid" }}
                className={clsx("rounded-xl relative top-0 w-full h-full",
                    "border-[3px] border-[#B9A244] outline-black outline-solid outline-2 bg-[#B9A244]"
                    )}
            >
                <div className={`rounded-lg border-4 border-color2 pt-6 bg-white h-full ${innerClassName}`}>
                    {children}
                </div>
                {numberText &&
                    <div style={{ WebkitTextStroke: "1px black" }}
                        className="text-4xl font-bold font-dot absolute text-color2 -top-1 left-5" >
                        <Image src={numberText} alt="Number" className="h-8 w-8" />
                    </div>
                }
            </div>
        </FadeAndSlideScrollTriggerAnimation>
    );
}