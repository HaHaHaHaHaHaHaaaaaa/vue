<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="menus" />
      <main class="main">
        <breadcrumb :list="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '../components/'
/* import Axios from 'axios'; */
import http from '../http'
export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  data() {
    return {
      nav: nav.items,menus:[]
    }
  },
  computed: {
    name() {
      return this.$route.name
    },
    list() {
      return this.$route.matched
    }
  }, 
  mounted: function() {
    http.get('http://localhost:3000/vuemenu/getmenus',res=>{
      this.menus=res.data;
    })
    /*  Axios.get('http://localhost:3000/vuemenu/getmenus').then(res => {
      console.log(res);
      this.menus = res.data;
    }).catch(err => console.log(err)) */
  }
}
</script>
