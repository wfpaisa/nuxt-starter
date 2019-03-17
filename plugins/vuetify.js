import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

// Generados con: https://material.io/tools/color/#!/?view.left=0&view.right=1&primary.color=001F4C&secondary.color=f76154
// http://paletton.com/#uid=33F1c1k++etZ+pD+Yk3++7P++00kQUk300no00no00no00nokYvkuoX-aTstm+qarLH0p

Vue.use(Vuetify, {
  theme: {
    primary: '#001F4C', // rgb(0,31,76)
    // accent: colors.grey.darken3,
    secondary: '#de317a',
    // secondary: colors.amber.darken3,
    info: colors.blue.base,
    warning: colors.amber.base,
    error: colors.pink.base,
    success: colors.green.accent3
  }
})
