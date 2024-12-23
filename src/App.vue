<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed>
      <v-list two-line>
        <v-list-tile v-for="item in items" :key="item.title">
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
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="lime">
      <v-toolbar-side-icon @click="test"/> <!-- 햄버거 아이콘 -->
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
        { title: 'title1', icon: 'mdi-alert' },
        { title: 'title2', icon: 'mdi-alert-box' },
        { title: 'title3', icon: 'mdi-alert-circle' }
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
