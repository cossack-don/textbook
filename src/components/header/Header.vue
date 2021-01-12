<template>
  <div>

<div class="wz">
  <div style="margin-left:180px;" @click="slow" class="zzzz">XXX</div>
    <div class="btn-h">X</div>
    <router-link style="color:red;" to="/" ><img src="./img/logo_home.png" alt="" > </router-link>
    <router-link style="color:red;" to="/" ><img src="./img/main_logo.png" alt="" > </router-link>
 
</div>

  </div>
  
</template>

<script>


export default {

  data() {
    return {
      tagl:true
    }
  },
methods: {
  slow(e) {
    // e.stopPropagation();
    const leftSidebar = document.querySelector('.wrapper-sidebar-main-content__left-sidebar');
    leftSidebar.style.display="block"
    let r = document.querySelector('.main-left-sidebar');
      // if(leftSidebar.style.display == "block") {
      //   this.tagl = !this.tagl
      // }
// if()
       if(!this.tagl) {

// r.style.left="0%";
}
if(this.tagl) {

  // r.style.left="-25%";
//   //  this.$refs.taggleLeftSidebarMobile.style.display="block";
}
this.tagl = !this.tagl

    

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


@media (max-width: 768px) {
  .btn-h {
    display: block;
  }

}

.wz {
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
}
.zzzz {
  background:red;
}

.main-header-book {
  background:green;
}
</style>