import { Button2 } from "@/components/Button2";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { resources } from "@/resources";
import styles from "@/components/Strong.module.scss"
import clsx from "clsx";
import { motion } from "motion/react";
import css from "@/components/Balloon.module.scss"
import Lines3 from "@/assets/lines3.png"
import Image from 'next-export-optimize-images/picture';

export const Campaign = () => <>
    <div className="flex gap-4">
        <motion.div
            viewport={{ once: true }}
            transition={{

                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, },
                scale: { type: "spring", bounce: 1, damping: 2, mass: 0.3, },
                opacity: { duration: 0.3, },
            }}
            initial={{ translateY: "60px", opacity: 0, scale: 0.9 }}
            whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
            className="rounded-lg bg-black p-4 border-2 border-white z-10">
            <div className="w-full h-full flex flex-col items-start justify-center font-dot gap-3">
                <div className="flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L0 10L0 0L8 5Z" fill="white" />
                    </svg>
                    <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="text-size2 text-white relative">
                        メンバーになる
                    </SkewScrollTriggerAnimation>
                </div>
                <div  className="flex items-center gap-2">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                       
                    </svg>
                    <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="text-size2 text-white mt-1">
                        逃げる
                    </SkewScrollTriggerAnimation>
                </div>
            </div>
        </motion.div>

        <motion.div
            viewport={{ once: true }}
            transition={{

                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, },
                scale: { type: "spring", bounce: 1, damping: 2, mass: 0.3, },
                opacity: { duration: 0.3, },
            }}
            initial={{ translateY: "60px", opacity: 0, scale: 0.9 }}
            whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
            className="rounded-lg bg-black p-4 border-2 border-white z-10">
            <div className="w-full flex flex-col items-center justify-center gap-0">
                <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-black" className={clsx("font-dot text-size2 text-white", styles.tooltip)}>LINE登録者限定</SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="font-dot text-title4 text-color2 relative">
                    無料キャンペーン
                </SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-black" className="font-dot text-size1 text-color2">
                    実施中
                </SkewScrollTriggerAnimation>
            </div>
        </motion.div>
    </div>
</>