<template>
  <div>
      Циклы for of, for in для массивов

     массив let arr = [ 'Mri', 'Lux', 'Jan', 'Den']

FOR OF - возвращает сразу значение из массива  'Mri', 'Lux', 'Jan', 'Den'
for(item of arr ) {
  console.log(item)
}

FOR IN возвращает индексы значений, т.е. 0,1,2,3 в зависимости от длинны массива
for(item in arr) {
  console.log(item)
}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>