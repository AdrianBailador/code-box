import React from 'react';
import Image from "next/image";
import logo from "../public/images/simple-logomark-light.svg";

const Logo = () => {
    return (
        <Image src={logo}
               fill
               priority={true}
         alt={"logo"}
        />
    );
};

export default Logo;