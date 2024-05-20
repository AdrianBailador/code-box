'use client';
import { navigation } from "@/static_content";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MenuSvg from "@/components/MenuSvg";
import LogoTemp from "../public/Logotemp.png";
import { useTheme } from "next-themes";
import { RiSunFill, RiMoonFill } from "@remixicon/react";
import Link from "next/link";

const Header = () => {
    const { theme, setTheme } = useTheme()

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
            className={`fixed h-[64px] top-0 left-0 w-full z-50 bg-navbar ${openNavigation ? "bg-navbar/80" : "bg-navbar backdrop-blur-sm"
                }`}
        >
            <div className="flex justify-between items-center  h-full px-5 lg:px-7.5 xl:px-10">
                <a className="relative block w-[60px] h-[40px] xl:mr-8" href="/public">
                    <Image src={LogoTemp} alt="Logo Tipo" />
                </a>
                <nav
                    className={`${openNavigation ? "flex" : "hidden"} 
                    fixed top-[4rem] left-0 right-0 bottom-0 bg-white/90 backdrop-blur-sm lg:static lg:flex lg:mx-auto lg:bg-transparent`
                    }
                >
                    <div className="w-full relative z-2 flex flex-col items-center justify-start lg:flex-row">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-6 lg:py-2 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>
                <button
                    onClick={() => {
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }}
                    className="hidden lg:flex rounded-full bg-primary p-2">
                    {theme === 'light' ? <RiSunFill size="24px" color="white" /> : <RiMoonFill size="24px" color="white" />}
                </button>
                <button
                    className="ml-auto lg:hidden"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </button>
            </div>
        </header>
    );
};

export default Header;