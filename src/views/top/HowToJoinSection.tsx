import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import Join1 from "@/assets/join1.png";
import Join2 from "@/assets/join2.png";
import Join3 from "@/assets/join3.png";
import Join4 from "@/assets/join4.png";
import clsx from "clsx";

const data = [

    {
        num: "01",
        title: "公式LINEの追加",
        img: Join1,
        content: <>
            つながるラボの<br />
            公式LINEの追加
        </>
    },
    {
        num: "02",
        title: "申し込み",
        img: Join2,
        content: <>
            Discordの確認をするために<br />
            照合フォームへ回答
        </>,
    },
    {
        num: "03",
        title: <>つながるラボの<br />コミュニティへ招待</>,
        img: Join3,
        content: <>
            申し込みの確認ができましたら<br />
            サロンで活用する<br />
            Discordサーバーへ招待
        </>,
    },
    {
        num: "04",
        title: "正式",
        img: Join4,
        content: <>
            問題がなければ<br />
            「つながるラボメンバー」<br />
            になれます
        </>,
    },
]

export const HowToJoinSection = () => {
    return <SectionBox disablePx disableMaxWidth className="mx-auto max-w-4xl !gap-8">
        <h2 className="text-title1 w-full border-b-2 border-color3 pb-4 text-center border-dotted max-w-md">
            方法
        </h2>

        <div className="w-full flex flex-col  px-8" >
            {
                data.map((x, i) =>
                    <IntroduceItem
                        isLast={i === data.length - 1}
                        src={x.img}
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
                "w-full h-full flex flex-col gap-4 relative  pb-8",
                isLast ? "" : "border-l-2 border-color3"
            )}
        >
            <div className="bg-color3 rounded-full size-8 flex justify-center items-center absolute left-0 top-0 -translate-x-1/2"></div>

            <div className="flex flex-wrap w-full">
                <div className="ml-8">
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
                <div className="ml-auto my-auto">
                    <Image src={src} alt={title} className="size-32 object-cover" />
                </div>

            </div>
        </FadeAndSlideScrollTriggerAnimation>
    );
}