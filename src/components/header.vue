<template>
  <div class="headerpage">
    <div class="head" :style="{backgroundColor: skinColor}">
      <div class="head-info">
        <i class="fa fa-bars" aria-hidden="true" @click="toggleSidebar"></i>
        <img src="../assets/logo.png">
        <span>
          Admin
        </span>
        <span class="head-icon">
          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
          <i class="fa fa-download" aria-hidden="true"></i>
          <i class="fa fa-search" aria-hidden="true" @click="toggleSearch"></i>
        </span>
      </div>
      <div class="head-list">
        <ul>
          <li>
            <router-link to="/show">首页</router-link>
          </li>
          <li>
            <router-link to="/partition">分区</router-link>
          </li>
          <li>
            <router-link to="/follow">关注</router-link>
          </li>
          <li>
            <router-link to="/commond">推荐</router-link>
          </li>
          <li>
            <router-link to="/found">发现</router-link>
          </li>
          <li>
            <router-link to="/drama">番剧</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <transition name="fold">
      <div class="b-sider" v-if="sidebarShow">
        <div class="b-sider-user" :style="{backgroundColor: skinColor}">
          <span class="b-user-info">
            <img src="../assets/logo.png">
            <p>Admin</p>
          </span>
          <span class="b-user-icon">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <i class="fa fa-moon-o" aria-hidden="true" @click="changeColor('#35495e')" v-if="isShowSkin"></i>
            <i class="fa fa-sun-o" aria-hidden="true" @click="changeColor('#41b883')" v-if="!isShowSkin"></i>
          </span>
        </div>
        <div class="b-siderItem">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>首页
            </li>
            <li>
              <i class="fa fa-download" aria-hidden="true"></i>离线缓存
            </li>
            <li>
              <i class="fa fa-bookmark" aria-hidden="true"></i>我的收藏
            </li>
            <li>
              <i class="fa fa-history" aria-hidden="true"></i>历史记录
            </li>
            <li>
              <i class="fa fa-diamond" aria-hidden="true"></i>会员积分
            </li>
            <li>
              <i class="fa fa-wrench" aria-hidden="true"></i>设置与帮助
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-show="sidebarShow" @click="toggleSidebar"></div>
    </transition>
    <transition name="slide">
      <div class="search" v-if="searchShow">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        <input type="text" placeholder="输入搜索内容">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-show="searchShow" @click="toggleSearch"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarShow: false,
      searchShow: false,
      isShowSkin: true
    }
  },
  computed: {
    skinColor() {
      return this.$store.state.skinColor;
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarShow = !this.sidebarShow
    },
    toggleSearch() {
      this.searchShow = !this.searchShow
    },
    changeColor(color){
      this.$store.commit('changeColor', color)
      this.isShowSkin = ! this.isShowSkin
      localStorage.skinColor = color;
    }
  }
}
</script>
