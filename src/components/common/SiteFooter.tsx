"use client";

import { pacifico } from "@/lib/fonts";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="flex flex-col justify-center items-center bg-slate-100 p-4">
            <Link href={"/"}>
                <h1 className={`${pacifico.className} text-2xl`}>Story</h1>
            </Link>
            <aside>
                <p>
                    &copy; {new Date(Date.now()).getFullYear()} Copyright | Made
                    by{" "}
                    <span className={pacifico.className}>Ianel Tombozafy</span>
                </p>
            </aside>
        </footer>
    );
}
