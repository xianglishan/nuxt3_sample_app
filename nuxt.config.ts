// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify"

export default defineNuxtConfig({
  devtools: { enabled: true }, 
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY
  },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    }
  },
  css: ['@/assets/main.scss']
})
