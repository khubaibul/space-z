/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3cd15a",

          "secondary": "#D0D6F9",

          "accent": "#0B0D17",

          "neutral": "#183661",

          "base-100": "#0B0D17",

          "info": "#7E97DD",

          "success": "#1FC15D",

          "warning": "#E0B715",

          "error": "#F26E8D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
