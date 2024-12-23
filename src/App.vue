<template>
  <v-app>
    <v-toolbar color="lime">
      <v-toolbar-side-icon/> <!-- 햄버거 아이콘 -->
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer><!-- 공간 차지 --></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down"> <!-- display helper: sm보다 작아지면 hidden -->
        <v-btn flat>Link One</v-btn> <!-- flat: 버튼 모양 제거 -->
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
      //
    }
  }
}
</script>
