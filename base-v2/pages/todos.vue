<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list>
          <!-- <li v-for="(todo, index) in todos" :key="index">
            <input
              type="checkbox"
              :checked="todo.done"
              @change="toggle(todo)"
            />
          </li> -->

          <v-list-tile
            v-for="(todo, index) in todos"
            :key="index"
            @click.prevent
          >
            <v-list-tile-action>
              <!-- <v-checkbox : :value="todo.done"></v-checkbox> -->
              <v-checkbox
                :input-value="todo.done"
                @change="toggle(todo)"
              ></v-checkbox>
              <!-- <v-checkbox v-model="thisCheck"></v-checkbox> -->
            </v-list-tile-action>

            <v-list-tile-content @click="toggle(todo)">
              <v-list-tile-title>{{ todo.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>
        </v-list>

        <div class="pa-3">
          <v-text-field
            v-model="todoNewText"
            label="Todo item"
            placeholder="What needs to be done?"
            @keyup.enter="addTodo"
          ></v-text-field>
        </div>

        <pre>{{ todos }}</pre>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'layout-todos',
  data: function() {
    return {
      todoNewText: ''
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', this.todoNewText)
      this.todoNewText = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
