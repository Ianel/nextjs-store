"use client";

import { pacifico } from "@/lib/fonts";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SiteHeader() {
    const router = useRouter();

    return (
        <header className="flex flex-row justify-between items-center bg-slate-100 px-8 py-5">
            <Link href={"/"}>
                <h1 className={`${pacifico.className} text-2xl`}>Story</h1>
            </Link>
            <aside>
                <Button
                    className="cursor-pointer"
                    onClick={() => router.push("/product/add")}
                >
                    <Plus size={24} /> Add product
                </Button>
            </aside>
        </header>
    );
}
