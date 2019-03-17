// example: https://codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/vuex-store?from-embed
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
