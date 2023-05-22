/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/views/**/*.{html,html.erb,erb}',
    './app/javascript/components/**/*.js',
    './app/javascript/components/**/*.jsx',
    './app/**/*.{js,jsx,ts,tsx}',
    '.app/assets/images/*.svg',
  ],
  theme: {
    fontFamily: {
      headers: 'Circular',
      subheaders: 'Inter-Medium',
      body: 'Inter-Regular',
      numbers: 'Inter-ExtraBold',
      bolder: 'Inter-Bold',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#212529',
        accent: '#79264D',
      },
      backgroundImage: {
        site: "url('/Users/lewagonbarcelona/code/portfolio/my_vite_app/app/assets/images/site-bg.jpg')",
        about: "url('/Users/lewagonbarcelona/code/Blarsamio/invitation/app/assets/images/about.png')",
        services: "url('/Users/lewagonbarcelona/code/portfolio/my_vite_app/app/assets/images/services.png')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
