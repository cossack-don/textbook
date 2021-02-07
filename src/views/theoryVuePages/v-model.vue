<template>
  <div>
      Двунаправленное связывание данных. v-model
      https://ru.vuejs.org/v2/guide/forms.html


input v-model = "text" -  {text}

input type="checkbox" v-model = "checkbox" - {checkbox}


input type="checkbox" v-model = "checkboxArray"  value"one"
input type="checkbox" v-model = "checkboxArray"  value"two"
input type="checkbox" v-model = "checkboxArray"  value"three"

{checkboxArray} покажется массив, где стоит галочка у чекбокса


select v-model="select"
option value audi
option value bmv

{select}

data() {
    return {
        text:'',
        checkbox:false,
        checkboxArray:[],
        select:''
    }
}

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>