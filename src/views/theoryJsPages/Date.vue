<template>
  <div>

    <h2 class="template-title-component">Date - дата и время</h2>

    <div class="template-discription-component">
    let date = new Date() - текущее время и дата <br>
    Number(date) вернет тайм стемп с 1970 до сегодня в милисекундах
    </div>

    <div class="template-code-component-wrapper">
    <code class="template-style-code">
      тайм стемп - милисекунды с 1970 года считается <br><br>

      примеры<br>

      getHours() <br>
      getMinutes() <br>
      getSecond() <br> <br>

      Data.now()- получение сразу тайм стемпа <br><br>


      дата из строки - const ts = Date.parse(string)  ts- time stemp<br><br>

      new Date('2019-04-25')
    </code>
    </div>

<a href="https://learn.javascript.ru/datetime"
 class="template-link-supporting-information" target="_blank">Ссылка на документацию Date</a>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>