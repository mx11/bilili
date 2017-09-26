<template>
  <div class="commondpage">
    <p class="totalshow">
      <img src="../assets/images/recommond.png">
      <span class="recommond">最新推荐</span>
      <span class="right"><img src="../assets/images/rank.png"></span>
    </p>
    <div class="commondlist">
      <div class="showItem" v-for="item in commondList">
        <img :src="item.pic">
        <span class="showTitle"><b>{{item.tname}}</b> {{item.title}}</span>
        <span class="showNum">
          {{item.author}}
          <span>
            <i class="fa fa-eye" aria-hidden="true"></i>
            {{item.play}}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commond',
  computed: {
    commondList() {
      return this.$store.state.commondList
    }
  },
  mounted() {
    this.axios.get('http://www.easy-mock.com/mock/59c9b937e0dc663341ba6832/example/commond-item').then(res =>{
      this.$store.state.commondList = res.data.list;
    })
  }
}
</script>
<style lang="less">
  @import '../assets/css/commond.less';
</style>


