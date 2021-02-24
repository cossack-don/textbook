<template>
  <div>
      
  <h2 class="template-title-component">Циклы for of, for in для массивов</h2>
      <div class="template-code-component-wrapper">
      <code class="template-style-code">
        Массив let arr = [ 'Mri', 'Lux', 'Jan', 'Den'] <br><br>

        FOR OF - возвращает сразу значение из массива  'Mri', 'Lux', 'Jan', 'Den'<br>
        for(item of arr ) {<br>
          console.log(item)<br>
        }<br><br>

        FOR IN возвращает индексы значений, т.е. 0,1,2,3 в зависимости от длинны массива<br>
        for(item in arr) {<br>
          console.log(item)<br>
        }<br>
      </code>
    </div>
     


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>