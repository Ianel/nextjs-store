"use client";

import { motion } from "framer-motion";
import ProductForm from "@/components/common/ProductForm";

export default function AddProduct() {
    return (
        <section className="p-8 flex flex-col items-center">
            <motion.h2
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="text-center font-bold"
            >
                Add new product
            </motion.h2>
            <motion.p
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="my-8"
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae ducimus magni ipsum tempore nostrum corrupti alias,
                iste debitis voluptas molestiae culpa modi sunt ea delectus
                illum quas animi aspernatur incidunt?
            </motion.p>
            <ProductForm />
        </section>
    );
}
