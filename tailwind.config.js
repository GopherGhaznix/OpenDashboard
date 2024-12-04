/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '18': '4.55rem', // Add the custom width here
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.active': {
          '@apply text-white backdrop-blur-sm bg-gradient-to-b from-gray-500/30 bg-[#272730]': {},
        },
      });
    },
  ],
}

