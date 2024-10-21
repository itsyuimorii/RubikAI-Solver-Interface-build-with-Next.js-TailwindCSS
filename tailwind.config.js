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
      colors: {
        'custom-gray': '#d8d7cb',
        'custom-green': '#98ec39',
        'white-tile': '#f5f5f5',
        'red-tile': '#f28b82',
        'green-tile': '#a7d7a8',
        'blue-tile': '#aecbfa',
        'orange-tile': '#ffcc80',
        'yellow-tile': '#fff475',
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  },
};
