
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'iGetSpot Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=DM+Serif+Text|Open+Sans:400,700&display=swap'
      }
    ],
    script: [
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js'},
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineLite.min.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/app.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-masonry', ssr: false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
