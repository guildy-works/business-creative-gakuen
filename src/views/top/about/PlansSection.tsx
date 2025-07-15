import { SectionBox } from "@/components/SectionBox";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import clsx from "clsx";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Issue1 from "@/assets/issue1.webp";
import { ServiceDialog } from "@/components/ServiceDialog";
import { PlanTable } from "./PlanTable";
import { motion } from "motion/react"
import { resources } from "@/resources";
import { HighlightMarker } from "@/components/HighlightMarker";
import { Button4 } from "@/components/Button4";

export const PlansSection = () => {
    return (
        <SectionBox disablePx disableMaxWidth className="bg-gradient1 w-full py-16 !gap-8 relative">
            <div id="plans" className="absolute -top-24" />
            <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">

                <h2 className="text-title1 font-bold">料金プラン</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <PlanItem title={<>フリープラン</>}
                        price="¥0/月"
                        title2={<>大学生・社会人におすすめ</>}
                        content={<ul className="list-disc px-4">
                            <li>交流会の参加</li>
                            <li>セミナーや勉強会の参加</li>
                            <li>地域や企業イベントの参加</li>
                            <li>求人や案件情報の受け取り</li>
                        </ul>}
                        markerClassName="bg-color1"
                        src={Issue1}
                    />

                    <PlanItem title={<>ビジネスプラン</>}
                        markerClassName="bg-color2"
                        price="¥3,000/月"
                        title2={<>フリーランス・経営者におすすめ</>}
                        content={<ul className="list-disc px-4">
                            <li>フリープラン機能</li>
                            <li>交流会と朝活が無料</li>
                            <li>求人や仕事の募集し放題</li>
                            <li>イベントや事業の宣伝し放題</li>
                            <li>情報共有（賞金獲得チャンス）</li>
                            <li>チャット交流とメンバー情報一覧＆DM</li>
                        </ul>}
                        src={Issue1}
                    />
                </div>
            </div>

            <ServiceDialog buttonText="詳細" >
                <PlanTable />
            </ServiceDialog>
        </SectionBox>
    )
}

const PlanItem = ({ title, title2, price, content, delay, markerClassName, colorClass, href, src }: {
    delay?: number,
    title: ReactNode,
    title2: ReactNode,
    price: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string,
    markerClassName?: string,
    src: StaticImageData
}) => {
    return (
        <motion.div
            viewport={{ once: true }}
            transition={{
                scale: { type: "spring", duration: 0.5, delay },
                opacity: { duration: 0.3, },
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className={clsx(
                "h-full flex flex-col items-center justify-center bg-color3  gap-3 overflow-hidden rounded-3xl p-8",
            )}>
            <div>
                <HighlightMarker
                    className=" text-title4 font-bold text-center"
                    markerClassName={markerClassName}
                >{title2}</HighlightMarker>
            </div>

            <h2 className=" text-title2 font-bold text-center">{title}</h2>

            <div className="w-full">
                <hr className="w-full border-font1 border" />

            </div>

            <h3 className="text-title2">{price}</h3>

            <div className=" h-full w-full">{content}</div>
        </ motion.div>
    );
}
