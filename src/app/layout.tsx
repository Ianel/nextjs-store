import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/common/SiteHeader";
import { poppins } from "@/lib/fonts";
import { Provider } from "@/components/common/QueryProvider";
import { Toaster } from "@/components/ui/sonner";

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
                <Provider>
                    <SiteHeader />
                    <main>{children}</main>
                </Provider>
                <Toaster />
            </body>
        </html>
    );
}
