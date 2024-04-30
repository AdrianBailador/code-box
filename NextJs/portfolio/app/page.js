import ProfileInfo from "@/components/ProfileInfo";
import ProfileActionButtons from "@/components/ProfileActionButtons";

export default function Home() {
    return (
        <main className="mt-[2rem] flex flex-col gap-4 justify-start items-center">
            <ProfileInfo/>
            <ProfileActionButtons/>
        </main>
    );
}
