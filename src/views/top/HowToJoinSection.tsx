import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import clsx from "clsx";
import { resources } from "@/resources";

const data = [

    {
        num: "01",
        title: "公式LINEの追加",
        content: <>
            {resources.siteTitle}の<br />
            公式LINEを追加
        </>
    },
    {
        num: "02",
        title: "申し込み",
        content: <>
            Discordの確認をするために<br />
            照合フォームへ回答
        </>,
    },
    {
        num: "03",
        title: <>コミュニティへ招待</>,
        content: <>
            申し込み確認ができたら<br />
            Discordサーバーへ招待
        </>,
    },
    {
        num: "04",
        title: "正式メンバーへ",
        content: <>
            おめでとうございます<br />
            今日からメンバーです
        </>,
    },
]

export const HowToJoinSection = () => {
    return <SectionBox disablePx disableMaxWidth className="sm:py-12 md:py-24 !gap-8 bg-black !my-0">
        <h2 className="text-title1 font-nikokaku w-full pb-4 text-center max-w-lg text-white">
            メンバーになるには
        </h2>

        <div className="w-full flex flex-col  px-8" >
            {
                data.map((x, i) =>
                    <IntroduceItem
                        isLast={i === data.length - 1}
                        key={i}
                        num={x.num}
                        delay={i * 200}
                        title={x.title}
                        content={x.content}
                    />
                )
            }
        </div>
    </SectionBox>
}


const IntroduceItem = ({ title, content, delay, num, src, isLast }: {
    delay?: number,
    title: ReactNode,
    num: string,
    content: ReactNode,
    isLast: boolean,
    src?: StaticImageData
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            delay={0.2}
            className={clsx(
                "max-w-80 w-full mx-auto h-full flex flex-col gap-4 relative  pb-8 text-white font-dot",
                isLast ? "" : "border-x-2 border-white border-dotted"
            )}
        >
            <div className=" bg-white size-4 flex justify-center items-center absolute left-0  -translate-x-1/2"></div>
            <div className="bg-white size-4 flex justify-center items-center absolute right-0  translate-x-1/2"></div>

            <div className="flex flex-wrap pr-4">
                <div className="ml-8 -mt-2">
                    <h3 className="h-8 flex items-center text-title3 text-color3">
                        <small className="mr-4">STEP</small> {num}
                    </h3>
                    <h2 className="mt-2 text-title3">
                        {title}
                    </h2>
                    <p className="mt-2">
                        {content}
                    </p>
                </div>

            </div>

        </FadeAndSlideScrollTriggerAnimation>
    );
}