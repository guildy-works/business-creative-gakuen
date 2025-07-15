import { ReactNode } from "react"
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { resources } from "@/resources";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import { StaticImageData } from "next/image";

export const MembersSection2 = () => {

    return (
        <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">
            <SkewScrollTriggerAnimation tag="h2" className="text-title1 font-bold">入会者の紹介</SkewScrollTriggerAnimation>

            <Splide
                className="mx-auto max-w-full"
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

            <p>
                その他に<br />
                SNSインフルエンサー集団<br />
                中四国地方で活躍する経営者/フリーランス<br />
                マルシェ運営者/イベンター<br />
                地方行政関連の方<br />
                大学生や社会人<br />
                の方々が入会しております！
            </p>
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
            className="h-full max-w-80 flex flex-col items-center justify-center bg-color4 p-5 gap-4 rounded-3xl overflow-hidden">
            <div className="w-full gap-4 grid grid-cols-2">
                <div className="rounded-lg">
                    <Image src={src} alt={title} className="w-full rounded-lg object-cover" />
                </div>
                <div className="flex-grow-1 m-auto">
                    <h3 className="text-title3 font-bold">{title}</h3>
                </div>
            </div>
            <h4 className="text-[1.2rem] leading-8 font-bold">{title2}</h4>
            <p className="p-4 h-full bg-white w-full rounded-lg">{content}</p>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}