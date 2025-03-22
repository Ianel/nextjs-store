import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function SiteHeader() {
    return (
        <header className="flex flex-row justify-between items-center bg-slate-100 py-3 px-8">
            <h1>Story</h1>
            <aside>
                <Button>
                    <Plus size={24} /> Add product
                </Button>
            </aside>
        </header>
    );
}
