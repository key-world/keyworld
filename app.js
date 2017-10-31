// const {
//   Nuxt,
//   Builder
// } = require('nuxt')
// const app = require('express')()
// const isProd = (process.env.NODE_ENV === 'production')
// const port = process.env.PORT || 3000

// // options으로 nuxt.js를 인스턴스화 합니다.
// let config = require('./nuxt.config.js')
// config.dev = !isProd
// let nuxt = new Nuxt(config)
// if (config.dev) {
//   new Builder(nuxt).build()
// }
// // nuxt.js로 모든 route를 랜더합니다.
// app.use(nuxt.render)

// // dev 모드를 위해 핫-로딩 빌드를 합니다.
// // if (config.dev) {
// //   nuxt.build()
// //     .catch((error) => {
// //       console.error(error)
// //       process.exit(1)
// //     })
// // }

// // 서버
// app.listen(port, '0.0.0.0')
// console.log('Server listening on localhost:' + port)
