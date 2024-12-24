<template>
  <div>
    <span v-bind:title="title">
      {{ message }}
    </span>
    <p v-if="seen">
      이제 나를 볼 수 있어요!
    </p>
    <v-alert type="primary" :value="true" v-for="value in 5" :key="value">
      abcde {{ value }}
    </v-alert>
    <v-alert type="primary" :value="true" v-for="(value, index) in array" :key="value">
      abcde {{ value }}
    </v-alert>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
    return {
      seen: true,
      message: '내 위에 잠시마 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있다.',
      title: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.',
      array: [1, 2, 3, 4, 'www', 'xxx']
    }
  }
}
</script>
