import { SectionBox } from "@/components/SectionBox";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import clsx from "clsx";
import Image from 'next-export-optimize-images/picture';
import Profile from "@/assets/profile.webp";
import { motion } from "motion/react";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { Button } from "@headlessui/react";
import { Button2 } from "@/components/Button2";
import { Button3 } from "@/components/Button3";

export const ProfileSection = () => <SectionBox className={clsx(
    "grid mt-24",
    "grid-cols-1  mx-auto !gap-4 !max-w-xl",
    "md:grid-cols-2 md:!max-w-5xl md:!gap-12"
)}>
    <div className="flex flex-col items-center justify-center gap-4">
        <FadeAndSlideScrollTriggerAnimation className="text-title2 font-bold">小早川（こばやかわ）</FadeAndSlideScrollTriggerAnimation>
        <FadeAndSlideScrollTriggerAnimation className="rounded-3xl border-2 border-black overflow-hidden">
            <motion.div
                viewport={{ once: true }}
                transition={{ bounce: 1, damping: 5, mass: 0.8 }}
                initial={{ translateY: "100%", opacity: 0.4, scale: 1 }}
                whileInView={{ translateY: "0", opacity: 1, scale: 1 }}
                className="size-full">
                <Image src={Profile} w={460} alt="img" className="" />
            </motion.div>
        </FadeAndSlideScrollTriggerAnimation>
    </div>

    <div className="flex flex-col items-center justify-center gap-4 relative">
        <div className="mx-auto justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
            <SkewScrollTriggerAnimation tag="p">
                初めまして！
            </SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation tag="p">
                中四国地方を拠点に活動している、小早川です<br />
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation tag="p">   このコミュニティでは<br />
                フリーランス、経営者、大学生や社会人、独立したい方が中心となって<br />
                「中四国地方で一番盛り上がるコミュニティ」を<br />
                創り上げることを目標としています<br /><br />
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation tag="p" delay={0.1}>
                人脈、仕事、情報をつなげていきましょう！<br />
            </SkewScrollTriggerAnimation>

            <Button3 href="/mission" className="w-full mt-4 text-title2">
                Missionへ
            </Button3>
        </div>
    </div>
</SectionBox>
