import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#64B496",
          dark: "#2B2B2D",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#212529",
          muted: "#7A7A7A",
        },
        line: "#E9E9E9",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        quicksand: ["var(--font-quicksand)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        segoe: ["Segoe UI", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        container: "1920px",
      },
      boxShadow: {
        topbar: "0px 0px 8px rgba(51, 51, 51, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;