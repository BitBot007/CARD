// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        extensions: ['.vue'],
        prefix: 'Ui',
        pathPrefix: false
      })
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://www.example.com/api',
    }
  },
})
