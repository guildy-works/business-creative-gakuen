import Part1 from '../../assets/top-parts/img1.svg'
import Part2 from '../../assets/top-parts/img2.svg'
import Part3 from '../../assets/top-parts/img3.svg'
import Part4 from '../../assets/top-parts/img4.svg'
import Part5 from '../../assets/top-parts/img5.svg'
import Part6 from '../../assets/top-parts/img6.svg'
import Part7 from '../../assets/top-parts/img7.svg'
import Part8 from '../../assets/top-parts/img8.svg'
import Part9 from '../../assets/top-parts/img9.svg'
import Grassland2 from '../../assets/grassland2.png'
import Logo from "@/assets/logo.png";
import { motion } from 'motion/react';
import Image from 'next-export-optimize-images/picture';
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation'
import { SectionType1 } from '@/components/SectionType1'
import { Button2 } from '@/components/Button2'
import { resources } from '@/resources'
import { Campaign } from './Campain'
import css from "@/components/Balloon.module.scss"
import { use, useEffect, useState } from 'react'

// Discord widget type definition
type DiscordWidgetData = {
    online: number;
    total: number;
}

// Custom hook to fetch Discord widget data
const useDiscordWidget = () => {
    const [widgetData, setWidgetData] = useState<DiscordWidgetData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchWidgetData = async () => {
            try {
                const response = await fetch('https://tunagaru-lab-discord-bbddhxfwfcbdefam.japaneast-01.azurewebsites.net/stats');
                if (!response.ok) {
                    throw new Error('Failed to fetch Discord stats data');
                }
                const data = await response.json();
                setWidgetData(data);
            }
            catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error'));
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchWidgetData();
    }, []);

    return { widgetData, isLoading, error };
};

export const TopArt = () => {
    return (
        <>
            <Desktop />
            <Mobile />
        </>

    )
}

const Desktop = () => <div className="hidden sm:flex flex-col gap-0">
    <div className='-mt-2 min-h-[75svh] relative flex flex-col justify-center items-center overflow-hidden'>
        <motion.div
            transition={{ type: "spring", mass: 0.4, duration: 1, delay: 0.25 }}
            initial={{ translateX: "-100%", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part1} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ type: "spring", mass: 0.4, duration: 1, }}
            initial={{ translateY: "100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part2} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ duration: 1, delay: 0.2 }}
            initial={{ translateY: "100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part3} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ duration: 1, delay: 0.1 }}
            initial={{ translateY: "100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part4} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ duration: 1, delay: 0.1 }}
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part5} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ mass: 0.4, duration: 1, }}
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part6} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ duration: 1, delay: 0.3 }}
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part7} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ duration: 1, delay: 0.25 }}
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part8} alt="art1" className="size-full object-cover" />
        </motion.div>

        <motion.div
            transition={{ type: "spring", mass: 0.4, duration: 1, delay: 0.2 }}
            initial={{ translateX: "100%", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
            <Image src={Part9} alt="art1" className="size-full object-cover" />
        </motion.div>


        <div className='mt-32 flex flex-wrap gap-4 justify-center'>
            <div className=' z-10'>
                <motion.div transition={{ type: "spring", damping: 5, mass: 0.4, }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}>
                    <Image src={Logo} alt="Logo" className="w-64 md:w-72 lg:w-96 object-cover" />
                </motion.div>
            </div>
            <div className='flex flex-col justify-center items-center px-8 gap-8'>
                <SkewScrollTriggerAnimation tag="h1" className='font-maru text-titleLarge text-center leading-[4.2rem]' >
                    つながる、広がる、中四国
                </SkewScrollTriggerAnimation>

                <SkewScrollTriggerAnimation tag="h2" className='font-maru text-title2 text-center' >
                    中四国限定<br />
                    ビジネスコミュニティ
                </SkewScrollTriggerAnimation>
            </div>
        </div>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1530 113"
            className='mb-40 mt-12 w-full stroke-[6px] md:!stroke-2'>
            <motion.path
                transition={{ duration: 0.8, }}
                initial={{ strokeDasharray: 1930, strokeDashoffset: 1930 }}
                animate={{ strokeDasharray: 1930, strokeDashoffset: 0 }}
                className=' stroke-orange-600 z-50 '
                fill="transparent"
                d="M.5,43.3c61.63,15.81,124.1,28.89,187.14,38.08,125.96,18.3,253.78,18.9,380.78,24.91,78.79,2.62,157.78,2.05,236.45-3.06,24.47-1.84,49.47-3.94,71.61-14.82,21.65-10.73,36.65-33.26,28.34-56.26-7.59-23.36-38.23-38.33-60.43-25.38-16.44,9.17-18.9,30.59-10.31,46.72,26.76,49.04,114.62,57.02,172.81,58.12,62.61.52,119.56-13.77,179.27-28.72C1451.86,8.51,1668.46,1.2,1929.5,102.3" />
        </svg>


        <div className='absolute bottom-20 left-0 right-0 mx-auto w-full flex justify-center items-center'>
            <DiscordWidget />
        </div>
    </div>

    <div
        className="bg-gradient1 w-full flex flex-col justify-center items-center gap-4">

    </div>
</div >


const Mobile = () => <div className='sm:hidden '>
    <div
        className='relative flex flex-col justify-center items-center overflow-hidden rotate'>
        <Image src={Grassland2} alt="Grassland" className='absolute top-0 left-0 w-full h-full object-cover' />

        <div className='py-7 flex flex-wrap gap-4 justify-center'>
            <div className='flex flex-col justify-center items-center px-8 gap-4'>
                <SkewScrollTriggerAnimation tag="h1" className='text-title1 tracking-tight font-nico text-center leading-[2.4rem]' >
                    {resources.top.topTitle}
                </SkewScrollTriggerAnimation>
                <DiscordWidget />
            </div>
        <Campaign />
        </div>
    </div>
</div>


const DiscordWidget = () => {
    const { widgetData, isLoading, error } = useDiscordWidget();

    const onlineCount = widgetData?.online || 0;
    const totalMembers = widgetData?.total || 0;

    const [date] = useState(() => new Date())
    return (
        <motion.div
            transition={{ type: "spring", damping: 5, mass: 0.4, }}
            className=' text-center p-4 md:p-6 md:px-8 rounded-3xl mt-8 z-10'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <p className='mt-2 text-title4'>{date.getFullYear()}年{date.getMonth() + 1}月時点のメンバー数 </p>
            <div className='gap-4'>
                <div className='flex items-center gap-2 mt-1 text-title4'>
                    <span className="relative flex size-5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50"></span>
                        <span className="relative inline-flex size-5 rounded-full bg-green-500 animate-pulse"></span>
                    </span>
                    <span className='ml-2 sm:ml-4 flex items-baseline'>
                        <big> {isLoading ? '...' : onlineCount}</big>
                        <span>人がオンライン</span>
                    </span>
                </div>

                <div className='flex items-center gap-2 mt-1 text-title4'>
                    <span className="relative flex size-5">
                        <span className="relative inline-flex size-5 rounded-full bg-gray-300"></span>
                    </span>
                    <span className='ml-2 sm:ml-4 items-baseline'>
                        <big> {totalMembers}</big>
                        <span>人がメンバー</span>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}