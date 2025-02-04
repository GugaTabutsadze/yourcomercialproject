/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColors: {
          btn: "#eb28a6",
        },
        darkPink: "#d914a1",
      lightPink: "#e070b9",
      notVerylightPink: "#bf028a",
      lightBrown: "#f07b41",
      lightYellow: "#f1f57a",
      darkRed: "#52060f",
      lightGreen: "#abd49f",
      darkerGreen: "#0f470b",
      lightBlue: "#9fc6d4",
      lightCreamColor: "#dec081"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      }
    },
  },
  plugins: [],
}

