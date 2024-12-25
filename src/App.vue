<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat color="transparent">
        <v-toolbar-title>Account</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider> <!-- hr 느낌의 bar(선) -->
      <!-- <v-list two-line> -->
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title  :to="item.to">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="subitem in item.subItems" :key="subitem.title" :to="subitem.to">
            <v-list-tile-content>
              <v-list-tile-title >{{ subitem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <!-- <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Tile Title - {{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>Tile Sub Title - {{ item.title }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">{{item.icon}}</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile> -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="lime">
      <v-toolbar-side-icon @click="drawer = !drawer"/> <!-- 햄버거 아이콘 -->
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer><!-- 공간 차지 --></v-spacer>
      <!-- <v-toolbar-items class="hidden-sm-and-down"> --> <!-- display helper: sm보다 작아지면 hidden -->
      <v-toolbar-items> <!-- display helper: sm보다 작아지면 hidden -->
        <!-- <v-btn flat>Link One</v-btn> --> <!-- flat: 버튼 모양 제거 -->
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
      <!-- <HelloWorld/> -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-alert', active: true, subItems: [{ title: 'dashboard', to: '/' }, { title: 'About2', to: '/about2' }] },
        { title: 'Lectures', icon: 'mdi-alert-box', active: false, subItems: [{ title: 'card', to: '/lectures/card' }, { title: 'layout', to: '/lectures/layout' }] }
        // { title: 'title3', icon: 'mdi-alert-circle', active: false }
      ]
    }
  },
  methods: {
    test () {
      this.drawer = !this.drawer
    }
  }
}
</script>
