'use client'

import { TopSection } from "@/views/top/TopSection";
import AboutSection from "@/views/top/AboutSection";
import { ContactSection } from "@/views/top/ContactSection";
import { FaqSection } from "@/views/top/FaqSection";
import { HowToJoinSection } from "@/views/top/HowToJoinSection";
import { MembersSection } from "@/views/top/about/MembersSection";
import { PlansSection } from "@/views/top/about/PlansSection";

export default function Home() {
    return (
        <>
            <TopSection />

            <div className="bg-[#002500]">
                <AboutSection />
            </div>

            <MembersSection />
            <PlansSection />
            <HowToJoinSection />
            <FaqSection />

            <ContactSection />
        </>
    );
}
