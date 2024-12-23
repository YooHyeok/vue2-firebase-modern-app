<template>
  <v-list two-line>
    <v-list-tile>
      <v-list-tile-avatar>
        <v-icon>mdi-alert</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>Tile Title</v-list-tile-title>
        <v-list-tile-sub-title>Tile Sub Title</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="grey lighten-1">mdi-alert-box</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
