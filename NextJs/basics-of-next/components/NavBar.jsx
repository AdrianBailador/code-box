import Link from "next/link";
import Logo from "@/components/Logo";

const NavBar = () => {
    return (
        <nav className={'nav'}>
            <div className={'brand-logo'}>
                <Logo/>
            </div>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/services'}>Services</Link>
                </li>
                <li>
                    <Link href={'/products'} alt={'products link'}>Products</Link>
                </li>
            </ul>
        </nav>
    );
};


export default NavBar;