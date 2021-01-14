<template>
  <div id="app" @click="clickAreaAneCloseSidebar">

    <Header class="main-header-book"/>

    <div class="wrapper-sidebar-main-content" >
      <LeftSidebar class="wrapper-sidebar-main-content__left-sidebar"/>
      <router-view class="wrapper-sidebar-main-content__main-content"/>
    </div>

  </div>
</template>


<script>
import Header from '@/components/header/Header'
import LeftSidebar from '@/components/leftSidebar/LeftSidebar'


export default {
  name: 'App',
  components: {
    Header,
    LeftSidebar
  },

data() {
  return {}
},

methods: {

clickAreaAneCloseSidebar(e) {

  const sidebar = document.querySelector('.wrapper-sidebar-main-content__left-sidebar');
  const btnOpenSidebar = document.querySelector('.btn-open-sidebar');




if (document.documentElement.clientWidth < 768) {
  
if (!e.target.closest('.wrapper-sidebar-main-content__left-sidebar')) {
sidebar.classList.add("hide-block");
} 

}


if(e.target === btnOpenSidebar) {
  sidebar.classList.remove("hide-block")
}

},

}
}
</script>


<style lang="scss">


</style>
