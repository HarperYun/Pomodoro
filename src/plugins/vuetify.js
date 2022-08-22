// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.indigo.lighten5
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.indigo.base
      }
    }
  }
)

// import Vue from 'vue'
// import { createVuetify } from 'vuetify'
// import colors from 'vuetify/lib/util/colors'

// export default createVuetify({
//   theme: {
//     themes: {
//       light: {
//         primary: colors.purple,
//         secondary: colors.grey.darken1,
//         accent: colors.shades.black,
//         error: colors.red.accent3,
//         background: colors.indigo.lighten5
//         // ...
//       },
//       dark: {
//         primary: colors.blue.lighten3,
//         background: colors.indigo.base
//         // ...
//       }
//     }
//   }
// })
