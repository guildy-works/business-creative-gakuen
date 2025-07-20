import Part1 from '../../assets/01.png'
import Part2 from '../../assets/02.png'
import Part3 from '../../assets/03.png'
import Part4 from '../../assets/04.png'

import { motion } from 'motion/react';
import Image from 'next-export-optimize-images/picture';
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation'

export const MissionTopArt = () => {
    return (
        <div className='-mt-2  absolute flex flex-col justify-center items-center overflow-hidden rotate w-full h-[90svh]'>

            <motion.div
                transition={{ duration: 1, delay: 0.1 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part1} alt="ミッション画像1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ mass: 0.4, duration: 1, delay: 0.2 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part2} alt="ミッション画像2" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 0.3 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part3} alt="ミッション画像3" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 0.1 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part4} alt="ミッション画像4" className="size-full object-cover" />
            </motion.div>
        </div>

    )
}
