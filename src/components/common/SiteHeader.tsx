"use client";

import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SiteHeader() {
    const router = useRouter();

    return (
        <header className="flex flex-row justify-between items-center bg-slate-100 py-3 px-8">
            <Link href={"/"}>
                <h1>Story</h1>
            </Link>
            <aside>
                <Button onClick={() => router.push("/product/add")}>
                    <Plus size={24} /> Add product
                </Button>
            </aside>
        </header>
    );
}
