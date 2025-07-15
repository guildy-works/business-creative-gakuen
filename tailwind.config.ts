import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import { theme } from 'tailwindcss/defaultConfig';

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: ["origin-right"],
    theme: {
        fontWeight: {
            bold: "900",

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
            "navigation": ["min(3.4vw, 0.98rem)", { letterSpacing: "0.1rem", fontWeight: 500 }],
            "size-p-wide": ["min(3.2vw, 0.82rem)", { letterSpacing: "0.08rem", lineHeight: "1.5rem", fontWeight: "700", }],
            "size-p": ["min(3.2vw, 0.9rem)", { letterSpacing: "0.04rem", lineHeight: "1.4rem", fontWeight: "700" }],
            size3: ["min(3vw, 0.72rem)", { letterSpacing: "0.04rem", lineHeight: "1.4rem", fontWeight: "700" }],
            size2: ["min(3.2vw, 0.9rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "700" }],
            size1: ["min(3.8vw, 1.05rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "700" }],
            title4: ['min(4.2vw, 1.1rem)', { letterSpacing: "0rem", lineHeight: "1.8rem", fontWeight: "700" }],
            title3: ['min(4.6vw, 1.8rem)', { letterSpacing: "0rem", lineHeight: "2rem", fontWeight: "700" }],
            title2: ['min(5.8vw, 2.2rem)', { letterSpacing: "0rem", lineHeight: "2.5rem", fontWeight: "700" }],
            title1: ['min(6.5vw, 2.8rem)', { letterSpacing: "0rem", lineHeight: "3.8rem", fontWeight: "700" }],
            titleLarge: ['min(7vw, 4rem)', { letterSpacing: "0rem", lineHeight: "3.8rem", fontWeight: "700" }],
        },

        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            dot: [ 'sans-serif'],
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
