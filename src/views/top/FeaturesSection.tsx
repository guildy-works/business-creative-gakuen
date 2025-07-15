import { Button2 } from "@/components/Button2";
import { SectionType1 } from "@/components/SectionType1";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { resources } from "@/resources";

export const FeaturesSection = () => {
    return (
        <SectionType1 className="md:py-32 bg-gradient1">
            <motion.div
                viewport={{ once: true }}
                transition={{
                    translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3 },
                    scale:{ type: "spring", bounce: 1, damping: 2, mass: 0.3 },
                    opacity: { duration: 0.3, },
                }}
                initial={{ translateY: "60px", opacity: 0,scale:0.9 }}
                whileInView={{ translateY: "0px", opacity: 1,scale:1 }}
                className="max-w-4xl mx-auto p-8  bg-[#893be2] flex flex-col justify-center items-center gap-4 rounded-3xl">
                <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-[#893be2]" className="text-title2 text-white">早期入会特典</SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-[#893be2]" className="text-title3 text-white">会費永年割引キャンペーン</SkewScrollTriggerAnimation>
                <Button2 href={resources.links.line} subTitle="Click!">
                    早期入会特典をGET！
                </Button2>
            </motion.div>
        </SectionType1>
    )
}
