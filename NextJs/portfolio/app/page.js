import ProfileInfo from "@/components/ProfileInfo";
import ProfileActionButtons from "@/components/ProfileActionButtons";
import TabsButtons from "@/components/TabsButtons";

export default function Home() {
    return (
        <main className="container flex min-h-screen flex-col items-center gap-10 py-24 /*lg:p-24*/">
            <ProfileInfo/>
            <ProfileActionButtons/>
            <TabsButtons/>
        </main>
    );
}
