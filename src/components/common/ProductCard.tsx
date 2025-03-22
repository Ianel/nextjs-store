import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function ProductCard({ product }) {
    const mutation = useMutation({
        mutationFn: (productId) => {
            return fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: "DELETE",
            });
        },
        onError() {
            toast("Failed to delete product", {
                position: "top-center",
                dismissible: true,
                style: {
                    backgroundColor: "##DC3E42",
                    color: "white",
                },
            });
        },
        onSuccess() {
            toast("Product deleted successfully", {
                position: "top-center",
                dismissible: true,
                style: {
                    backgroundColor: "#2B9A66",
                    color: "white",
                },
            });
        },
    });

    return (
        <Card className="md:w-72 p-0 relative flex flex-col justify-between">
            <Dialog>
                <DialogTrigger asChild>
                    <Image
                        width={400}
                        height={200}
                        src={product.image}
                        alt="Dummy image"
                        className="rounded-t-xl cursor-pointer object-contain w-96 md:w-72 h-72"
                    />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{product.title}</DialogTitle>
                    </DialogHeader>

                    <Image
                        className="object-contain w-80 h-64 mx-auto"
                        width={400}
                        height={200}
                        src={product.image}
                        alt={product.title}
                    />
                    <section className="flex flex-col gap-1.5">
                        <h3 className="text-slate-500 font-semibold">
                            ${product.price}
                        </h3>
                        <p>{product.description}</p>
                    </section>
                </DialogContent>
            </Dialog>

            <div className="absolute top-4 right-4 bg-chart-2 text-white px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
            </div>

            <CardContent className="pb-6 flex flex-col gap-2">
                <section>
                    <h3 className="font-bold">{product.title}</h3>
                    <h4 className="text-slate-500 font-semibold">
                        ${product.price}
                    </h4>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <Link href={`/product/edit/${product.id}`}>
                        <Button
                            className="cursor-pointer w-full"
                            variant={"secondary"}
                        >
                            Edit
                        </Button>
                    </Link>

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button
                                className="cursor-pointer"
                                variant={"destructive"}
                            >
                                Delete
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={() => mutation.mutate(product.id)}
                                >
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </section>
            </CardContent>
        </Card>
    );
}
