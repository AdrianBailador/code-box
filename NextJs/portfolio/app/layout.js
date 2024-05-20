import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/components/theme-provider";
import '../styles/atom-prism.css'


const inter = Inter({subsets: ["latin"]});
const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Home",
  description: "Home Portfolio",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.className} bg-background text-text`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            <main className="container flex min-h-screen flex-col items-center gap-10 py-24 /*lg:p-24*/">
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
