<template>
  <div>

    <h2 class="template-title-component">Функции в js (function, arrow function)</h2>

    <h3 class="template-title-mini-component">Обычная функция</h3>

    <div class="template-code-component-wrapper">
      <code class="template-style-code" >
        function sum(a, b, параметр) { <br>
          return a+b <br>
        }
      </code>
    </div>

    <h3 class="template-title-mini-component">Стрелочная функция</h3>

    <div class="template-code-component-wrapper">
      <code class="template-style-code" >
        const area = (a, b, параметр) => { <br>
          тело функции <br>
        }   
      </code>
    </div>

    <div class="template-text-component">
       Стрелочной функцией можно пользоваться после её объявления, а не как обычной, в любом месте<br>

      Должна быть объявлена имя переменной обязательно для стрелочной функции
    </div>
почитать получше про нее и видео добавить + полезные примеры и ссылки web dev, как передавать анонимные стрелочные и тд, больше примеров


    <h3 class="template-title-mini-component">Область видимости функций</h3>
    <div class="template-text-component">
      Блочная,внутри функции и внешне(глобальная)
    </div>

    <h3 class="template-title-mini-component">Замыкания</h3>

    <div class="template-text-component">
     Одна функция внитри другой и внитри них объявлена общая переменная
    </div>  


    <div class="template-code-component-wrapper">
      <code class="template-style-code" >
        Пример <br><br>
        function fun() { <br>
          let message = 'hello';<br><br>

          return function() { <br>
            console.log(message); <br><br>
          }
        }
      </code>
    </div>

<h3 class="template-title-mini-component">Асинхронные операции</h3>

    <div class="template-code-component-wrapper">
      <code class="template-style-code" >
        Есть синхронные и асинхронные операции <br><br>

        запрос на сервер асинхронные в основном(в фоне, не блокируют программу)<br>
        выполняется через какое-то время, например<br><br>

          function counter(from, to) { <br>
            let number = from;<br><br>

            const id = setInterval(() => {<br>
              console.log(number);<br><br>

              if(number == to) {<br>
                clearInterval(id);<br>
              } else {<br>
                  number++;<br>
              }<br>
              <br>
            }, 1000)
          }

        <a href="https://codepen.io/impertubable/pen/OJRGogm?editors=0011" target="_blank" class="template-link-code-pen">Пример на Code Pen</a>
      </code>
      
    </div>

 
 <h3 class="template-title-mini-component">Колл бек функции</h3>


    <div class="template-code-component-wrapper">
      <code class="template-style-code" >
        выполнить действие после асинхронной операции как завершится, используют колл бек функции <br><br>

        (в идеале нужно - отправился запрос на сервер, получили ответ, обработчик сработал)<br><br>

        много калл беков вкладывать - плохая практика<br><br>
      </code>
    </div>

      <div class="template-code-component-wrapper">
      <code class="template-style-code" >
            имитация запроса к серверу<br>
            ответ от сервера через 2 секунды<br><br>

            const request = (callback) => {<br>
              console.log('request');<br><br>

              setTimeout(() => {<br>
                console.log('response');<br>
                const data = {text:"hellow dannie s servera"}<br>
                callback(data)<br>
              }, 2000)<br>
            }<br><br>

            обработка данных после получения с сервера<br>

            const handler = (data) => {<br>
              console.log('handler', data)<br>
            }<br><br>

            request(handler);
      </code>
    </div>

калл бекс тоже подучить получше

 <h3 class="template-title-mini-component">Промисы</h3>



 <h3 class="template-title-mini-component">Контекст функции</h3>

контекст функции см

call apply bind см и записывать
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>