import {Inter, Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});
const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <Header/>
        <main className="container flex min-h-screen flex-col items-center gap-10 py-24 /*lg:p-24*/">
        {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
