<template>
  <div id="app">

    <Header class="main-header-book"/>

    <div class="wrapper-sidebar-main-content">
      <LeftSidebar class="wrapper-sidebar-main-content__left-sidebar"/>
      <router-view class="wrapper-sidebar-main-content__main-content" />
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
  return {

  }
},

}
</script>


<style lang="scss">



.main-header-book {
  height: 6vh;
  background:#1dc579;
  width:100%;
}

.wrapper-sidebar-main-content {
  display: flex;
}

.wrapper-sidebar-main-content__left-sidebar{
background: powderblue;
width: 20%;
 overflow-y: scroll; /* прокрутка по вертикали */
// overflow-x: hidden; cкрывает горизонтальный скролл
padding: 15px;
height: 94vh;

}

.wrapper-sidebar-main-content__main-content {
  width: 80%;
  height: 94vh;
  // background: plum;
 overflow-y: scroll; /* прокрутка по вертикали */
 padding: 15px;
}


// ADAPTIVE
@media (max-width: 768px) {

.wrapper-sidebar-main-content__main-content {
    width: 100%;
    height: 94vh;
    background: plum;
    overflow-y: scroll;
    padding: 15px;
}
}

</style>
