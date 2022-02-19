module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pinky': '#C517F1',
        'cynku' : '#5AFFFF',
        'pinku': '#E91ED5'
      },
      fontFamily: {
        Prompt: ['Prompt', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('https://cdn.discordapp.com/attachments/941091409509896283/944709224821321728/image_4.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
