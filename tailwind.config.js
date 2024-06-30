// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        head: ["Yeseva One"],
        p:["Josefin Sans"],
        logo:["Playwrite MX"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};