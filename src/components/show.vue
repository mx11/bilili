<template>
  <div class="showpage">
    <div class="banner-item">
      <div class="item follow">
        <img src="../assets/images/heart.png">
        <p>关注直播</p>
      </div>
      <div class="item center">
        <img src="../assets/images/world.png">
        <p>直播中心</p>
      </div>
      <div class="item search1">
        <img src="../assets/images/search.png">
        <p>搜索直播</p>
      </div>
      <div class="item classification">
        <img src="../assets/images/sort.png">
        <p>全部分类</p>
      </div>
    </div>
    <p class="totalshow">
      <img src="../assets/images/video.png">
      <span class="recommond">当前推荐</span>
      <span class="right">当前1000位推荐></span>
    </p>
    <div class="show-content">
      <div class="showItem" v-for="item in showList" >
        <img :src="item.archive.pic">
        <div class="showInfo">
          <span class="showTitle"><b class="showType">#{{item.archive.tname}}#</b> {{item.archive.title}}</span>
          <div class="showUser">
            <span class="showAuthor">{{item.archive.owner.name}}</span>
            <span class="showNum">
              <i class="fa fa-eye" aria-hidden="true"></i>
              {{item.archive.stat.view}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'show',
  computed: {
    showList(){
      return this.$store.state.showList;
    }
  },
  mounted() {
    this.axios.get('http://www.easy-mock.com/mock/59c9b937e0dc663341ba6832/example/show-item').then(res=> {
      this.$store.state.showList = res.data.data;
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style lang="less">
  @import '../assets/css/show.less';
</style>

