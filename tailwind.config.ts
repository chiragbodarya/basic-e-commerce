import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages*.{js,ts,jsx,tsx,mdx}",
    "./components*.{js,ts,jsx,tsx,mdx}",
    "./app*.{js,ts,jsx,tsx,mdx}",
    "./src*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7851A9",
          dark: "#664190",
          light: "#9A73C9",
          foreground: "#ffffff",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontSize: {},
    },
  },
  plugins: [],
};

export default config;
