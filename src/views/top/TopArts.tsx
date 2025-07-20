import Grassland2 from '../../assets/grassland2.png'
import Logo2 from "@/assets/logo2.png";
import { motion } from 'motion/react';
import Image from 'next-export-optimize-images/picture';
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation'
import { SectionType1 } from '@/components/SectionType1'
import { resources } from '@/resources'
import { Campaign } from './Campain'
import css from "@/components/Balloon.module.scss"
import { use, useEffect, useState } from 'react'
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation'

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
            <Mobile />
        </>

    )
}

const Desktop = () => <div className="hidden sm:flex flex-col gap-0">

</div >


const Mobile = () => <div >
    <div
        className='relative flex flex-col justify-center items-center overflow-hidden'>
        <Image src={Grassland2} alt="Grassland" className='absolute top-0 left-0 w-full h-full object-cover' />

        <div className='py-7 flex flex-wrap gap-4 justify-center z-10'>
            <div className='flex flex-col justify-center items-center px-8 py-6 gap-4'>
                <FadeAndSlideScrollTriggerAnimation className='text-[3rem] tracking-tight font-nikokaku text-center leading-[2.4rem]' >
                    {resources.top.topTitle}
                </FadeAndSlideScrollTriggerAnimation>

                <div className='flex'>
                    <div>
                        <Image src={Logo2} alt="Logo2" className="w-32 h-32 object-cover" />
                    </div>
                    <DiscordWidget />
                </div>

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
            className=' text-center p-4 z-10 font-dot'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <p className='mt-2 text-title4'>{date.getFullYear()}年{date.getMonth() + 1}月時点のメンバー数 </p>
            <div className='gap-4'>
                <div className='flex items-center gap-2 mt-1 text-title4'>
                    <span className="relative flex size-5">
                        <span className="absolute inline-flex h-full w-full animate-ping bg-yellow-400 opacity-50"></span>
                        <span className="relative inline-flex size-5 bg-yellow-500 animate-pulse"></span>
                    </span>
                    <span className='ml-2 sm:ml-4 flex items-baseline'>
                        <big> {isLoading ? '...' : onlineCount}</big>
                        <span>人がオンライン</span>
                    </span>
                </div>

                <div className='flex items-center gap-2 mt-1 text-title4'>
                    <span className="relative flex size-5">
                        <span className="relative inline-flex size-5 bg-gray-300"></span>
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