import Image from "next/image";
import {Button} from "@/components/ui/button";
import ProfileInfo from "@/components/ProfileInfo";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <main className="mt-[2rem]">
        <ProfileInfo/>
    </main>
  );
}
