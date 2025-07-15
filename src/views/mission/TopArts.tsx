import Part5 from '../../assets/top-parts/img5.svg'
import Part6 from '../../assets/top-parts/img6.svg'
import Part7 from '../../assets/top-parts/img7.svg'
import Part8 from '../../assets/top-parts/img8.svg'

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
                <Image src={Part5} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ mass: 0.4, duration: 1, delay: 0.2 }}
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
                transition={{ duration: 1, delay: 0.1 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part8} alt="art1" className="size-full object-cover" />
            </motion.div>
        </div>

    )
}
