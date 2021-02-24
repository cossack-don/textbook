<template>
  <div>
<h2 class="template-title-component">Spread REST operators</h2>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">

      </code>
    </div>
      оператор разворачивания и оператор сварачивания

      spread - разворот 

      const arr1 = [9,3,51]
      const arr2 = [1,2,3,4]
      let a = [...arr1, ...arr2]
      console.log(a)

      вернет [9,3,51,1,2,3,4] вместо двух массивов

Пример 2
      const arr = [9,3,51]
      function sum(a, b, c) {
          return a+b+c
      }
старые варианты
      sum(arr[0],arr[1],arr[2]);
      sum.apply(null,arr);
новый вариант
      sum(...arr)

      пример 3

      const A = {
          a:'one',
          b:'two'
      };

      
      const B = {
          a:'owwwwne',
          b:'t33333wo'
      };

      вариант с let c = Object.assing(B,A)
      новый вариант let c = {
          ...A,
          ...B
      }


      REST operators

      function res(arg,arg3,arg31, ...REST) {
          console.log(arg,arg3,arg31, REST);
      }

   res(1,2,3,4,5,6,3)

   вернет 1(1-й аргумент) 2(2-йаргумент) 3(3-й аргумент) (4) [ 4, 5, 6, 3 ]
   с помощью цикла можно обращаться ко всем свойствам массива

    <a
      href="https://www.youtube.com/watch?v=MeLPG4NCB6I&list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD&index=4"
      class="template-link-supporting-information"
      target="_blank"
      >Ссылка на Yotobe Spread, REST операторы</a
    >
   
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>