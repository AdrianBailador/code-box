import Image from "next/image";
import {Button} from "@/components/ui/button";
import ProfileInfo from "@/components/ProfileInfo";
import SocialIcons from "@/components/SocialIcons";
import ProfileActionButtons from "@/components/ProfileActionButtons";

export default function Home() {
    return (
        <main className="mt-[2rem] flex flex-col gap-4 justify-start items-center">
            <ProfileInfo/>
            <ProfileActionButtons/>
        </main>
    );
}
