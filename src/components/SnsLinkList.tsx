import Line from '@/assets/sns/LINE.svg'
import Discord from '@/assets/sns/discord-square.svg'
import X from '@/assets/sns/X.svg'
import Image from 'next-export-optimize-images/picture';
import { DOMMotionComponents, motion, useInView } from "motion/react"
import { resources } from '@/resources';
import Instagram from '@/assets/sns/Instagram.svg'

export const SnsLinkList = ({ disableMessage }: { disableMessage?: boolean }) => {
    return (
        <div className="flex gap-2 md:gap-4 flex-wrap justify-center p-6">
            <motion.a
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                href={resources.links.personalInstagram}
                target="_blank"
                className="text-gray-400 hover:text-gray-600 transition-colors"
            >
                <Image src={Instagram} alt="Instagram" className="w-12" />
            </motion.a>
          
        </div>
    )
}