<template>
<!-- тут работает класс .main-header-book он присвоен компоненту header vue для обертки главной-->
  <div>
<!-- конец тут работает класс .main-header-book он присвоен компоненту header vue для обертки главной-->

<div  @click="btnClickOpenSidebar" class="btn-open-sidebar">open sidebar</div>
    
<div class="header-slogan">Freamwork drive learning</div>

<router-link to="/" class="link-logo"><img src="./img/main_logo.png" alt="" class="img_logo"> </router-link>


</div>
</template>

<script>

export default {
  components: {
  
  },

  data() {
    return {}
  },

  methods: {

    btnClickOpenSidebar() {
      const sidebar = document.querySelector('.wrapper-sidebar-main-content__left-sidebar');
      sidebar.classList.add("show-block")
    },

  }


}
</script>

<style>

</style>