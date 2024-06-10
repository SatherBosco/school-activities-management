/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#1FD6FF",
        "primary-200": "#13A1C1",
        secondary: "#AFF5FF",
        placeholder: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
