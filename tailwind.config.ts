import type { Config } from "tailwindcss";
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    azulMuyOscuro: "#062F5B",
    azulOscuro2: "#074486",
    azulOscuro: "#0957AB",
    azulOrg: "#0965C8",
    azulClaro: "#2486EF",
    azulClaro2: "#4CA2FE",
    azulMuyClaro: "#82BDFD",
    azulPastel: "#D0E7FF",

    celesteMuyOscuro: "#004862",
    celesteOscuro2: "#006C94",
    celesteOscuro: "#0097CE",
    celesteOrg: "#00AFEF",
    celesteClaro: "#32C8FF",
    celesteClaro2: "#8EE1FF",
    celesteMuyClaro: "#BCEDFF",
    celestePastel: "#E4F8FF",

    violetaMuyOscuro: "#380243",
    violetaOscuro2: "#5B1969",
    violetaOscuro: "#773185",
    violetaOrg: "#9B3BAE",
    violetaClaro: "#CD54E6",
    violetaClaro2: "#E78AF9",
    violetaMuyClaro: "#F4BEFF",
    violetaPastel: "#FAE0FF",

    naranjaMuyOscuro: "#7A1A00",
    naranjaOscuro2: "#AD2E00",
    naranjaOscuro: "#D64000",
    naranjaOrg: "#FF4D00",
    naranjaClaro: "#FF7300",
    naranjaClaro2: "#FF9626",
    naranjaMuyClaro: "#FFBC75",
    naranjaPastel: "#FFF0CD",

    turquesaMuyOscuro: "#056570",
    turquesaOscuro2: "#088391",
    turquesaOscuro: "#0F96A7",
    turquesaOrg: "#17ACBE",
    turquesaClaro: "#2FBBCC",
    turquesaClaro2: "#4CD3E3",
    turquesaMuyClaro: "#76ECFA",
    turquesaPastel: "#A1F5FF",

    grisMuyOscuro: "#131927",
    grisOscuro2: "#212936",
    grisOscuro: "#4D5461",
    grisOrg: "#6D717F",
    grisClaro: "#9EA2AE",
    grisClaro2: "#D2D5DB",
    grisMuyClaro: "#E5E7EA",
    grisPastel: "#F3F3F3",

    rojoMuyOscuro: "#641D1A",
    rojoOscuro2: "#832523",
    rojoOscuro: "#D93E39",
    rojoOrg: "#EE443F",
    rojoClaro: "#F16965",
    rojoClaro2: "#F79491",
    rojoMuyClaro: "#FDB8B6",
    rojoPastel: "#FDECEC",

    amarilloMuyOscuro: "#6B4700",
    amarilloOscuro2: "#B57900",
    amarilloOscuro: "#FFAA00",
    amarilloOrg: "#FFBB33",
    amarilloClaro: "#FFC654",
    amarilloClaro2: "#FFD88A",
    amarilloMuyClaro: "#FFE5B0",
    amarilloPastel: "#FFF7E6",

    verdeMuyOscuro: "#1C4D27",
    verdeOscuro2: "#256533",
    verdeOscuro: "#308242",
    verdeOrg: "#43B75D",
    verdeClaro: "#69C57D",
    verdeClaro2: "#81CF92",
    verdeMuyClaro: "#C5E9CD",
    verdePastel: "#ECF8EF",
  },
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        ...colors,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
