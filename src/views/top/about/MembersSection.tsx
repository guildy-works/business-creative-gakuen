import { SectionBox } from "@/components/SectionBox"
import { MembersSection2 } from "./MembersSection.member2";
import { Campaign } from "../Campain";
import { motion } from "motion/react";

export const MembersSection = () => {
    return <SectionBox disablePx disableMaxWidth>
        <div className="w-full flex flex-col items-center mx-auto gap-4 justify-center">
            <MembersSection2 />
        </div>

    </SectionBox>
}
