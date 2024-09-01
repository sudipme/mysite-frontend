/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      textColor: {
        link: "#0072f5",
      },
      backgroundColor: {
        primary: "#151515",
        secondary: "#222222",
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}

