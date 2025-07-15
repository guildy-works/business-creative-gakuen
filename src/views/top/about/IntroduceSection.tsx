import { SectionBox } from "@/components/SectionBox"
import { ReactNode } from "react"
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/image';
import { MdOutlinePhoto, MdPerson, MdPersonOutline, MdPhoto } from "react-icons/md";
import { motion } from "motion/react"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { resources } from "@/resources";
import Triangle1 from "@/assets/triangle1.png";
import Triangle2 from "@/assets/triangle2.png";

export const IntroduceSection = () => {
    return <SectionBox disablePx disableMaxWidth className="!mt-0">
        <div id="about" />

        <div
            className="w-full relative flex flex-col overflow-hidden"
        >
            <div className="w-full flex justify-center items-center">
                <Image src={Triangle1} className="w-full h-20" alt="" />
            </div>

            <div
                className="w-full flex justify-center items-center bg-[#6e35df] pt-8 py-4">
                <SkewScrollTriggerAnimation skewPanelClass="!bg-[#6e35df]"
                    className="py-4 text-white text-[3rem] leading-[3.5rem] font-bold "
                >
                    つながるラボなら<br />
                    中四国でつながる
                </SkewScrollTriggerAnimation>
            </div>

            <div className="w-full flex justify-center items-center">
                <Image src={Triangle2} className="w-full h-20" alt="" />
            </div>

        </div>

        <div className="md:hidden hiddlen w-full max-w-6xl px-8 space-y-8" >
            {
                resources.introduces.map((x, i) =>
                    <IntroduceItem
                        image={x.image}
                        baloon={x.baloon}
                        delay={0}
                        key={i}
                        num={x.num}
                        title={x.title}
                        content={x.content}
                    />
                )
            }
        </div>

        <div className="hidden mt-16 hiddlen w-full md:flex justify-center flex-wrap max-w-7xl px-8" >
            {
                resources.introduces.map((x, i) =>
                    <div className="p-4 md:w-1/3">
                        <IntroduceItem
                            image={x.image}
                            baloon={x.baloon}
                            delay={i * 0.1}
                            key={x.num}
                            num={x.num}
                            title={x.title}
                            content={x.content}
                        />
                    </div>
                )
            }
        </div>
    </SectionBox>
}


const IntroduceItem = ({ title, content, num, delay, baloon, image }: {
    title: ReactNode,
    num: string,
    content: ReactNode,
    delay: number,
    src?: StaticImageData,
    baloon?: StaticImageData,
    image: StaticImageData | null,

}) => {
    return (
        <motion.div
            viewport={{ once: true }}
            transition={{
                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, delay },
                opacity: { duration: 0.3, },
            }}
            initial={{ translateY: "60px", opacity: 0.4 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            className="relative py-8 px-6 w-full h-full flex flex-col items-center gap-4 bg-gradient4 rounded-3xl" >

            <h3 className="text-color2 flex flex-col text-[3rem]">
                <span> Point</span>
                <span className="text-[4rem] mx-auto mt-8">{num}</span>
            </h3>

            <h3 className="text-[1.72rem] mt-8 leading-[2rem] text-center font-bold">
                {title}
            </h3>

            {
                image
                    ? <div className="px-12">
                        <Image src={image} alt="img" className="w-full" />
                    </div>
                    : <MdOutlinePhoto className="text-[12rem]" />
            }

            <p className="text-size2 text-center">{content}</p>
            {baloon ? <FadeAndSlideScrollTriggerAnimation delay={0.4}
                className="pt-0 md:pt-12 z-10 absolute -right-[32px] top-0 bottom-0 m-auto pb-24 size-fit" >
                <Image src={baloon} alt="img" className="w-40" />
            </FadeAndSlideScrollTriggerAnimation> : <></>}
        </ motion.div >
    );
}