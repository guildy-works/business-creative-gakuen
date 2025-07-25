import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Balloon from '@/assets/balloon.png';
import Inspire from '@/assets/Inspire.png';
import Image from 'next-export-optimize-images/picture';
import Grassland2 from '../../assets/grassland2.png'
import Logo2 from "@/assets/logo2.png";
import { resources } from '@/resources'
import comment1 from '@/assets/comment1.png';
import comment2 from '@/assets/comment2.png';
import comment3 from '@/assets/comment3.png';
import comment4 from '@/assets/comment4.png';
import comment5 from '@/assets/comment5.png';
import { DiscordWidget } from "./TopArts";
import { TypeWriterScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/TypeWriterScrollTriggerAnimation";
import { OpeningAnimation } from "../OpeningAnimation";
import { useState } from "react";

export const TopSection = () => {
    const [isOpeningAnimationComplete, setIsOpeningAnimationComplete] = useState(false);

    return (
        <div className="w-full mx-auto relative max-h-[1200px] flex flex-col bg-[#009fe8]" style={{ minHeight: 'calc(100svh - 46px)' }}>
            <OpeningAnimation onOpeningAnimationCompleted={() => setIsOpeningAnimationComplete(true)} />

            {isOpeningAnimationComplete && (<>
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
                    <TypeWriterScrollTriggerAnimation
                        delay={500}
                        tag="h3"
                        className=" w-full font-dot text-white text-center text-[1.5rem] tracking-tight leading-[2.2rem]"
                        text="そのアイデア、1人じゃ無理でした…。"
                    />

                    <div className="flex flex-col w-full relative justify-center max-w-lg">
                        <FadeAndSlideScrollTriggerAnimation className="" delay={1.2}>
                            <Image src={comment1} alt="ユーザーコメント1" className="h-10 w-fit" />
                        </FadeAndSlideScrollTriggerAnimation>
                        <FadeAndSlideScrollTriggerAnimation className="-mt-2 ml-auto" delay={1.24}>
                            <Image src={comment2} alt="ユーザーコメント2" className="h-10 w-fit" />
                        </FadeAndSlideScrollTriggerAnimation>
                        <FadeAndSlideScrollTriggerAnimation className="-mt-2" delay={1.3}>
                            <Image src={comment3} alt="ユーザーコメント3" className="h-10 w-fit" />
                        </FadeAndSlideScrollTriggerAnimation>

                        <FadeAndSlideScrollTriggerAnimation className=" -mt-2 ml-auto" delay={1.35}>
                            <Image src={comment4} alt="ユーザーコメント4" className="h-10 w-fit" />
                        </FadeAndSlideScrollTriggerAnimation>
                        <FadeAndSlideScrollTriggerAnimation className="-mt-2" delay={1.4}>
                            <Image src={comment5} alt="ユーザーコメント5" className="h-10 w-fit" />
                        </FadeAndSlideScrollTriggerAnimation>

                        <FadeAndSlideScrollTriggerAnimation className="mx-auto w-fit absolute inset-0 m-auto" delay={1.45}>
                            <Image src={Inspire} alt="インスピレーション" className="h-32" />
                        </FadeAndSlideScrollTriggerAnimation>

                    </div>

                    <FadeAndSlideScrollTriggerAnimation className="relative w-full mx-auto" delay={1.5}>
                        <Image src={Balloon} alt="吹き出し" className="mx-auto h-32" />
                        <div className="absolute font-dot top-0 left-0 inset-0 flex justify-center items-center text-center leading-8 pb-3 text-title4">
                            こんな悩みを持つ<br />
                            中四国の全クリエイターへ
                        </div>
                    </FadeAndSlideScrollTriggerAnimation>

                </div>
            </>
            )}
        </div>

    )
}

const Campaign = () => <>
    <div className="flex gap-2">
        <FadeAndSlideScrollTriggerAnimation
            className="rounded-lg bg-black px-3 py-3 border-2 border-white z-10"
        >
            <div className="w-full h-full flex flex-col items-start justify-center font-dot gap-2">
                <div className="flex items-center gap-2">
                    <svg className="animate-pulse-x" width="10" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L0 10L0 0L8 5Z" fill="white" />
                    </svg>
                    <Link href={resources.links.line} target="_blank" rel="noopener noreferrer">
                        <TypeWriterScrollTriggerAnimation delay={300} className="text-size1 text-white relative" tag="div" text="メンバーになる" />
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">

                    </svg>

                    <Link href={resources.links.line} target="_blank" rel="noopener noreferrer">
                        <TypeWriterScrollTriggerAnimation delay={300} tag="div" className="text-size1 text-white mt-1" text="逃げる" />
                    </Link>

                </div>
            </div>
        </FadeAndSlideScrollTriggerAnimation>

        <FadeAndSlideScrollTriggerAnimation
            className="rounded-lg bg-black px-6 py-2 border-2 border-white z-10 flex-grow">
            <div className="w-full flex flex-col items-center justify-center gap-0">
                <TypeWriterScrollTriggerAnimation delay={300} tag="h2"
                    className="font-dot text-size1 text-white"
                    text="＼LINE登録者限定／"
                />
                <TypeWriterScrollTriggerAnimation
                    delay={600}
                    className="font-dot text-title4 text-color2 relative"
                    text="無料キャンペーン" />
                <TypeWriterScrollTriggerAnimation delay={1200}
                    span={60}
                    className="font-dot text-size1 text-color2"
                    text="実施中" />
            </div>
        </FadeAndSlideScrollTriggerAnimation>
    </div>
</>