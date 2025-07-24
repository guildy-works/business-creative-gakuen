import { SectionBox } from "@/components/SectionBox";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import clsx from "clsx";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Issue1 from "@/assets/issue1.webp";
import { PlanTable } from "./PlanTable";
import { motion } from "motion/react"
import { resources } from "@/resources";
import Image from 'next-export-optimize-images/picture';
import character1 from "@/assets/character3.png";
import character2 from "@/assets/character2.png";
import character3 from "@/assets/character1.png";

export const PlansSection = () => {
    return (
        <SectionBox disablePx disableMaxWidth className="bg-image4 w-full py-16 !gap-8 relative !my-0 px-8">
            <div id="plans" className="absolute -top-24" />
            <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">

                <h2 className="text-title1 text-white font-nikokaku">料金プラン</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <PlanItem title={<>フリープラン</>}
                        price="¥0/月"
                        content={<ul className="list-[disclosure-closed] text-size2 font-bold leading-4 px-2">
                            <li>イベントの参加</li>
                            <li>地域やビジネス情報の受け取り</li>
                            <li>求人や案件、仕事への応募</li>
                            <li>部活動やチャット交流</li>
                        </ul>}
                        imageClass="h-14"
                        src={character1}
                    />
                    <PlanItem title={<>ビジネスプラン</>}
                        imageClass="h-12"
                        price="¥3,000/月"
                        content={<ul className="list-[disclosure-closed] text-size2 font-bold leading-4 px-2">
                            <li>フリープラン機能</li>
                            <li>交流会が全て無料</li>
                            <li>投稿や宣伝し放題</li>
                            <li>メンバー情報一覧確認</li>
                            <li>朝活、自習室、委員会の参加</li>
                        </ul>}
                        src={character2}
                    />
                    <PlanItem title={<>スポンサープラン</>}
                        imageClass="h-10"
                        price="¥10,000/月"
                        content={<ul className="list-[disclosure-closed] text-size2 font-bold leading-4 px-2">
                            <li>ビシネスプラン機能</li>
                            <li>投稿を常にトップ固定表示</li>
                            <li>イベント毎に宣伝</li>
                        </ul>}
                        src={character3}
                    />
                </div>
            </div>
            {/* 
            <ServiceDialog buttonText="詳細" >
                <PlanTable />
            </ServiceDialog> */}
        </SectionBox>
    )
}

const PlanItem = ({ title, price, content, delay, imageClass, href, src }: {
    delay?: number,
    title: ReactNode,
    price: ReactNode,
    content: ReactNode,
    href?: string,
    imageClass?: string,
    src: StaticImageData
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            className={clsx(
                "relative h-full justify-center flex border-2 border-black bg-white overflow-hidden rounded-md",
            )}>
            <motion.div className="mt-auto"
                viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                initial={{ transform: "translateY(100%)" }}
                whileInView={{ transform: "translateY(0%)" ,}}>
                <Image
                    src={src}
                    alt="プランキャラクター"
                    className={clsx("object-contain", imageClass)}
                />
            </motion.div>

            <div className="flex flex-col items-center justify-center gap-2 py-8 min-w-[180px]">
                <div>
                    <h2 className=" text-title3 font-nikokaku text-center">{title}</h2>
                    <div className="w-[120px] mx-auto">
                        <hr className="w-full border-font1 border" />
                    </div>
                </div>

                <h3 className="text-title5 font-bold">{price}</h3>

                <div className="">{content}</div>
            </div>

            <motion.div
                viewport={{ once: true }}
                initial={{ transform: "translateY(100%)" }}
                whileInView={{ transform: "translateY(0%)" }}
                         transition={{ duration: 0.1, delay: 0.35 }}
                className="mt-auto">
                <Image
                    src={src}
                    alt="プランキャラクター"
                    className={clsx("object-contain", imageClass)}
                />
            </motion.div>
        </FadeAndSlideScrollTriggerAnimation>
    );
}
