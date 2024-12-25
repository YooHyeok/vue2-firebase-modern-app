<template>
  <v-container fluid grid-list-md> <!-- fluid: 전체 영역 사용 md: 여백 medium -->
    <v-layout row>
      <!--
        row: 그리드 시스템 한 행(해당 행 내에 열들이 가로로 배치.)
        column: 그리드 시스템 한 열(해당 열 내 행들이 세로로 배치)
        wrap: 반응형 행(자동배치) 구성
      -->
      <v-flex xs12 sm6 md4 v-for="i in 9" :key="i">
        <v-card color="red">
          <v-card-title primary-title>
            card!
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
}
</script>
