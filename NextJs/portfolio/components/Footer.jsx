import {socialNetworks} from '../static_content/index';
import SocialIcons from "@/components/SocialIcons";

const Footer = (crosses) => {
    return (

        <footer className={`relative  px-0 py-10 lg:py-16 xl:py-20`}>
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    ©Code Box {new Date().getFullYear()}. All rights reserved
                </p>

                <SocialIcons className="flex gap-5 flex-wrap"/>
            </div>
        </footer>
    );
};

export default Footer;