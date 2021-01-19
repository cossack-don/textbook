<template>
  <div>Destructuring Деструктуризация массивов и обьектов  <br><br>

      пересмотреть видео и сделать конспект
    <!-- <div class="template-wrapper-link-supporting-information"> -->
      <!-- <span class="template-wrapper-title-supporting-information">Ссылка на более подробную информацию</span> -->
           <a href="https://learn.javascript.ru/destructuring"
       class="template-link-supporting-information" target="_blank">Ссылка на документацию Деструктуризация</a>
    <!-- </div> -->
 <a href="https://codepen.io/impertubable/pen/JjRzdgB" target="_blank" class="template-link-code-pen">Пример на Code Pen</a>


 деструкторизация нужно записать элементы массива в переменные и так же с обьектами

важен порядок в массиве
выводит по порядку массива
 let nums = [29,30,21];
 let [first, secind,therd] = nums
 часто используют сплит

 чтобы пропустить элемент массива используют [first, ,therd]
 чтобы установить по умолчанию значение то [first, second,therd=50]
 если 3 элемента не будет в массиве,выведется 50

let nums = [1,3,200,30,30]
 let [num1,num2, ...rest] = nums 

 ...spread оператор,выводит остальную часть массива сразу(в виде массива) например [200,30,30]
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>