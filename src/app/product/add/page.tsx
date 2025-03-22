import ProductForm from "@/components/common/ProductForm";

export default function AddProduct() {
    return (
        <section className="p-8 flex flex-col items-center">
            <h2 className="text-center font-bold">Add new product</h2>
            <p className="my-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae ducimus magni ipsum tempore nostrum corrupti alias,
                iste debitis voluptas molestiae culpa modi sunt ea delectus
                illum quas animi aspernatur incidunt?
            </p>
            <ProductForm />
        </section>
    );
}
