import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

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
