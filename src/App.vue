<template>
  <div id="app" @click="wq">

    <Header class="main-header-book" />

    <div class="wrapper-sidebar-main-content" >
      <LeftSidebar class="wrapper-sidebar-main-content__left-sidebar" />
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
methods: {
wq(e) {
  let sidebar = document.querySelector('.wrapper-sidebar-main-content__left-sidebar');
    let w = document.querySelector('.zzzz');



// if(document.getElementById('box').style.display == 'none')
  // if(sidebar.style.display == 'none') {
  //   console.log(3)
  // }

if (!e.target.closest('.wrapper-sidebar-main-content__left-sidebar')) {
  // if(sidebar.classList.contains('dn')) {
  //   return
  // }

sidebar.style.display = 'none';

// console.log(!e.target.closest('.wrapper-sidebar-main-content__left-sidebar'))
// elem.classList.add('kkk');
}
  if(e.target === w ) {
  sidebar.style.display = 'block';
}
}

}
}
</script>


<style lang="scss">

.dn{display: none;}

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

.wrapper-sidebar-main-content__left-sidebar {
  display: none;
}
}

</style>
