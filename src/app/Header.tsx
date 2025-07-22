import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Link from "next/link";
import { Button, Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { MdClose, MdMenu } from 'react-icons/md';
import { SnsLinkList } from '@/components/SnsLinkList';
import Logo from "@/assets/logo.png";
import Image from 'next-export-optimize-images/picture';
import { DOMMotionComponents, motion } from "motion/react"
import { resources } from '@/resources';
import Line from '@/assets/sns/LINE.svg'

type MenuItem = {
    href: string;
    label: string;
    label2?: string; // サブタイトル
    childlen?: MenuItem[]; // 子要素がある場合
};
export const menuItems: MenuItem[] = [
    { href: "/", label: "TOP" },
    { href: "/mission", label: "ミッション" },
    { href: "/mission#orner", label: "オーナー挨拶" },
    { href: "/#about", label: "中四国クリエイティブ学園でできること" },
    { href: "/#plans", label: "料金プラン" },

    { href: "/#contacts", label: "お問い合わせ" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="flex w-full items-center sticky top-0 mt-0 z-50 bg-black h-[46px]">
                <Link href="/" className='p-2 flex items-center'>
                    <Image src={Logo} alt="Logo" width={200} className='w-[24px] md:w-[32px]' />
                    <span className='text-[1.1rem] tracking-wide sm:text-[2.1rem] text-white ml-2 font-dot'>{resources.siteTitle}</span>
                </Link>

                {/* Desktop */}
                <nav className="flex-1 hidden w-full md:flex gap-6 justify-end py-4 pr-8">

                    <div className='ml-auto' />
                    {menuItems.map((item, index) => {
                        return (
                            <div className="relative group" key={index}>
                                {item.childlen?.length
                                    ? (
                                        <Popover>
                                            {() => (<>
                                                <PopoverButton as={Fragment}>
                                                    {
                                                        () => <motion.button
                                                            initial={{ opacity: 0, scale: 0.1 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                                            onMouseEnter={({ target }) => (target as any)?.click()}
                                                            className="cursor-pointer text-navigation py-2 inline-block relative outline-0">
                                                            {item.label}
                                                        </motion.button>
                                                    }
                                                </PopoverButton>

                                                <PopoverPanel
                                                    transition
                                                    anchor="bottom"
                                                    className="w-80 origin-top-right rounded-xl border border-black/5 backdrop-blur-md bg-red-50/70 p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                                                >
                                                    {item.childlen?.map((child, index) => (
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.1 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                                            key={index}>
                                                            <Link
                                                                href={child.href}
                                                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-5 hover:bg-red-200/20"
                                                            >
                                                                <span>{child.label}</span>
                                                                {child.label2 && (
                                                                    <small className="ml-2">{child.label2}</small>
                                                                )}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </PopoverPanel>
                                            </>)
                                            }
                                        </Popover>
                                    )
                                    :
                                    <motion.div
                                        initial={{ opacity: 0, translateY: "100%", scale: 0.9 }}
                                        animate={{ opacity: 1, translateY: 0, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}>
                                        <Link
                                            href={item.href}
                                            className="text-navigation font-bold py-2 inline-block relative "
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                }
                            </div>
                        )
                    })}

                    <Link
                        href={resources.links.line}
                        target='_blank'
                        className="animate-pulse-scale min-w-32 gap-2 rounded-lg flex font-dot items-center justify-center bg-color2 py-2 px-4 font-semibold focus:outline-none data-[hover]:bg-color2/80">
                        入会はコチラ
                    </Link>
                </nav>

                <Link
                    href={resources.links.line}
                    target='_blank'
                    className="animate-pulse-scale md:hidden font-dot ml-auto min-w-32 mr-3 gap-2 rounded-lg flex items-center justify-center bg-color2 py-1 px-4 font-semibol shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-color2/80">
                    入会はコチラ

                    <Image src={Line} alt="Line" className="w-6" />
                </Link>

                {/* Mobile */}
                {/* <nav className="flex md:hidden gap-6">
                    <button
                        aria-label="Menu"
                        onClick={() => setIsMenuOpen(true)}
                        className="ml-2 mr-4 flex items-center justify-center px-2 w-16 h-12 rounded-full text-color1 hover:bg-color3/10">
                        <MdMenu size={52} />
                    </button>

                    <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav> */}
            </header>
        </>
    );
};

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({ isOpen, setIsOpen, children }: React.PropsWithChildren<Props>) => {
    const close = () => setIsOpen(false);

    return (
        <Dialog transition open={isOpen} as="div"
            className="relative z-50 focus:outline-none transition duration-300 ease-out data-[closed]:opacity-0"
            onClose={close}>
            <div className="fixed inset-0 z-50">
                <DialogPanel className="relative bg-gradient-opacity backdrop-blur-lg w-full h-screen p-4 flex flex-col items-center">
                    <h1 className='py-6 text-title2 font-slight text-color3'></h1>
                    <nav className="flex flex-col gap-6 h-full justify-center items-start">
                        {menuItems.map((item, index) => (
                            <motion.div key={item.href}
                                initial={{ opacity: 0, translateY: "100%", scale: 0.9 }}
                                whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                className="flex flex-col gap-4"
                            >
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    key={index}
                                    href={item.href}
                                    className="text-navigation font-bold hover:text-color3 transition duration-300"
                                >
                                    {item.label}
                                </Link>
                                {
                                    item.childlen?.length && (
                                        item.childlen?.map(
                                            (child, index) => (
                                                <Link
                                                    onClick={() => setIsOpen(false)}
                                                    key={child.href}
                                                    href={child.href}
                                                    className="ml-4 text-navigation hover:text-color3 transition duration-300"
                                                >
                                                    {child.label}
                                                </Link>
                                            )
                                        )
                                    )
                                }
                            </motion.div>
                        ))}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Image className="mb-8" src={Logo} alt="中四国クリエイティブ学園" width={120} height={120} loading="lazy" />
                    </motion.div>

                    <SnsLinkList />

                    <button data-collapse-toggle="navbar-hamburger"
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="absolute top-4 right-4 inline-flex items-center justify-center p-2 w-16 h-12 text-sm rounded-full text-color3 hover:bg-color3/10"
                    >
                        <MdClose size={24} />
                    </button>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
