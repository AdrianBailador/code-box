'use client'

import {SlSocialLinkedin} from "react-icons/sl";
import {MdMailOutline} from "react-icons/md";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const ProfileActionButtons = () => {
    return (
        <div className="profile-action-buttons flex gap-2">

            <Button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={() => window.open('/resume.pdf', '_blank')}
            >
                Download My CV
            </Button>
            <a
                className="bg-slate-100 hover:bg-slate-200 text-green-600 font-bold py-2 px-4 rounded-md"
                href={'mailto: name@email.com'}>
                <MdMailOutline size={24}/>
            </a>
            <a
                className="bg-slate-100 hover:bg-slate-200 text-green-600 font-bold py-2 px-4 rounded-md"
                href={'https://linkedin.com'}
                target={'_blank'}>
                <SlSocialLinkedin size={24}/>
            </a>
        </div>
    );
};

export default ProfileActionButtons;