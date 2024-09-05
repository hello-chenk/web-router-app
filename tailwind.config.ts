import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('/home/bg-1.png')",
        'bg-2': "url('/home/bg-2.png')",
        'bg-3-1': "url('/home/bg-3-1.png')",
        'bg-3-2': "url('/home/bg-3-2.png')",
      },
      backgroundSize: {
        "100": "100%",
        "150": "150%"
      }
    },
  },
  plugins: [],
};
export default config;
