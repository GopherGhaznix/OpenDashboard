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
      transitionDuration: {
        750: '750ms',
        1000: '1000ms',
        1500: '1500ms',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.active': {
          '@apply text-white border border-gray-600 backdrop-blur-2xl bg-gradient-to-b from-gray-500/30 bg-[#272730] shine-effect': {},
        },
        '.sideitemHoverEffect': {
          '@apply text-white border border-transparent hover:border-gray-600 duration-750 shine-effect': {},
        },
      });
    },

    // 

    function ({ addUtilities }) {
      const newUtilities = {
        '.shine-effect': {
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform var(--transition-duration, 500ms) ease-out',
        },
        '.shine-effect::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-125%',
          width: '20%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.4)',
          transform: 'skew(45deg)',
          transition: 'left var(--transition-duration, 500ms) ease-out',
        },
        '.shine-effect:hover::before': {
          left: '150%',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

