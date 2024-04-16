import Link from "next/link";

export const metadata = {
    title: "Products - Basics of Next.js",
    description: "Learn more about our products",
};

const LayoutProducts = ({children}) => {
    return (
        <>
            {children}
            <nav>
                <ul>
                    <li>
                        <Link href={'/products/computers'}>Computers</Link>
                        <Link href={'/products/phones'}>Phones</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default LayoutProducts;