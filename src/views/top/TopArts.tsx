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

export const DiscordWidget = () => {
    const { widgetData, isLoading, error } = useDiscordWidget();

    const onlineCount = widgetData?.online || 0;
    const totalMembers = widgetData?.total || 0;

    const [date] = useState(() => new Date())
    return (
        <FadeAndSlideScrollTriggerAnimation
            className=' text-center p-4 z-10 font-dot'
        >
            <p className='mt-2 text-title5'>{date.getFullYear()}年{date.getMonth() + 1}月時点のメンバー数 </p>
            <div className='gap-4'>
                <div className='flex items-center gap-2 mt-1 text-title5'>
                    <span className="relative flex size-5 mt-2">
                        <span className="absolute inline-flex h-full w-full animate-ping bg-yellow-500 opacity-60"></span>
                        <span className="relative inline-flex size-4 m-auto bg-yellow-500"></span>
                    </span>
                    <span className='ml-2 sm:ml-4 flex items-center'>
                        <big> {isLoading ? '...' : onlineCount}</big>
                        <span>人がオンライン</span>
                    </span>
                </div>

                <div className='flex items-center gap-2 mt-1 text-title5'>
                    <span className="relative flex size-5 mt-2">
                        <span className="relative flex size-4 m-auto bg-gray-300"></span>
                    </span>
                    <span className='ml-2 sm:ml-4 flex items-center leading-1'>
                        <big> {totalMembers}</big>
                        <span>人がメンバー</span>
                    </span>
                </div>
            </div>
        </FadeAndSlideScrollTriggerAnimation>
    );
}