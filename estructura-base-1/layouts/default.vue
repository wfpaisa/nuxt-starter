<template>
  <v-app :dark="dark">
    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Nav bar -->
    <v-toolbar :clipped-left="clipped" fixed app dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer" />

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        {{ itemslist }}
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Main content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- Right sidebar -->
    <v-navigation-drawer v-model="rightDrawer" right fixed app>
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Footer -->
    <v-footer inset app>
      <v-spacer></v-spacer>
      <div class="pa-3">Comodisimos &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Fichas',
      dark: false,
      clipped: false,
      drawer: true,
      fixed: true,
      // Sidebar right
      rightDrawer: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'bubble_chart',
          title: 'Todos',
          to: '/todos'
        }
      ]
    }
  },
  computed: {
    itemslist() {
      return this.$store.state.todos.list.length
    }
  }
}
</script>
