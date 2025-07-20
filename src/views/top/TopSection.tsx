import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Balloon from '@/assets/balloon.png';
import Inspire from '@/assets/Inspire.png';
import Image from 'next-export-optimize-images/picture';
import { TopArt } from "./TopArts";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import comment1 from '@/assets/comment1.png';
import comment2 from '@/assets/comment2.png';
import comment3 from '@/assets/comment3.png';
import comment4 from '@/assets/comment4.png';
import comment5 from '@/assets/comment5.png';

export const TopSection = () => {
    return (
        <div className="w-full mx-auto relative">
            <TopArt />

            <div className="relative bg-black flex flex-col items-center justify-center gap-4 p-8">
                    <div className="typing-effect font-dot text-white text-[1.5rem] tracking-tight leading-[2.2rem]">
                        そのアイデア、1人じゃ無理でした…。
                    </div>

                <div className="flex flex-col w-full relative">
                    <FadeAndSlideScrollTriggerAnimation className="">
                        <Image src={comment1} alt="ユーザーコメント1" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="-mt-2 ml-auto">
                        <Image src={comment2} alt="ユーザーコメント2" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="-mt-2">
                        <Image src={comment3} alt="ユーザーコメント3" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className=" -mt-2 ml-auto">
                        <Image src={comment4} alt="ユーザーコメント4" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="-mt-2">
                        <Image src={comment5} alt="ユーザーコメント5" className="h-10 w-fit" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="mx-auto absolute inset-0 m-auto">
                        <Image src={Inspire} alt="インスピレーション" className="h-32" />
                    </FadeAndSlideScrollTriggerAnimation>

                </div>

                <FadeAndSlideScrollTriggerAnimation className="relative w-full mx-auto">
                    <Image src={Balloon} alt="吹き出し" className="mx-auto h-32" />
                    <div className="absolute font-dot top-0 left-0 inset-0 flex justify-center items-center text-center leading-8 pb-3 text-title3">
                        こんな悩みを持つ<br />
                        中四国の全クリエイターへ
                    </div>
                </FadeAndSlideScrollTriggerAnimation>

            </div>
        </div>

    )
}