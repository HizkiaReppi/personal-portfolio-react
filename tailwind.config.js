/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    extend: {
      colors: {
      'main': '#10101a',
      'second': '#00adb5',
      },
      boxShadow: {
        'btn': '4px 4px'
      },
      animation: {
        'upDown': 'up-down 3s ease-in-out infinite',
      },
      keyframes: {
        'up-down': {
          '0%, 100%': { transform: 'translateY(-15px)' },
          '50%': { transform: 'translateY(30px)' },
        }
      }
    },
  },
  plugins: [],
}
