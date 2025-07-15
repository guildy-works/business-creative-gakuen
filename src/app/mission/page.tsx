'use client'

import { SectionType1 } from "@/components/SectionType1"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"
import { MissionTopArt } from "@/views/mission/TopArts"
import { motion } from "motion/react"
import { ReactNode } from "react"
import ProfileImage from "@/assets/profile.webp";
import Image from 'next-export-optimize-images/picture';
import clsx from "clsx"
import Line from '@/assets/sns/LINE.svg'
import Instagram from '@/assets/sns/Instagram.svg'
import { resources } from "@/resources"
import Discord from '@/assets/sns/discord-square.svg'

export default function Mission() {
    return (
        <>
            <MissionTopArt />
            <div className="mt-32 sm:mt-44 flex flex-col relative">

                <motion.div
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-fit mx-auto flex flex-col justify-center items-center py-8">
                    <div className="flex  text-title1 font-bold tracking-wider">
                        <span className="text-color2">M</span>
                        i
                        <span className="text-color3">s</span>
                        <span className="text-color0">s</span>
                        ion
                    </div>

                    <span className="w-[60%] border-b-2 border-black mt-2 md:mt-4 " />
                </motion.div>


                <motion.div
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mx-auto text-title1 text-center">
                    デジタル × リアルで<br />
                    中四国地方に新たな<br className="sm:hidden" />
                    つながりと可能性を創出
                </motion.div>

                <Top />
            </div>
        </>)
}

const Top = () => <>
    <div
        className="pb-32 flex flex-col justify-center items-center  mt-36 gap-4 bg-gradient1 relative">
        <div className="-translate-y-[99%] h-24 w-full left-0 right-0 bg-gradient1 rounded-t-[100%] top-0 absolute" />

        <div className="max-w-6xl mx-auto space-y-6 px-8">
            <motion.div
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-fit mx-auto flex flex-col justify-center items-center">
                <div className="flex  text-title1 font-bold tracking-wider">
                    <span className="text-color3">V</span>
                    is
                    <span className="text-color0">i</span>
                    on
                </div>

                <span className="w-[60%] border-b-2 border-black mt-2 md:mt-4 " />
            </motion.div>

            <VisionItem
                num="01"
                title={<>人々がつながり、<br />共創し合うコミュニティ</>}
                desctiption={<>
                    フリーランス、経営者、大学生や社会人が、地理的・社会的な壁を取り払い、<br />
                    互いのスキルやリソースを活かして、<br />
                    新しいアイデアや人脈が生まれるきっかけを提供する
                </>}
            >
            </VisionItem>

            <VisionItem
                num="02"
                title={<>デジタルで紡ぐ、<br />地方の伝統と未来</>}
                desctiption={<>
                    中四国地方のデジタルリテラシーの格差を是正し、<br />
                    デジタル技術で地域資源の継承並びに最大化を図り、<br />
                    地方経済の活性化を推進する
                </>}
            >
            </VisionItem>

            <VisionItem
                num="03"
                title={<>発信力を活かし、<br />地方の未来を切り拓く</>}
                desctiption={<>
                    発信力を活用して、地域イベントの活性化、<br />
                    雇用創出を促し、<br />
                    広島の転出超過改善などの中四国地方の課題解決に貢献する
                </>}
            >
            </VisionItem>

            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-fit mx-auto flex flex-col justify-center items-center">
                <div className="flex  text-title1 font-bold tracking-wider">
                    <span className="text-color2">V</span>
                    <span className="text-color3">a</span>
                    lue
                </div>

                <span className="w-[60%] border-b-2 border-black mt-2 md:mt-4 " />
            </motion.div>

            <VisionItem
                num="01"
                title="影響力と魅力発信"
                desctiption={<>
                    つながるラボや個々の影響力を活かし、地域の魅力を発信する<br />
                    またマスコットやキャラクターを活用して、<br />
                    地域に新しい楽しさと活力を提供する
                </>}
            >
            </VisionItem>
            <VisionItem
                num="02"
                title="地方の経済活性化"
                desctiption={<>
                    フリーランス、経営者、大学生や社会人がつながり、<br />
                    新しいアイデアとビジネスや雇用の機会を提供する<br />
                </>}
            >
            </VisionItem>

            <VisionItem
                num="03"
                title="多様なつながりと共生"
                desctiption={<>
                    子供から経営者の方々が積極的に参加できるプログラムやイベントを開催<br />
                    独自の視点や才能を見つけて、つながりやビジネスへ昇華させる
                </>}
            >
            </VisionItem>

            <VisionItem
                num="04"
                title="デジタルリテラシーの向上"
                desctiption={<>
                    デジタルスキルの向上を目指したセミナーや勉強会などのイベントを開催し、<br />
                    デジタル技術を学べる機会を整備する
                </>}
            >
            </VisionItem>

            <VisionItem
                num="05"
                title="経済圏の構築"
                desctiption={<>
                    NFTやトークンを活用し、独自の経済圏を形成<br />
                    中四国地方とつながるラボが連動し循環する仕組みを構築する
                </>}
            >
            </VisionItem>
        </div>

        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-fit mx-auto flex flex-col justify-center items-center md:py-8">
            <div className="flex  text-title1 font-bold tracking-wider">
                <span className="text-color0">P</span>
                ro
                <span className="text-color3">f</span>
                ile
            </div>

            <span className="w-[60%] border-b-2 border-black mt-2 md:mt-4 " />
        </motion.div>

        <div className="px-8 w-full">
            <Profile />
        </div>

    </div>
