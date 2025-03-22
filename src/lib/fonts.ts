import { Poppins, Pacifico } from "next/font/google";

export const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "800"],
    subsets: ["latin"],
});

export const pacifico = Pacifico({
    weight: "400",
    subsets: ["latin"],
})