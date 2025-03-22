"use client";

import ProductFormUpdate from "@/components/common/ProductFormUpdate";
import { motion } from "framer-motion";
import { use } from "react";

export default function DeleteProduct({
    params,
}: {
    params: Promise<{ productId: number }>;
}) {
    const { productId } = use(params);

    return (
        <section className="p-8 flex flex-col items-center">
            <motion.h2
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-center font-bold"
            >
                Edit product
            </motion.h2>
            <motion.p
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="my-8"
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae ducimus magni ipsum tempore nostrum corrupti alias,
                iste debitis voluptas molestiae culpa modi sunt ea delectus
                illum quas animi aspernatur incidunt?
            </motion.p>
            <ProductFormUpdate productId={productId} />
        </section>
    );
}
