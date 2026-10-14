import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ochre: "#C8862A", oxide: "#8E3B2F", dune: "#EAE0CC", ikota: "#26332E" },
    fontFamily: { sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"] } } },
  plugins: [],
} satisfies Config;
