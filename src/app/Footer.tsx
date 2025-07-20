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
        <footer className="bg-[#b17262] w-full p-4 font-dot">
            <div className="max-w-6xl mx-auto px-4  w-full ">
                <ul className="flex gap-２">
                    {footerItems.map((item, index) => (
                        <motion.li initial={{ opacity: 0, translateY: "100%", scale: 0.9 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            key={item.label}>
                            <Link href={item.href} className="ml-3 flex text-size3 text-black fill-black items-center">
                                <svg width="8" height="8" viewBox="0 0 8 10" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5L0 10L0 0L8 5Z"  />
                                </svg>
                                {item.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* コピーライト */}
                <div className="w-full pt-2">
                    <p className="text-center">
                        © {new Date().getFullYear()} 中四国クリエイティブ学園. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
