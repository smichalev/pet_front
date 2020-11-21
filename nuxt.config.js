export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
    ],
    link: [
      {rel: 'shortcut icon', type: 'image/png', href: '/favicon.png'},
    ],
  },
  loading: {color: '#fff'},
  css: ['./assets/normalize.css'],
  plugins: ['@/plugins/semantic'],
  buildModules: [
    '@nuxtjs/moment',
  ],
  moment: {
    defaultLocale: 'en',
    locales: ['ru'],
  },
  modules: ['@nuxtjs/axios'],
  build: {
    vendor: [],
    transpile: [/^semantic/],
    extend(config, ctx) {
    },
  },
};
