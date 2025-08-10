/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#1d4ed8', // darker blue on hover
              },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#d1d5db', // gray-300
              paddingLeft: '1rem',
              color: '#4b5563', // gray-600
            },
            code: {
              color: '#d97706', // amber-600
              fontWeight: '500',
              backgroundColor: '#fef3c7', // amber-100
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
