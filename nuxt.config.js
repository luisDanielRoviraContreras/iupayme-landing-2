
module.exports =  {
  /*
  ** Headers of the page
  */
  router: {
    middleware: ['mobile']
  },
  buildDir: 'nuxt',
  head: {
    title: 'iu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700&display=swap' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['boxicons/css/boxicons.min.css', '~/style/root.sass'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  styleResources: {
    sass: ['~/style/mixins.sass']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  pwa: {
    manifest: {
      name: 'Iu',
      theme_color: '#121624',
      background_color: '#f5f7f9',
      description: 'Cartera - Tarjetas - Cryptocurrency',
      lang: 'es',
      display: 'standalone',
      crossorigin: 'use-credentials'
    }
  },

  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {}
  },

  loaders: {
    ts: {
      silent: true
    },
    tsx: {
      silent: true
    }
  }
}
