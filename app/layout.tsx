import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import localFont from '@next/font/local';
import "./globals.css";


const SixtyFour = localFont({
    src: [
        {
            path: 'fonts/Sixtyfour-Regular.ttf',
            weight: '400'
        }
    ],
    variable: '--font-sixtyfour'
});

const inter = Inter({ subsets: ["latin"] });
const robotoMono= Roboto_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={SixtyFour.className}>{children}</body>
        </html>
    );
}
