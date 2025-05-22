/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921338/img-1_pbqlr9.jpg')",
        'bg-img-2': "url('https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921337/img-2_fxofpa.jpg')",
        'bg-img-3': "url('https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921340/img-3_jizvex.jpg')",
        'feature-bg': "url('https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921335/feature-bg_opbgxa.jpg')",
        pattern: "url('https://res.cloudinary.com/dqbhvzioe/image/upload/v1747924516/pattern_imwiwp.png')",
        'pattern-2': "url('https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921333/pattern-bg_ndejz7.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
