import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RefreshCcw } from "lucide-react";

export default function Home() {
    return (
        <div className="p-8">
            <section>
                <h2 className="font-bold mb-4">Filters</h2>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="flex flex-col gap-1">
                        <Label>Product Name: </Label>
                        <Input placeholder="Enter the name of a product" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label>Product Category: </Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant={"default"}>
                        <RefreshCcw size={24} /> Reset filters
                    </Button>
                </section>
            </section>
            <section className="mt-8 flex flex-row flex-wrap justify-between items-stretch gap-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </section>
        </div>
    );
}
