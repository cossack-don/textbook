<template>
  <div>
      мало инфы по данному уроку
      оф дока 
      https://ru.vuejs.org/v2/guide/computed.html
      computed-watch

    p Hello {firstName || 'default' }

с помощью computed p Hello { fullName }


      data() {
          return {
              firstName:""
          }
      }

    написать что делает компьютед - ? определение
    кешируется
у компьютед есть геттеры и сеттеры
      computed: {
          fullName() {
              return ` ${this.firstName  || 'default'} `
          }
      }
    следит за изменением данных watch
      watch: {
         firstName: 
      }


$set, $delete, $get - ознакомиться


watch - отслеживает данные, например инпута
  <!-- template: `
  <div class="counter">
    <div class="counter-value">
     
    </div>
    <input v-model="go">
    <button>Increment</button>
  </div>
  `,
  
  data() {
    return {
      go: 0
    }
  },

  watch:{
    go(value) {
      console.log(value)
    }
  }
} -->
  </div>
</template>

<script>


export default {

}
</script>

<style>

</style>