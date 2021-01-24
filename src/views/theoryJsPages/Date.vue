<template>
  <div>

    <h2 class="template-title-component">Date</h2>

    <div class="template-discription-component">
    ОПИСАНИЕ, ОПРЕДЕЛЕНИЕ
    </div>

    <div class="template-code-component-wrapper">
    <code class="template-style-code">
        function sum(a,b) { <br>
        return a+b <br>
        }
    </code>
    </div>


data - дата и время

let date = new Date() - текущее время и дата
Number(date) вернет тайм стемп с 1970 до сегодня в милисекундах

тайм стемп - милисекунды с 1970 года считается

примеры

getHours()
getMinutes()
getSecond()

Data.now()- получение сразу тайм стемпа
https://learn.javascript.ru/datetime

дата из строки - const ts = Date.parse(string)  ts- time stemp

new Date('2019-04-25')
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>