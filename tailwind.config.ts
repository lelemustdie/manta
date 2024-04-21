import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "manta-black-grey": "#373A36",
                "manta-red": "#EE2B37",
                "manta-dark-grey": "#6F7C7C",
                "manta-cool-grey": "#C1C5C8",
                "manta-ms-black": "#212121",
                "manta-signal-white": "#ffff",
                "manta-light-grey": "#f8f9fa",
            },
            gridTemplateColumns: {
                footer: "2fr repeat(3, minmax(0, 200px)) 1fr",
            },
        },
    },
    plugins: [],
}
export default config
