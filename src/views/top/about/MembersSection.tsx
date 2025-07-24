import { MembersSection2 } from "./MembersSection.member2";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Profile from '@/assets/中四国クリエイティブ学園 1.png'
import Image from 'next-export-optimize-images/picture';
import { TypeWriterScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/TypeWriterScrollTriggerAnimation";
import { useState } from "react";

export const MembersSection = () => {
    return <div className="">
        <MembersSection2 />

        <div className="flex flex-col bg-image6 w-full ">
            <FadeAndSlideScrollTriggerAnimation
                className="relative mx-auto px-16 font-bold font-dot bg-black text-white p-4 rounded-xl border-4 border-white">
                <TypeWriterScrollTriggerAnimation tag="div" className="text-title3" span={70} delay={300} text="学園長があらわれた！" />
                <TypeWriterScrollTriggerAnimation tag="div" className="text-title3" span={70} delay={1200} text="学園長 小早川"  />
               
                <svg
                    className="animate-pulse-y rotate-90 absolute bottom-0 right-4"
                    width="12" height="12"
                    viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5L0 10L0 0L8 5Z" fill="white" />
                </svg>
            </FadeAndSlideScrollTriggerAnimation>

            <div className="flex flex-col px-8  py-8">
                <FadeAndSlideScrollTriggerAnimation
                    className="ml-32">
                    <Image src={Profile} alt="中四国 クリエイティブ学園　学園長　小早川" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation
                    className="relative -mt-10 z-10 text-title2 p-8 font-bold bg-black text-white font-dot border-4 border-color2">

                    <Comments />
                    <div className="z-10 absolute -top-2 -translate-y-1/2 p-2 border-4 border-color2 bg-black">
                        コメント
                    </div>

                    <div className="z-10 absolute left-1 top-1 size-2 bg-white" />
                    <div className="z-10 absolute right-1 top-1 size-2 bg-white" />
                    <div className="z-10 absolute left-1 bottom-1 size-2 bg-white" />
                    <div className="z-10 absolute right-1 bottom-1 size-2 bg-white" />
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>
    </div>
}


const Comments = () => {
    const [index, setIndex] = useState(0);

    return (
        <>
            <TypeWriterScrollTriggerAnimation
                onComplete={() => setIndex(index + 1)}
                span={40}
                delay={1200}
                tag="div" className="overflow-hidden" text="ココは学園ではありません。RPGです。" />

            <TypeWriterScrollTriggerAnimation
                desableInView
                in={index >= 1}
                span={40}
                onComplete={() => setIndex(index + 1)}
                tag="div" className="overflow-hidden" delay={100} text="「スキルアップするコミュニティ」です。" />

            <TypeWriterScrollTriggerAnimation
                desableInView
                in={index >= 2}
                span={40}
                onComplete={() => setIndex(index + 1)}
                tag="div" className="mt-4 overflow-hidden" delay={100} text="あなたはこのコミュニティの主人公。"
            />

            <TypeWriterScrollTriggerAnimation
                desableInView
                in={index >= 3}
                span={40}
                onComplete={() => setIndex(index + 1)}
                tag="div" className="mt-4 text-red-700 overflow-hidden" delay={100} text="どんなビジネスでもクリエイティブな発想は必要不可欠。" />

            <TypeWriterScrollTriggerAnimation
                desableInView
                in={index >= 4}
                span={40}
                onComplete={() => setIndex(index + 1)}
                tag="div" className="mt-4  overflow-hidden" delay={100} text="中四国で活躍する経営者やフリーランス、同業種と繋がり" />

            <TypeWriterScrollTriggerAnimation
                desableInView
                in={index >= 5}
                span={40}
                onComplete={() => setIndex(index + 1)}
                tag="div" className="overflow-hidden" delay={100} text="交流から生まれる新しいアイデアで、" />

            <TypeWriterScrollTriggerAnimation
                desableInView
                in={index >= 6}
                span={40}
                onComplete={() => setIndex(index + 1)}
                tag="div" className="overflow-hidden" delay={100} text="スキルアップしましょう。" />

        </>
    )
}
