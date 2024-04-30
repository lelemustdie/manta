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
    title: "Manta",
    description: "This is Mantastic!",
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
