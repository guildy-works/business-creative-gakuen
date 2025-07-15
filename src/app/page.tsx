'use client'

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import AboutSection from "@/views/top/AboutSection";
import { ContactSection } from "@/views/top/ContactSection";
import { FaqSection } from "@/views/top/FaqSection";
import { HowToJoinSection } from "@/views/top/HowToJoinSection";

export default function Home() {
    return (
        <>
            <TopSection />

            <AboutSection />

            <HowToJoinSection />
            <FaqSection />

            <ContactSection />

            <ScrollIndicator />

        </>
    );
}
