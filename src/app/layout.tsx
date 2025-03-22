import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/common/SiteHeader";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "Story",
    description: "A simple app for handling products",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <SiteHeader />
                <main>{children}</main>
            </body>
        </html>
    );
}
