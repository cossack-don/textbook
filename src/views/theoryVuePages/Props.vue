<template>
  <div>
      <h2 class="template-title-component">Props vue (Пропсы - свойства , коллекция значений которые ассоциативны с компонентом)</h2>
  
  1 компонент 
  props:{
    title: {
      type:String
      default:'default title' если title -string не принялся или не установлен, подставится default-title(его значение)
      required:true или false (обязательные параметры или нет)
      validator(value) {
        console.log(value)
        return value.name; - true
        если нету value.name - вернет ошибку - false
      }  
    } 
  }

  https://ru.vuejs.org/v2/guide/components-props.html

  подробнее изучить и описать
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>