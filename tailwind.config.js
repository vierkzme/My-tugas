/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%, 100%": {
            transform: "translateY(0) translateX(0) scale(1) rotate(0deg)",
            opacity: 1,
          },
          "25%": {
            transform:
              "translateY(-15px) translateX(5px) scale(1.1) rotate(10deg)",
            opacity: 0.8,
          },
          "50%": {
            transform:
              "translateY(-30px) translateX(-10px) scale(1.2) rotate(-10deg)",
            opacity: 0.6,
          },
          "75%": {
            transform:
              "translateY(-15px) translateX(10px) scale(1.1) rotate(5deg)",
            opacity: 0.8,
          },
        },
      },
      animation: {
        "icon-move": "move 6s ease-in-out infinite",
      },
      fontFamily: {
        handwriting: ["Comic Sans MS", "cursive"], // You can replace with any handwriting-style font
      },
    },
  },
  plugins: [],
};
