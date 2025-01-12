/** @type {import('tailwindcss').Config} */
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
        customPurple: '#C778DD',
        customDark: '#282d33',
        customLightGray: '#ABB2BF',
        customGray: '#2c2f36',
      },
    },
  },
  plugins: [
   

  ],
};
