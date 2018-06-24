<template>
  <div id="app">
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <router-link tag="li" :to="menu.path">
          <a>{{menu.label}}</a>
        </router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menus: [
        { id:0, label: 'dashboard',path:'/' },
        { id:1, label: '欢迎页面',path:'/HelloWorld' },
        { id:2, label: '整个d项目' ,path:'/'},
        { id:3, label: '综合能耗在线' ,path:'/onlineEnergyMonitor'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
// @import "../assets/less/theme-default.less";
</style>
