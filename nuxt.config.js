export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - MrIsaacs',
    title: 'Startseite',
    htmlAttrs: {
      lang: 'de-AT'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'Ivan Ilić' },
      { hid: 'description', name: 'description', content: 'technology, journal-, algorithm-, hard-fact- and manifesto-chaser' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/skeleton.css',
    '@/assets/css/custom.css',
    '@/assets/css/animation.css',
    '@/assets/css/material-design-iconic-font.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],

  moment: {
    defaultLocale: 'de',
    locales: ['de']
    // ,
    // plugin: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    dir: 'data/',
    liveEdit: false
  },

  hooks: {
    // 'content:file:beforeInsert': (document) => {
    //   if (document.extension === '.md') {
    //     const {}
    //   }
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, { isClient, loaders: { vue } }) {
    //   // Extend only webpack config for client-bundle
    //   if (isClient) {
    //     vue.transformAssetUrls.video = ['src', 'poster']
    //   }
    // }
  },

  /**
   * Customize router options for different environments
   * https://hikari-blog.com/nuxtjs-github-pages/
   */
   router: {
    base: '/',
    prefetchLinks: false
  },

  cli: {
    badgeMessages: ['Nuxt Content is ready to go!'],
    bannerColor: 'yellow'
  }
}
