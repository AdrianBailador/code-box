import ProfileInfo from "@/components/ProfileInfo";
import ProfileActionButtons from "@/components/ProfileActionButtons";
import TabsButtons from "@/components/TabsButtons";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

export default function Home() {
    return (
        <main className="h-screen flex flex-col gap-4 justify-start items-center">
            <div className="container lg:container mx-auto px-4">
                <Section>
                    <ProfileInfo/>
                </Section>
                <Section>
                    <ProfileActionButtons/>
                </Section>
                <Section>
                    <TabsButtons/>
                </Section>


            </div>
        </main>
    );
}
