/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { // colocar as imagens dentro desse obj
        'bg-myYelow': "url('/src/image/bg.png')",
      },
      rotate: {
        'tenis': '10deg',
      },
      fontFamily: {
        'sans': ["Poppins"],
      },
      keyframes: {
        floatRigth: {
          "0%": { transform: "translatex(0px)" },
          "50%": { transform: "translatex(8px)" },
          "100%": { transform: "translatex(0px)" },
        },
        opacityPulse: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.2 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        floatRigth: 'floatRigth 1.5s infinite',
        opacityPulse: 'opacityPulse 1.5s infinite'
      },
    },
  },
  plugins: [],
}


