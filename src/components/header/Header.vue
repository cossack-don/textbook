<template>
  <div>

<!-- <div class="wz"> -->
  <!-- @click="btnClick" -->
  <div  @click="m" class="zzzz">open sidebar</div>
    
    <!-- <router-link style="color:red;" to="/" ><img src="./img/logo_home.png" alt="" > </router-link> -->
    
 
<!-- </div> -->
<div>
<div class="hz">Freamwork drive learning</div>
</div>
<div>
<router-link style="color:red;" to="/" ><img src="./img/main_logo.png" alt="" class="img_logo"> </router-link>
</div>
  </div>
  
</template>

<script>
import LeftSidebarq from '@/components/leftSidebar/LeftSidebar'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    
    LeftSidebarq
  },
  data() {
    return {
   
    }
  },
  methods: {
    m() {
       let sidebar = document.querySelector('.wrapper-sidebar-main-content__left-sidebar');
    let w = document.querySelector('.zzzz');
let main = document.querySelector('.wrapper-sidebar-main-content__main-content')

// w.classList.remove("dnsq");
// w.classList.add("dns");
sidebar.classList.add("db")

    }
  }


}
</script>

<style>
.btn-h {
  width: 30px;
  height: 30px;
  background:#1dc579;
  border-radius: 50%;
  display: none;
}

.hz {
  font-family: 'Potta One', cursive;
  color: yellow;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 2px;
}

@media (min-width: 768px) {
.zzzz {
display: none;

}
}
/* .wz {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
} */
.zzzz {
  background:red;
}

.main-header-book {
  display: flex;
  justify-content: space-between;
  align-items: center;
    padding-left: 15px;
  padding-right: 15px;
}

.img_logo {
width: 65%;
height: auto;
padding: 5px;
border-radius: 50%;
}
.img_logo:hover {
  transition: 0.5s;
  background: powderblue;
  width: 70%;
  padding: 5px;

}
.img_logo:active {
background: #71bec9;

}

</style>