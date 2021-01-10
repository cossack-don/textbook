<template>
  <div>header-static
    <div style="margin-left:180px;" @click="slow">tagle sidebar mobile</div>
    <div class="btn-h">X</div>
    
    <router-link style="color:red;" to="/" >HOME</router-link>
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
    e.stopPropagation();
    const leftSidebar = document.querySelector('.wrapper-sidebar-main-content__left-sidebar');
    leftSidebar.style.display="block"
    let r = document.querySelector('.main-left-sidebar');
      

       if(!this.tagl) {
// this.$refs.mainLeftSidebar.style.width="10%";
//   this.$refs.leftSidebarIconsMobile.style.display="block";
//   this.$refs.leftSidebarComputer.style.display="none";
r.style.left="0%";
}
if(this.tagl) {
//   this.$refs.mainLeftSidebar.style.width="30%";
//   this.$refs.leftSidebarIconsMobile.style.display="none";
//   this.$refs.leftSidebarComputer.style.display="block";
  r.style.left="-25%";
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


</style>