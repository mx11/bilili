<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'

export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>
<style lang="less">
  @import './assets/css/main.less';
</style>



