/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'ppneue-montreal': ['PPNeueMontreal', 'sans-serif'],
        'avant-garde': ['AvantGardeBookBT', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        book: 300,
        medium: 500,
        semibold: 600,
        bold: 700,
        italic: 400,
        semibolditalic: 600,
      },
      color: {
        'custom-gray': '#d8d7cb',
      }
    },
  },
  plugins: [],
};
