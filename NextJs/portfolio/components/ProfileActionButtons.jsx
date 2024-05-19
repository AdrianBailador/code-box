'use client'
import {Button} from "@/components/ui/button";
import {RiLinkedinFill, RiMailFill, RiMailLine} from "@remixicon/react";

const ProfileActionButtons = () => {
    return (
        <div className="profile-action-buttons w-full flex gap-2">

            <Button
                className="w-full bg-primary hover:bg-secondaryMain text-white font-bold py-2 px-4 rounded-xl"
                onClick={() => window.open('/resume.pdf', '_blank')}
            >
                Download My CV
            </Button>
            <a
                className="bg-tabs hover:bg-slate-200 text-green-600 font-bold py-2 px-4 rounded-xl"
                href={'mailto: name@email.com'}>
                <RiMailLine size={24}/>
            </a>
            <a
                className="bg-tabs hover:bg-slate-200 text-green-600 font-bold py-2 px-4 rounded-xl"
                href={'https://linkedin.com'}
                target={'_blank'}>
                <RiLinkedinFill size={24}/>
            </a>
        </div>
    );
};

export default ProfileActionButtons;