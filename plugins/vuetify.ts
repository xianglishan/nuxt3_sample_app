import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { MAIN_THEME, mainTheme, MAIN_DARK_THEME, mainDarkTheme } from '@/helpers/themes'
import { defaults } from '@/helpers/defaults'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
      ssr: true,
      components,
      directives,
      // 他の設定をここに記述していく
      defaults, 
      display: {
        mobileBreakpoint: 'sm',
      },
      theme: {
        defaultTheme: MAIN_DARK_THEME, 
        themes: {
            mainTheme, 
            mainDarkTheme
        }
      },
      icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
        },
      },
    })
  
    // Vue.js で Vuetify を使用する
    nuxtApp.vueApp.use(vuetify)
})