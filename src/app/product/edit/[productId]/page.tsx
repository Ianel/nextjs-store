"use client";

import ProductFormUpdate from "@/components/common/ProductFormUpdate";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";

export default function DeleteProduct({
    params,
}: {
    params: Promise<{ productId: number }>;
}) {
    const { productId } = use(params);

    const {
        isPending,
        error,
        data: product,
    } = useQuery({
        queryKey: ["singleProduct"],
        queryFn: () =>
            fetch(`https://fakestoreapi.com/products/${productId}`).then(
                (response) => response.json()
            ),
    });

    // console.log(product);

    return (
        <section className="p-8 flex flex-col items-center">
            <h2 className="text-center font-bold">Edit product</h2>
            <p className="my-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae ducimus magni ipsum tempore nostrum corrupti alias,
                iste debitis voluptas molestiae culpa modi sunt ea delectus
                illum quas animi aspernatur incidunt?
            </p>
            <ProductFormUpdate productId={productId} productData={product} />
        </section>
    );
}
