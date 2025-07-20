import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import { theme } from 'tailwindcss/defaultConfig';

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: ["origin-right", "outline-4", "outline-black", "outline-solid"],
    theme: {
        fontWeight: {
            bold: "700",

        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontSize: {
            ...theme?.fontSize,
            "navigation": ["min(3.4vw, 0.98rem)", { letterSpacing: "0.1rem", fontWeight: 400 }],
            "size-p-wide": ["min(3.2vw, 0.82rem)", { letterSpacing: "0.08rem", lineHeight: "1.5rem", fontWeight: "400", }],
            "size-p": ["min(3vw, 0.88rem)", { letterSpacing: "0.0rem", lineHeight: "1.2rem", fontWeight: "400" }],
            size3: ["min(3vw, 0.72rem)", { letterSpacing: "0.04rem", lineHeight: "1.4rem", fontWeight: "400" }],
            size2: ["min(3.2vw, 0.9rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "400" }],
            size1: ["min(3.8vw, 1.05rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "400" }],
            title4: ['min(4.2vw, 1.1rem)', { letterSpacing: "0rem", lineHeight: "1.8rem", fontWeight: "400" }],
            title3: ['min(4.6vw, 1.8rem)', { letterSpacing: "0rem", lineHeight: "1.6rem", fontWeight: "400" }],
            title2: ['min(5.8vw, 2.2rem)', { letterSpacing: "0rem", lineHeight: "2.5rem", fontWeight: "400" }],
            title1: ['min(6.5vw, 2.8rem)', { letterSpacing: "0rem", lineHeight: "3.8rem", fontWeight: "400" }],
            titleLarge: ['min(7vw, 4rem)', { letterSpacing: "0rem", lineHeight: "3.8rem", fontWeight: "400" }],
        },

        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            nikokaku: ['nicokaku', 'sans-serif'],
            dot: ['BestTen-DOT', 'sans-serif'],
        },
        colors: {
            ...colors,

            color0: "#6739c1",
            color1: "#486bc7",
            color2: "#FFDE59",
            color3: "#ffc326",
            color4: "#e0938a",
            color4_1: "#f9d3ce",

            white: '#ffffff',

            font1: '#060c15',
            font2: 'rgb(223 150 150)',
            font3: '#c07a7a',

            grey1: '#bba3a3',
            grey2: '#bba3a3',
        },
    },
    plugins: [],
};
export default config;
