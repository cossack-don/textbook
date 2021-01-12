<template>
  <div>

<div class="wz">
  <div style="margin-left:180px;" @click="btnClick" class="zzzz">XXX</div>
    <div class="btn-h">X</div>
    <router-link style="color:red;" to="/" ><img src="./img/logo_home.png" alt="" > </router-link>
    <router-link style="color:red;" to="/" ><img src="./img/main_logo.png" alt="" > </router-link>
 
</div>
<LeftSidebarq v-if="DROPDOWN_STATE" />
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
  ...mapActions(['TOGGLE_DROPDOWN']),
  
  btnClick() {
    // console.log(5)
    this.TOGGLE_DROPDOWN()
  },

},
computed: {
  ...mapGetters([
    'DROPDOWN_STATE'
  ]),

},
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


</style>