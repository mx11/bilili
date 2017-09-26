import Vue from 'vue'
import Router from 'vue-router'
import show from '@/components/show.vue'
import partition from '@/components/partition.vue'
import follow from '@/components/follow.vue'
import commond from '@/components/commond.vue'
import found from '@/components/found.vue'
import drama from '@/components/drama.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show',
      component: show
    },
    {
      path: '/show',
      component: show
    },
    {
      path: '/partition',
      name: 'partition',
      component: partition
    },
    {
      path: '/follow',
      name: 'follow',
      component: follow
    },
    {
      path: '/commond',
      name: 'commond',
      component: commond
    },
    {
      path: '/found',
      name: 'found',
      component: found
    },
    {
      path: '/drama',
      name: 'drama',
      component: drama
    }
  ]
})
