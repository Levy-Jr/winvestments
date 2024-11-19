import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayAccent: '#666',
        darkBrown: "#AC894C",
        lightBrown: "#D4C09B"
      },
      width: {
        'container': 'min(95%,90rem)',
        'lg-container': 'min(95%,105rem)'
      },
      fontFamily: {
        newsReader: ['var(--font-news-reader)'],
        roboto: ['var(--font-roboto)']
      }
    },
  },
  plugins: [],
} satisfies Config;
