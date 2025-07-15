import { DiscordSection } from "./about/DiscordSection";
import { IntroduceSection } from "./about/IntroduceSection";
import { MembersSection } from "./about/MembersSection";
import { OnayamiSection } from "./about/OnayamiSection";
import { PlansSection } from "./about/PlansSection";
import { ProfileSection } from "./about/ProfileSection";

export default function AboutSection() {
    return (
        <section className="w-full relative flex flex-col gap-0">

            <ProfileSection />
            <OnayamiSection />

            <IntroduceSection />
            <DiscordSection />
            <MembersSection />

            <PlansSection />
        </section>
    );
}

