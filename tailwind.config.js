/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: {
          '25': '##effef6',
          '50': '#effef6',
          '100': '#dafeea',
          '200': '#b7fbd7',
          '300': '#7ff6b8',
          '400': '#40e891',
          '500': '#17d071',
          DEFAULT: '#0DB760',
          '700': '#0e8749',
          '800': '#116a3e',
          '900': '#105734',
        },
        secondary: {
          '25': '#FCFCFD',
          '50': '#F9FAFB',
          '100': '#F2F4F7',
          '200': '#EAECF0',
          '300': '#D0D5DD',
          '400': '#98A2B3',
          '500': '#667085',
          '600': '#475467',
          '700': '#344054',
          '800': '#1D2939',
          DEFAULT: '#101828',
        }
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        // localFont: ["ADELIA", "cursive"],
      },
      boxShadow: {
        custom: '3px 0 110px -50px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'hero-bg': "url('/src/Assets/Images/others/heroBgImg.png')",
        'tutors-card-bg': "url('/src/Assets/Images/others/Team member bg.png')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [
  ],
}

