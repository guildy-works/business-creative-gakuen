import TopImage from "@/assets/top.png";
import RoseImage from "@/assets/rose.png";
import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Kon1Image from '@/assets/kon6.jpg';
import Balloon from '@/assets/balloon.png';
import Inspire from '@/assets/Inspire.png';
import Bg1_Mobile from '@/assets/top_mobile.jpg';
import Image from 'next-export-optimize-images/picture';
import { TopArt } from "./TopArts";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";

export const TopSection = () => {
    return (
        <div className="w-full mx-auto relative">
            <TopArt />

            <div className="relative bg-black flex flex-col items-center justify-center gap-4 pt-8 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <SkewScrollTriggerAnimation tag="h1" className='font-dot text-center text-[1.5rem] tracking-tight leading-[2.2rem] text-white' >
                    そのアイデア、1人じゃ無理でした…。
                </SkewScrollTriggerAnimation>

                <div className="relative w-full mx-auto">
                    <Image src={Balloon} className="mx-auto h-32" />
                    <div className="absolute font-dot top-0 left-0 inset-0 flex justify-center items-center text-center leading-8 pb-3 text-title3">
                        こんな悩みを持つ<br />
                        中四国の全クリエイターへ
                    </div>
                </div>
                <Image src={Inspire} className="mx-auto h-32 absolute inset-0 m-auto" />
            </div>
        </div>

    )
}