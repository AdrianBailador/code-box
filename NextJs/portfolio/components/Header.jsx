'use client';

import {navigation} from "@/static_content";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {usePathname} from "next/navigation";
import Image from "next/image";
import MenuSvg from "@/assets/MenuSvg";
import {IoSunny} from "react-icons/io5";

const Header = () => {
    const pathname = usePathname();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        } else {
            setOpenNavigation(true);
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        setOpenNavigation(false);
    };


    return (
        <header
            className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-white/90 lg:backdrop-blur-sm ${
                openNavigation ? "bg-white/80" : "bg-white/90 backdrop-blur-sm"
            }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[60px] xl:mr-8" href="/">
                    <Image src={'/LogoTemp.png'} width={60} height={40} alt="Brainwave"/>
                </a>

                <nav
                    className={`${openNavigation ? "flex" : "hidden"} 
                    fixed top-[5rem] left-0 right-0 bottom-0 bg-white/90 backdrop-blur-sm lg:static lg:flex lg:mx-auto lg:bg-transparent`
                }
                >
                    <div className="w-full relative z-2 flex flex-col items-center justify-start lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                    item.onlyMobile ? "lg:hidden" : ""
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.hash
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                <Button className="hidden lg:flex rounded-full bg-green-600 p-6">
                    <IoSunny size={24}/>
                </Button>
                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </header>
    );
};

export default Header;