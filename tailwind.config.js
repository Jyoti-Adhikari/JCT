/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0B4D49',       // Deep primary teal
          tealLight: '#146B65',  // Medium teal accent
          tealDark: '#073330',   // Extra deep teal background
          tealSurface: '#0E5C57',
          tealSubtle: '#F0F7F6', // Very soft teal-tinted background
          red: '#DC2626',        // Flame red accent
          redHover: '#B91C1C',   // Flame red hover
          redSubtle: '#FEF2F2',  // Soft red tint
          yellow: '#F59E0B',     // Golden yellow accent
          yellowHover: '#D97706',// Deep yellow
          yellowSubtle: '#FFFBEB',
          sand: '#FAF9F6',       // Off-white neutral background
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        arabic: ['Cairo', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        card: '0 4px 12px 0 rgba(11, 77, 73, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        hover: '0 12px 24px -4px rgba(11, 77, 73, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

