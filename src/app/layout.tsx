import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/common/SiteHeader";
import { poppins } from "@/lib/fonts";
import { Provider } from "@/components/common/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import SiteFooter from "@/components/common/SiteFooter";

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
                    <div className="min-h-screen flex flex-col grow justify-between">
                        <SiteHeader />
                        <main>{children}</main>
                        <SiteFooter />
                    </div>
                </Provider>
                <Toaster />
            </body>
        </html>
    );
}
