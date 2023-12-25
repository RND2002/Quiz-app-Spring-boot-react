/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainColor':'#5d2057',
        'stringColor':'#ffa601',
        'white':'white',
        'hover':'#206BBF'
      }
    },
  },
  plugins: [],
}

