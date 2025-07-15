import Link from "next/link";
import { menuItems } from "./Header";
import { SnsLinkList } from "@/components/SnsLinkList";
import Logo from "@/assets/logo.png";
import Image from 'next-export-optimize-images/picture';
import { DOMMotionComponents, motion } from "motion/react"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";

export const footerItems = [
    { href: "/legal-notice", label: "特定商取引法に基づく表記" },
    { href: "/terms-of-service", label: "利用規約/免責事項" },
    { href: "/privacy-policy", label: "プライバシーポリシー" },
];

export const Footer = () => {
    return (
        <footer className="bg-color0 text-white pt-16 pb-8 w-full">
            <motion.div
                viewport={{ once: true }}
                className="mx-auto w-fit"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Image className="" src={Logo} alt="つながるラボ" width={160} height={160} />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4  w-full mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4 flex flex-col items-center">
                        <SnsLinkList />
                    </div>

                    {/* サイトマップ */}
                    <div className="flex flex-col items-center">
                        <SkewScrollTriggerAnimation tag="h3"
                            skewPanelClass="!bg-color0"
                            className="text-title3 mb-6">
                            サイトマップ
                        </SkewScrollTriggerAnimation>
                        <ul className="grid  gap-4">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, translateY: "100%", scale: 0.9 }}
                                    whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                    key={item.label}>
                                    <Link href={item.href} className="text-white hover:text-gray-300 transition-colors">
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-color0"
                            className="text-title3 mb-6">免責事項</SkewScrollTriggerAnimation>
                        <ul className="grid  gap-4">
                            {footerItems.map((item, index) => (
                                <motion.li initial={{ opacity: 0, translateY: "100%", scale: 0.9 }}
                                    viewport={{ once: true }}
                                    whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                    key={item.label}>
                                    <Link href={item.href} className="text-white hover:text-gray-300 transition-colors">
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="w-full border-t border-gray-300 mt-12 pt-8">
                    <p className="text-center text-white">
                        © {new Date().getFullYear()} つながるラボ. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
