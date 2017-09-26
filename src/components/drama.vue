<template>
  <div class="dramapage">
    <p class="totalshow">
      <img src="../assets/images/drama.png">
      <span class="recommond">番剧连载</span>
      <span class="right">显示所有></span>
    </p>
    <div class="dramaItem">
      <div class="showItem" v-for="item in dramaList">
        <img :src="item.cover">
        <span class="showTitle">{{item.title}}</span>
        <span class="showNum">更新至{{item.total_count}}话</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'drama',
  computed: {
    dramaList() {
      return this.$store.state.dramaList
    }
  },
  mounted() {
    this.axios.get('http://www.easy-mock.com/mock/59c9b937e0dc663341ba6832/example/drama-itme').then(res =>{
      this.$store.state.dramaList = res.data.result.list;
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style lang="less">
  @import '../assets/css/drama.less';
</style>
