import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ProductCard() {
    return (
        <Card className="md:w-72 p-0 relative">
            <Image
                width={400}
                height={200}
                src="https://picsum.photos/400/200"
                alt="Dummy image"
                className="rounded-t-xl"
            />
            <div className="absolute top-4 right-4 bg-chart-2 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
            </div>
            <CardContent className="pb-6 flex flex-col gap-2">
                <section>
                    <h3 className="font-bold">Air Jordan</h3>
                    <h4 className="text-slate-500 font-semibold">$100.20</h4>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <Button variant={"secondary"}>Edit</Button>
                    <Button variant={"destructive"}>Delete</Button>
                </section>
            </CardContent>
        </Card>
    );
}
