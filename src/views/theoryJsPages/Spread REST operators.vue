<template>
  <div>
<h2 class="template-title-component">Spread и REST operators</h2>
<h3 class="template-title-mini-component">Оператор разворачивания и оператор сварачивания</h3>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
          Spread - разворот  <br><br>

          const arr1 = [9,3,51]<br>
          const arr2 = [1,2,3,4]<br>
          let a = [...arr1, ...arr2]<br>
          console.log(a)<br><br>

          вернет [9,3,51,1,2,3,4] вместо двух массивов
      </code>
    </div>
     
    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        Пример 2 <br><br>
              const arr = [9,3,51]<br>
              function sum(a, b, c) {<br>
                  return a+b+c<br>
              }<br><br>

        старые варианты<br><br>
              sum(arr[0],arr[1],arr[2]);<br>
              sum.apply(null,arr);<br><br>

        новый вариант<br>
              sum(...arr)<br>
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
            пример 3 <br><br>

            const A = {<br>
                a:'one',<br>
                b:'two'<br>
            };<br><br>

            
            const B = {<br>
                a:'owwwwne',<br>
                b:'t33333wo'<br>
            };<br><br>

            вариант с let c = Object.assing(B,A)<br><br>
            новый вариант let c = {<br>
                ...A,<br>
                ...B<br>
            }<br>
      </code>
    </div>


    <div class="template-code-component-wrapper">
      <code class="template-style-code">

          REST operators <br><br>

          function res(arg,arg3,arg31, ...REST) {<br>
              console.log(arg,arg3,arg31, REST);<br>
          }<br><br>

      res(1,2,3,4,5,6,3)<br>

      вернет 1(1-й аргумент) 2(2-йаргумент) 3(3-й аргумент) (4) [ 4, 5, 6, 3 ]<br>
      с помощью цикла можно обращаться ко всем свойствам массива<br>
      </code>
    </div>

    <a
      href="https://www.youtube.com/watch?v=MeLPG4NCB6I&list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD&index=4"
      class="template-link-supporting-information"
      target="_blank"
      >Ссылка на Yotobe Spread, REST операторы</a>
   
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>