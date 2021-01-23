<template>
  <div>
    <h2 class="template-title-component">Destructuring Деструктуризация массивов и обьектов</h2>
      

    <h3 class="template-title-mini-component">Деструкторизация нужно записать элементы массива в переменные и так же с обьектами</h3>

    <div class="template-text-component">
      Важен порядок в массиве <br><br>
      выводит по порядку массива<br>
      let nums = [29,30,21];<br>
      let [first, secind,therd] = nums <br>
      часто используют сплит <br><br>
      чтобы пропустить элемент массива используют [first, ,therd]<br>
      чтобы установить по умолчанию значение то [first, second,therd=50]<br>
      если 3 элемента не будет в массиве,выведется 50<br><br>

      let nums = [1,3,200,30,30]<br>
      let [num1,num2, ...rest] = nums <br>
       ...spread оператор,выводит остальную часть массива сразу(в виде массива) например [200,30,30]
    </div>



      <a href="https://learn.javascript.ru/destructuring"
          class="template-link-supporting-information" target="_blank">Ссылка на документацию Деструктуризация</a>

    <a href="https://codepen.io/impertubable/pen/JjRzdgB" target="_blank" class="template-link-code-pen">Пример на Code Pen</a>


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>