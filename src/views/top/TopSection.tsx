import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Balloon from '@/assets/balloon.png';
import Inspire from '@/assets/Inspire.png';
import Image from 'next-export-optimize-images/picture';
import Grassland2 from '../../assets/grassland2.png'
import Logo2 from "@/assets/logo2.png";
import { motion } from 'motion/react';
import { resources } from '@/resources'
import { Campaign } from './Campain'
import { use, useEffect, useState } from 'react'
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import comment1 from '@/assets/comment1.png';
import comment2 from '@/assets/comment2.png';
import comment3 from '@/assets/comment3.png';
import comment4 from '@/assets/comment4.png';
import comment5 from '@/assets/comment5.png';
import { DiscordWidget } from "./TopArts";

export const TopSection = () => {
    return (
        <div className="w-full mx-auto relative max-h-[1200px] flex flex-col" style={{ minHeight: 'calc(100svh - 46px)' }}>
            <div className="flex-grow relative flex flex-col justify-center items-center overflow-hidden">
                <Image src={Grassland2} alt="Grassland" className='absolute inset-0 size-full object-cover m-auto' />

                <div className='py-7 flex flex-col gap-4 justify-center z-10'>
                    <div className='flex flex-col justify-center items-center px-8 py-6 gap-4'>
                        <FadeAndSlideScrollTriggerAnimation className='text-title1 font-nikokaku text-center leading-[2.4rem]' >
                            {resources.top.topTitle}
                        </FadeAndSlideScrollTriggerAnimation>

                        <div className='flex'>
                            <FadeAndSlideScrollTriggerAnimation>
                                <Image src={Logo2} alt="Logo2" className="w-32 h-32 object-cover" />
                            </FadeAndSlideScrollTriggerAnimation>
                            <DiscordWidget />
                        </div>

                    </div>
                    <Campaign />
                </div>
            </div>

            <div className="relative bg-black flex flex-col items-center justify-center gap-4 p-8">
                <SkewScrollTriggerAnimation skewPanelClass="!bg-black" className=" w-full font-dot text-white text-[1.5rem] tracking-tight leading-[2.2rem]">
                    そのアイデア、1人じゃ無理でした…。
                </SkewScrollTriggerAnimation>

                <div className="flex flex-col w-full relative justify-center max-w-lg">
                    <FadeAndSlideScrollTriggerAnimation className="">
                        <Image src={comment1} alt="ユーザーコメント1" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="-mt-2 ml-auto" delay={0.05}>
                        <Image src={comment2} alt="ユーザーコメント2" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="-mt-2" delay={0.1}>
                        <Image src={comment3} alt="ユーザーコメント3" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className=" -mt-2 ml-auto" delay={0.15}>
                        <Image src={comment4} alt="ユーザーコメント4" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="-mt-2" delay={0.2}>
                        <Image src={comment5} alt="ユーザーコメント5" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="mx-auto w-fit absolute inset-0 m-auto" delay={0.25}>
                        <Image src={Inspire} alt="インスピレーション" className="h-32" />
                    </FadeAndSlideScrollTriggerAnimation>

                </div>

                <FadeAndSlideScrollTriggerAnimation className="relative w-full mx-auto" delay={0.35}>
                    <Image src={Balloon} alt="吹き出し" className="mx-auto h-32" />
                    <div className="absolute font-dot top-0 left-0 inset-0 flex justify-center items-center text-center leading-8 pb-3 text-title4">
                        こんな悩みを持つ<br />
                        中四国の全クリエイターへ
                    </div>
                </FadeAndSlideScrollTriggerAnimation>

            </div>
        </div>

    )
}