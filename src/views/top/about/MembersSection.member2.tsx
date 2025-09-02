import { ReactNode } from "react"
import { Options, Splide, SplideSlide, } from "@splidejs/react-splide";
import { resources } from "@/resources";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import { StaticImageData } from "next/image";
import { TypeWriterScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/TypeWriterScrollTriggerAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";

export const MembersSection2 = () => {

    return (
        <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center py-16 relative">
            <div className="hidden md:block bg-image2 absolute inset-0 mx-auto" />
            <div className="md:hidden bg-image2_mobile absolute inset-0 mx-auto" />

            <FadeAndSlideScrollTriggerAnimation
                className="px-8 font-bold font-dot bg-black text-white p-4 rounded-xl border-4 border-white text-title3">
                メンバー紹介
            </FadeAndSlideScrollTriggerAnimation>

            <Splide
                className="mx-auto max-w-full pb-16"
                options={{
                    autoplay: false,
                    rewind: false,
                    wheel: false,
                    releaseWheel: true,
                    interval: 2000, // 自動再生の間隔
                    speed: 2000, // フェードする時間
                    arrows: false,
                    width: 'auto',
                    gap: '1rem',
                    padding: { right: '2rem', left: '2rem', },
                    perPage: 1,
                    autoWidth: true,
                    classes: {
                        pagination: "splide__pagination",
                        page: "splide__pagination__page dot-pagination",
                    },
                } as Options}
            >
                {resources.members2.map((resource, index) => (<SplideSlide key={resource.name} >
                    <OnayamiItem title={resource.name}
                        key={index}
                        title2={resource.job}
                        content={resource.details}
                        src={resource.image}
                    />
                </SplideSlide>
                ))}

            </Splide>

            <FadeAndSlideScrollTriggerAnimation className="font-dot text-center text-size1 leading-5">
                フリーランス、経営者、<br />
                インフルエンサー、アフィリエイターなど<br />
                色んなクリエイターがいます
            </FadeAndSlideScrollTriggerAnimation>

        </div>
    )
}

const OnayamiItem = ({ title, title2, content, delay, colorClass, href, src }: {
    delay?: number,
    title: ReactNode,
    title2: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string
    src: StaticImageData
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            className="h-full max-w-80 flex flex-col items-center justify-center bg-white border-4 border-black p-5 gap-4 rounded-3xl overflow-hidden">
            <div className="w-full gap-4 grid grid-cols-2">
                <div className="rounded-lg">
                    <Image src={src} alt={title} className="w-full rounded-lg object-cover" />
                </div>
                <div className="flex-grow-1 m-auto">
                    <h3 className="text-title3 font-bold font-dot">{title}</h3>
                </div>
            </div>
            <h4 className="text-[1.2rem] leading-8 font-bold font-dot">{title2}</h4>
            <p className="p-4 h-full w-full font-dot bg-black text-white">{content}</p>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}