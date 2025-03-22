"use client";

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
import { useQuery } from "@tanstack/react-query";
import { RefreshCcw } from "lucide-react";

export default function Home() {
    const {
        isPending,
        error,
        data: products,
    } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://fakestoreapi.com/products").then((response) =>
                response.json()
            ),
    });

    console.log(products);

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

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
                {products &&
                    products.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
            </section>
        </div>
    );
}
