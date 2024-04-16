import {Roboto} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";


const roboto = Roboto(
    {
        weight: '400',
        subsets: ["latin"]
    }
);

export const metadata = {
    title: "Basics of Next.js",
    description: "This is a basic web site created using Next 14",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <NavBar/>
        {children}
        </body>
        </html>);
}
