import Image from 'next-export-optimize-images/picture';
import { motion } from "motion/react";
import Link from "next/link";
import Line from '@/assets/sns/LINE.svg'
import button1 from '@/assets/button1.png'
import button2 from '@/assets/button2.png'
import ContactBackground from '@/assets/contact-background.png'
import { resources } from "@/resources";

export const ContactSection = () => {

    return (
        <>
            <div className="flex items-center relative">
                <div id="contacts" className="absolute -top-24" />

                <Image src={ContactBackground} className="w-full" alt="ContactBackground" />

                <div className="absolute inset-0 p-8">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="z-0 bg-image5 py-8 px-4 flex flex-col border-4 border-black w-full">
                        <h2 className="text-[3rem] text-center font-nikokaku font-bold">入会はコチラ</h2>

                        <motion.div
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1 }}
                            className='mt-4 w-full text-center text-color10 text-title3 font-bold font-nikokaku'>
                            ＼無料キャンペーン実施中／
                        </motion.div>

                        <Link
                            target="_blank"
                            href={resources.links.line}
                            className="relative mx-auto flex text-size1">
                            <Image src={button1} alt="Background" className="h-[74px]"  />

                            <div className="absolute inset-0 flex items-center justify-center gap-3 text-center">
                                <Image src={Line} alt="Line" className="w-12" />
                                <div className='pr-6 '>
                                    <div className="mx-auto text-[1.6rem] leading-8 font-dot leading-1 font-bold">今すぐ</div>
                                    <div className="mx-auto text-[1.6rem] leading-8 font-dot leading-1 font-bold">メンバーになる</div>
                                </div>
                            </div>
                        </Link>

                        <Link
                            target="_blank"
                            href={resources.links.mail}
                            className="mt-2 relative mx-auto flex text-size1 px-8">
                            <Image src={button2} alt="Background" className="h-[60px]" />

                            <div className="absolute inset-0 flex items-center justify-center gap-3 text-center">
                                    <div className="mx-auto text-title5 leading-8 font-dot font-bold">メールでお問い合わせ</div>
                            </div>
                        </Link>

                    </motion.div>
                </div>
            </div>
        </>
    )
}
