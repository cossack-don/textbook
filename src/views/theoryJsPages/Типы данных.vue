<template>
  <div>

  <h2 class="template-title-component">Типы данных</h2>

  <div class="template-code-component-wrapper">

    <code class="template-style-code">
      <span class="template-marker-text-red ">String</span> - строка " " или ' ' <br>
      <span class="template-marker-text-red ">Шаблонные строки</span> - ` ${ переменная,функция и т.д.} `
      <span class="template-marker-text-red ">Number</span> - число <br>
      <span class="template-marker-text-red ">NaN</span> - не число. "text" * 256 выдаст NaN (число умножать на строку нельзя) <br>
      <span class="template-marker-text-red ">Infinity</span> - бесконечность. 256 / 0 (на ноль делить нельзя, выдаст Infinity)
      <span class="template-marker-text-red ">Boolean</span> - логический тип (true , false)
    </code>

  </div>


  <div class="template-text-component">

    -Cтроки можно складывать "string-1" + "string-2" <br>
    -Длинна строки string.length отчет с 1
    <div class="template-line"></div>
    -Остаток от деления (числа) 5 % 4 = 1,  12 % 7 = 5,  15 % 3 = 0 <br>
    -Увелечение числа на 1 или уменьшение ++ и -- <br>
    -Чтобы перевести СТРОКУ в ЧИСЛО ставят + , например  let a ="2" + "2" => +a - будет число,а не строка
    <div class="template-line"></div>
    -Boolean используют first && second (и), first || second (или)
    <div class="template-line"></div>
    <span class="template-marker-text-red ">Оператор &&</span>
    <img src="@/assets/img/and.jpg" alt="" class="template-image">
    <span class="template-marker-text-red ">Оператор ||</span>
    <img src="@/assets/img/or.jpg" alt="" class="template-image">
  </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>