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
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { RefreshCcw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("all");

    const {
        isPending,
        error,
        data: products,
    } = useQuery({
        queryKey: ["allProducts"],
        queryFn: () =>
            fetch("https://fakestoreapi.com/products", {
                cache: "force-cache",
            }).then((response) => response.json()),
    });

    const [filteredProducts, setFilteredProducts] = useState(products);

    const productCategories =
        products && new Set(products.map((p) => p.category)).values();

    const handleFilteredProducts = useCallback(
        (title, category) => {
            const tempProducts =
                products &&
                products.filter((p) => {
                    if (category == "all") {
                        return p.title
                            .toLowerCase()
                            .includes(title.toLowerCase());
                    }

                    return (
                        p.title.toLowerCase().includes(title.toLowerCase()) &&
                        p.category === category
                    );
                });

            setFilteredProducts(tempProducts);

            console.log({ tempProducts });
        },
        [products]
    );

    const resetFilters = () => {
        setProductName("");
        setProductCategory("all");
    };

    useEffect(() => {
        handleFilteredProducts(productName, productCategory);
    }, [productCategory, handleFilteredProducts, productName]);

    if (isPending) {
        return (
            <section className="p-8">
                <Skeleton className="w-64 h-8 mb-4" />
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <Skeleton className="w-full h-8" />
                    <Skeleton className="w-full h-8" />
                    <Skeleton className="w-full h-8" />
                </section>
                <section className="mt-8 flex flex-row flex-wrap justify-between items-stretch gap-4">
                    {Array.from({ length: 10 }).map((n, index) => (
                        <div
                            key={index}
                            className="gap-4 flex flex-col w-full md:w-72"
                        >
                            <Skeleton className="w-full md:w-72 h-[240px] rounded-xl" />
                            <Skeleton className="w-full md:w-56 h-8" />
                            <Skeleton className="w-32 h-8" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Skeleton className="rounded-lg w-full h-8" />
                                <Skeleton className="rounded-lg w-full h-8" />
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        );
    }

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="p-8">
            <section>
                <h2 className="font-bold mb-4">Filters</h2>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="flex flex-col gap-1">
                        <Label>Product Name: </Label>
                        <Input
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                            placeholder="Enter the name of a product"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label>Product Category: </Label>
                        <Select
                            value={productCategory}
                            onValueChange={(value) => {
                                setProductCategory(value);
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">all</SelectItem>
                                {productCategories &&
                                    Array.from(productCategories).map(
                                        (category: any, index) => (
                                            <SelectItem
                                                key={index}
                                                value={category}
                                            >
                                                {category}
                                            </SelectItem>
                                        )
                                    )}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        className="cursor-pointer"
                        variant={"default"}
                        onClick={resetFilters}
                    >
                        <RefreshCcw size={24} /> Reset filters
                    </Button>
                </section>
            </section>
            <section className="mt-8 flex flex-row flex-wrap justify-between items-stretch gap-4">
                {filteredProducts &&
                    filteredProducts.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
            </section>
        </div>
    );
}
