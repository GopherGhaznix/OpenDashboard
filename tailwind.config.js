/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
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
          '@apply text-white backdrop-blur-2xl bg-gradient-to-b from-gray-500/30 bg-[#272730] shine-effect-oneway': {},
        },
        '.sideitemHoverEffect': {
          '@apply text-white border-3 border-transparent hover:border-[#262630] duration-750 shine-effect-oneway': {},
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

    function ({ addUtilities }) {
      const newUtilities = {
        '.shine-effect-oneway': {
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform var(--transition-duration, 500ms) ease-out',
        },
        '.shine-effect-oneway::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-125%', // Start off-screen
          width: '20%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.4)',
          transform: 'skew(45deg)', // Creates the diagonal shine
          transition: 'left var(--transition-duration, 500ms) ease-out',
        },
        '.shine-effect-oneway:hover::before': {
          left: '150%', // Moves the shine across the element
          transition: 'left var(--transition-duration, 500ms) ease-out',
        },
        '.shine-effect-oneway:hover': {
          // Optional: Add other hover styles for the parent element
        },
        '.shine-effect-oneway::before:not(:hover)': {
          left: '-125%', // Reset to off-screen only when no hover is applied
          transition: 'none', // Disable reverse transition
        },
      };
    
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addUtilities }) {
      const conflictResolution = {
        '.active.sideitemHoverEffect': {
          '@apply border-0': '', // Set border to 0 when both classes are present
        },
      };

      addUtilities(conflictResolution);
    },
    
  ],
}

