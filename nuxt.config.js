
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'keyworld',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/vuetify/dist/vuetify.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
    }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['firebase', 'ramda', 'vuefire', 'vuetify', 'axios'],
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // config.module.rules.push({
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        //   options: {
        //     loaders: {
        //       scss: 'sass-loader',
        //       sass: 'sass-loader?indentedSyntax' // <style lang="sass">
        //     }
        //   }
        // })
      }
    }
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     '$': 'jquery'
    //   })
    // ]
  },
  plugins: [{
    src: '~/plugins/firebase.js',
    ssr: false
  },
  {
    src: '~/plugins/vuetify.js',
    ssr: false
  }
  ],
  mode: 'spa'
}