</>

const VisionItem = ({
    desctiption,
    title,
    num,
}: {
    desctiption: ReactNode
    title: ReactNode,
    num: string
}) => <>
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white p-8 w-full border-2 border-color0 overflow-hidden">
            <SkewScrollTriggerAnimation className="mx-auto flex flex-col gap-4 items-center mt-auto h-fit" delay={0.2} >
                <span className="mx-auto sm:mx-0 text-[3.4rem] py-4 text-color0">{num}</span>
                <h3 className="mt-1 text-title2 text-color3 font-bold">{title}</h3>
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation tag="p" className="mx-auto mt-6 sm:mt-8 text-title4">
                {desctiption}
            </SkewScrollTriggerAnimation>
        </motion.div>
    </>

const Profile = () => {
    return (
        <>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={clsx(
                    "grid !max-w-5xl w-full relative",
                    "grid-cols-1  mx-auto !gap-4",
                    "md:grid-cols-2 md:!gap-16",
                    "bg-white border-2 border-color0 p-8 md:p-16 overflow-hidden rounded-3xl"
                )}
            >
                <div id="orner" className="absolute -top-24" />

                <div className="flex flex-col items-center justify-center gap-4">
                    <FadeAndSlideScrollTriggerAnimation className="text-title2 font-bold">オーナー</FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="rounded-3xl border-2 border-black overflow-hidden">
                        <motion.div
                            transition={{ bounce: 1, damping: 5, mass: 0.8 }}
                            initial={{ translateY: "100%", opacity: 0.4, scale: 1 }}
                            whileInView={{ translateY: "0", opacity: 1, scale: 1 }}
                            className="size-full">
                            <Image src={ProfileImage} alt="img" className="" />
                        </motion.div>
                    </FadeAndSlideScrollTriggerAnimation>

                    <Sns />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 relative">
                    <div className="mx-auto justify-start flex flex-col items-start gap-1  w-full">

                        <>
                            <SkewScrollTriggerAnimation tag="h2" className="text-title2 font-bold">
                                プロフィール
                            </SkewScrollTriggerAnimation>
                            <Hr />
                            <SkewScrollTriggerAnimation tag="p" className="mt-2">
                                ・名前：　小早川<br />
                                ・出身：　広島県福山市<br />
                                ・趣味：　筋トレ、野球、スポーツ観戦<br />
                            </SkewScrollTriggerAnimation>
                        </>

                        <>
                            <SkewScrollTriggerAnimation tag="h2" className="mt-6 text-title2 font-bold">
                                ビジネス
                            </SkewScrollTriggerAnimation>
                            <Hr />
                            <SkewScrollTriggerAnimation tag="p" className="mt-2">
                                ・つながるラボオーナー<br />
                                ・アドサル代表<br />
                                ・一般社団法人創業事業継続振興会学生部会理事<br />
                                ・HITひろしま観光大使<br />
                            </SkewScrollTriggerAnimation>
                        </>

                        <>
                            <SkewScrollTriggerAnimation tag="h2" className="mt-6 text-title2 font-bold">
                                メッセージ
                            </SkewScrollTriggerAnimation>
                            <Hr />
                            <SkewScrollTriggerAnimation tag="p" className="mt-2">
                                つながるラボは、皆さんが主役です<br />
                                それぞれの目的達成のためにつながりましょう⭐
                            </SkewScrollTriggerAnimation>
                        </>

                    </div>
                </div>
            </motion.div>
        </>
    )
}

const Sns = () => <div className="flex gap-4">
    <motion.a
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        href={resources.links.personalInstagram}
        target="_blank"
        className="text-gray-400 hover:text-gray-600 transition-colors">
        <Image src={Instagram} alt="Instagram" className="w-12" />
    </motion.a>

</div>

const Hr = () => <motion.div
    viewport={{ once: true }}
    transition={{ type: "spring", bounce: 0.4, damping: 5, mass: 0.2 }}
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    className="h-[2px] bg-black" />