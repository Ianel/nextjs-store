"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    title: z.string({
        required_error: "Title is required.",
    }),
    price: z.number({
        required_error: "Price is required.",
    }),
    description: z.string({
        required_error: "Description is required.",
    }),
    category: z.string({
        required_error: "Category is required.",
    }),
    image: z.string({
        required_error: "Image URL is required.",
    }),
});

export default function ProductFormUpdate({
    productId,
}: {
    productId: number;
}) {
    const router = useRouter();

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

    const mutation = useMutation({
        mutationFn: (product) => {
            return fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
        },
        onError() {
            toast("Failed to update product", {
                position: "top-center",
                dismissible: true,
                style: {
                    backgroundColor: "##DC3E42",
                    color: "white",
                },
            });
        },
        onSuccess() {
            toast("Product updated successfully", {
                position: "top-center",
                dismissible: true,
                style: {
                    backgroundColor: "#2B9A66",
                    color: "white",
                },
            });
        },
    });

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const updatedProduct = {
            id: productId,
            ...values,
            price: parseFloat(values.price),
        };

        console.log({ updatedProduct });
        mutation.mutate(updatedProduct);

        router.push("/");
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <section className="space-y-8 gap-x-4 grid grid-cols-1 md:grid-cols-2 items-baseline max-w-[800px]">
                    <FormField
                        defaultValue={product && product.title}
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        defaultValue={product && product.price}
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="price"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        defaultValue={product && product.category}
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Input placeholder="category" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        defaultValue={product && product.image}
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="image" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </section>
                <FormField
                    defaultValue={product && product.description}
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="mt-8 md:mt-0 max-w-[800px]">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="description"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {mutation.isPending ? (
                    <Button disabled type="submit" className={`mt-8 w-full`}>
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    </Button>
                ) : (
                    <Button type="submit" className={`mt-8 w-full`}>
                        Submit
                    </Button>
                )}
            </form>
        </Form>
    );
}
