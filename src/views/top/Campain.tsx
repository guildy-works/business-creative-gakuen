import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { resources } from "@/resources";
import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";

export const Campaign = () => <>
    <div className="flex gap-4">
        <FadeAndSlideScrollTriggerAnimation
            className="rounded-lg bg-black px-8 py-3 border-2 border-white z-10 w-[160px] sm:w-[220px]"
        >
            <div className="w-full h-full flex flex-col items-start justify-center font-dot gap-2">
                <div className="flex items-center gap-2">
                    <svg className="animate-pulse-x" width="10" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L0 10L0 0L8 5Z" fill="white" />
                    </svg>
                    <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="text-size1 text-white relative">
                        <Link href={resources.links.line} target="_blank" rel="noopener noreferrer">メンバーになる</Link>
                    </SkewScrollTriggerAnimation>
                </div>
                <div className="flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">

                    </svg>
                    <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="text-size1 text-white mt-1">
                        <Link href={resources.links.line} target="_blank" rel="noopener noreferrer">逃げる</Link>
                    </SkewScrollTriggerAnimation>
                </div>
            </div>
        </FadeAndSlideScrollTriggerAnimation>

        <FadeAndSlideScrollTriggerAnimation
            className="rounded-lg bg-black px-6 py-2 border-2 border-white z-10 w-[160px] sm:w-[220px]">
            <div className="w-full flex flex-col items-center justify-center gap-0">
                <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-black" className="font-dot text-size1 text-white">LINE登録者限定</SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="font-dot text-title5 text-color2 relative">
                    無料キャンペーン
                </SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="font-dot text-size1 text-color2">
                    実施中
                </SkewScrollTriggerAnimation>
            </div>
        </FadeAndSlideScrollTriggerAnimation>
    </div>
</>