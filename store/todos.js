export const state = () => ({
  list: [
    { done: true, text: 'Task 1' },
    { done: false, text: 'Task 2' },
    { done: true, text: 'Task 3' }
  ]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
