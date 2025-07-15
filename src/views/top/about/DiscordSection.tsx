import { SectionType1 } from "@/components/SectionType1"
import Image from 'next-export-optimize-images/picture';
import { ButtonRightArrow } from "@/components/ButtonRightArrow";
import { motion } from "motion/react";
import Link from "next/link";
import Line from '@/assets/sns/LINE.svg'
import ReccomendsBalloon from '@/assets/recommends-balloon.png'
import Discord from '@/assets/sns/Discord.svg'
import DiscordPng from '@/assets/discord.png'
import { resources } from "@/resources";
import { MdEmail } from "react-icons/md";

export const DiscordSection = () => {

    return (
        <SectionType1 disableLine  className="!px-5 !py-0" innerClassName="items-center relative">
            {/* <div id="" className="absolute -top-24" /> */}

            <motion.div
                viewport={{ once: true }}
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="rounded-3xl bg-[#5e18eb] py-8 px-4 md:p-16 md:px-48 w-full my-8 md:my-32 !mb-8 flex flex-col">
                <h2 className="text-white text-center mb-2 text-title1">コミュニティの様子</h2>

                <p className="text-center text-white text-title3 mt-2 leading-[2.4rem]">
                    つながるラボでは<br/>
                    <Link href={resources.links.discordOfficial} target="_blank" className="text-color10 underline">
                        Discord
                    </Link>
                    という無料アプリを活用します
                </p>

                <Image src={DiscordPng} alt="Discord" className="w-full mx-auto my-8" />

                {/* <ButtonRightArrow className="w-fit mx-auto" href={resources.links.discord} >
                    <div className="flex items-center gap-3">
                        <Image src={Discord} alt="Line" className="w-12" />
                        <div className="flex flex-col items-center text-center gap-0 text-[1.2rem] leading-[1.6rem]">
                            <big className="pr-2">つながるラボを覗く</big>
                            <span className="pr-8 mt-1"> (招待を受ける)</span>
                        </div>
                    </div>
                </ButtonRightArrow> */}

            </motion.div>


        </SectionType1>
    )
}