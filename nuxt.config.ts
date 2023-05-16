// https://nuxt.com/docs/api/configuration/nuxt-config
// const myCustomDarkTheme = {
//     dark: true,
//     colors: {
//       background: '#040d19',
//       surface: '#071426',
//       primary: '#071426',
//       'primary-darken-1': '#3700B3',
//       secondary: '#071426',
//       'secondary-darken-1': '#018786',
//       error: '#071426',
//       info: '#479DFF',
//       success: '#24A854',
//       warning: '#F2C3F6',
//     },
//   }
import { aliases, mdi } from 'vuetify/iconsets/mdi'


export default defineNuxtConfig({
    ssr: false,
    css: ['@mdi/font/css/materialdesignicons.css'],
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title: "SMBDefence",
        }
      },
      nitro: {
        preset: 'cloudflare_pages'
      },
      modules: [
        '@invictus.codes/nuxt-vuetify'
      ],
      vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            theme: {
                defaultTheme: 'dark',
                // themes:{
                //     myCustomDarkTheme
                // }
              },
              icons: {
                defaultSet: 'mdi',
                aliases,
                sets: {
                  mdi,
                },
              },
        },
    
        moduleOptions: {
          /* nuxt-vuetify module options */
          treeshaking: true,
          useIconCDN: false,
    
          /* vite-plugin-vuetify options */
          styles: true,
          autoImport: true,
        }
      }
})
