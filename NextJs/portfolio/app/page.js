import ProfileInfo from "@/components/ProfileInfo";
import ProfileActionButtons from "@/components/ProfileActionButtons";
import TabsButtons from "@/components/TabsButtons";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container flex min-h-screen flex-col items-center gap-10 py-24 /*lg:p-24*/">
            <ProfileInfo/>
            <ProfileActionButtons/>
            <TabsButtons/>
            <Link className="text-card flex items-center gap-2  rounded-lg bg-primaryMain px-4 py-2" href={"/"}>
                View All Projects
            </Link>
        </main>
    );
}
