import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const magistral = localFont({
    src: [
        {
            path: "../assets/fonts/Magistral-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/Magistral-Book.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/Magistral-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/Magistral-Cond-Medium.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../assets/fonts/Magistral-Cond-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
})

export const metadata: Metadata = {
    title: "Aquabike",
    description:
        "Las bicicletas Aquabike Hydrofoil están diseñadas para replicar la experiencia de andar en bicicleta sobre el agua. Sin carreteras, sin tráfico. Únete a la creciente comunidad de ciclistas acuáticos.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={magistral.className}>{children}</body>
        </html>
    )
}
