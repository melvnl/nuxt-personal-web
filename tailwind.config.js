module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    extend: {},
    colors: {
      backgroundColor: '#F8FAFC',
      primaryColor: '#4952FC',
      secondaryColor: '#5183F5',
      fontColor: '#000000',
      backgroundHoverColor: '#F2F2F2',
      fontSecondaryColor: '#FFFFFF',
      linkColor: '#5183F5',
      textWhite: '#FFFFFF',
      linkHoveredColor: ''
    },
    fontFamily: {
      sans: ['Inter']
    }
  },
  variants: {},
  plugins: []
}
