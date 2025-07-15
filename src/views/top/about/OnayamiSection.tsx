import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import Issue1 from "@/assets/issue1.svg";
import Issue2 from "@/assets/issue2.svg";
import Issue3 from "@/assets/issue3.svg";
import Issue4 from "@/assets/issue4.svg";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import { motion } from "motion/react";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import clsx from "clsx";
import Line1 from "@/assets/line1.svg";

export const OnayamiSection = () => {
    const Chip = ({ children, delay }: { children: ReactNode, delay: number }) =>
        <FadeAndSlideScrollTriggerAnimation
            delay={delay}
            className="rounded-full font-bold px-6 py-2 bg-color3 text-[1.56rem]  tracking-tighter">
            {children}
        </FadeAndSlideScrollTriggerAnimation>

    const Dot = ({ delay, className }: { delay: number, className?: string }) =>
        <FadeAndSlideScrollTriggerAnimation
            delay={delay}
            className={clsx("rounded-full font-bold text-[1.2rem]", className)}>
            ・
        </FadeAndSlideScrollTriggerAnimation>

    return <SectionBox disablePx disableMaxWidth className="!mb-0">

        <div className="w-full flex flex-col items-center mx-auto justify-center">

            <div className="flex flex-col items-center mx-auto md:max-w-4xl max-w-[398px] md:w-full">
                <h2 className="flex  gap-2 md:gap-1 z-10 w-fit md:w-full justify-center flex-wrap items-center">
                    <div className="flex items-baseline justify-center w-full md:w-fit gap-1">
                        <Chip delay={0}>フリーランス</Chip>
                        <Dot delay={0.1} />
                        <Chip delay={0.2}> 経営者</Chip>
                    </div>
                    <Dot delay={0.3} className="hidden md:block" />
                    <div className="flex items-baseline justify-center w-full md:w-fit gap-1">
                        <Chip delay={0.4}>社会人</Chip>
                        <Dot delay={0.5} />
                        <Chip delay={0.6}>大学生</Chip>
                    </div>
                </h2>

                <motion.div
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.4, damping: 5, mass: 0.2 }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="mt-2 w-fit px-8" >
                    <Image src={Line1} alt="img" className="w-full" />
                </motion.div>
            </div>

            <SkewScrollTriggerAnimation tag="h2" className="text-title1 leading-[3.5rem] font-bold mx-auto">
                こんな悩みありませんか？
            </SkewScrollTriggerAnimation>

            <section className="max-w-3xl md:max-w-7xl grid grid-cols-2 md:grid-cols-4 p-8 pt-0 md:p-0 gap-4 sm:gap-8"
            >
                <OnayamiItem marginTop title={<>人脈を<br className="sm:hidden" />広げたい</>}
                    content={<>
                        <ListItem >
                            交流する機会がない
                        </ListItem>
                        <ListItem >
                            経営者との<br className="sm:hidden" />つながりが薄い<br />
                        </ListItem>
                        <ListItem >
                            中四国の人との<br className="sm:hidden" />つながりが薄い<br />
                        </ListItem>
                    </>}
                    src={Issue1}
                />

                <OnayamiItem

                    title={<>宣伝や<br className="sm:hidden" />告知をしたい</>}
                    content={<>
                        <ListItem >
                            求人や案件の<br className="sm:hidden" />
                            掲載費用が高い<br />
                        </ListItem>
                        <ListItem >
                            イベントを告知する<br className="sm:hidden" />
                            場所がない
                        </ListItem>
                        <ListItem >
                            商品やサービスの<br className="sm:hidden" />
                            宣伝をしたい
                        </ListItem>
                    </>}
                    src={Issue2}
                />

                <OnayamiItem marginTop title={<>スキルアップ<br className="sm:hidden" />したい</>}
                    content={<   >
                        <ListItem >
                            今のスキルをもっと磨きたい
                        </ListItem>
                        <ListItem >
                            新しいスキルを身につけたい
                        </ListItem>
                        <ListItem >
                            朝の時間を有効活用したい
                        </ListItem>
                    </>}
                    src={Issue3}
                />


                <OnayamiItem title={<>中四国を<br className="sm:hidden" />盛り上げたい</>}
                    content={< >
                        <ListItem >
                            地元に恩返しをしたい
                        </ListItem>
                        <ListItem >
                            地方や地域の問題を<br className="sm:hidden" />解決したい
                        </ListItem>
                        <ListItem >
                            地方の魅力や<br className="sm:hidden" />文化を広めたい
                        </ListItem>
                    </>}
                    src={Issue4}
                />
            </section>
        </div>
    </SectionBox>
}

const ListItem = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex w-full">
            <div>・</div>
            <div>{children}</div>
        </div>
    )
}

const OnayamiItem = ({ title, content, delay, marginTop, href, src }: {
    delay?: number,
    marginTop?: boolean,
    title: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string
    src: StaticImageData,
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation className={clsx(
            marginTop ? "md:pb-12" : "md:pt-12",
            "mt-8 overflow-hidden flex flex-col items-center justify-center",
        )}>
            <FadeAndSlideScrollTriggerAnimation
                delay={0.2}>
                <h2 className="text-title3 text-center">{title}</h2>
            </FadeAndSlideScrollTriggerAnimation>
            <div className="h-36 sm:h-48 w-auto z-10 py-4" >
                <Image src={src} alt="img" className="h-full" />
            </div>

            <FadeAndSlideScrollTriggerAnimation delay={0.3} className="-mt-12 h-full bg-gradient3 pt-12 p-4 rounded-3xl w-full">
                <div className="w-full flex flex-col gap-2 items-center">
                    {content}
                </div>
            </FadeAndSlideScrollTriggerAnimation>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}