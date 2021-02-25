<template>
  <div>
    <h2 class="template-title-component">v-bind</h2>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        v-bind привязка свойства из data() return {} к элементам в блоке template <br><br>
        v-bind:src, v-bind:img <br>
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        div v-bind:href="nameLinkHref">Link div короткая запись :href
        (двоеточие)
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
    v-bind:[nameAttr] - записываем имя атрибута и берем из data div <br>
    v-bind:[nameAttr]="nameLinkHref">Link div data() { return {<br>
    nameLinkHref:'https://google.com', nameAttr:'href' } } <br>
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
      https://ru.vuejs.org/v2/guide/class-and-style.html ссылка на вью доку классы <br><br>
      https://ru.vuejs.org/v2/guide/class-and-style.html :class="[activeClass]"<br><br>
      class="default-class" - не конфликтуют данные классы<br><br>
      </code>
    </div>

      <div class="template-code-component-wrapper">
      <code class="template-style-code">
        пример 1 h1 <br><br>
        :class="[activeClass]" class="default-class" hello /h1<br><br>
        
        пример 2 <br><br>
         Если isActive будет true, то применится класс active-class, если false, то не<br>
        будет применен класс h1 :class="{'active-class' : isActive}"<br>
        class="default-class" hello /h1<br><br>
        
        пример 3<br><br>
         с помощью свойства computed если<br>
        много классов нужно менять и следить h1 :class="classObj"<br>
        class="default-class" hello /h1 <br>
      </code>
    </div>

      <div class="template-code-component-wrapper">
      <code class="template-style-code">
      https://ru.vuejs.org/v2/guide/class-and-style.html ссылка на вью доку классы <br><br>
      https://ru.vuejs.org/v2/guide/class-and-style.html :class="[activeClass]"<br><br>
      class="default-class" - не конфликтуют данные классы<br><br>
      </code>
    </div>
    пример 4 Можно комбенировать несколько
    свойств h1 :class="[classObj, activeClass ]" class="default-class" hello /h1
    data( { return { activeClass:'act' - название класса act isActive:true } }
    
    Если нужно много классов менять и следить за ними, нужен именно обьект чтобы
    возвращался computed: { classObj() { return { "active-class2":isActive,
    error: !this.isActive } } } пример классы

    <!-- <!DOCTYPE html>
<html>
<head>
<title>Изучаем Vue.js</title>
<meta charset="utf-8" />
<style>
.region{
    background-color: #999;
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 10px;
}
.active{
    background-color:red;
}
</style>
</head>
<body>
<div id="app">
    <div class="region" v-bind:class="{active: isActive}" v-on:click="isActive=!isActive"></div>
    <div class="region"></div>
</div>
<script src="https://unpkg.com/vue"></script>
<script>
    var app = new Vue({
        el: "#app",
        data: {isActive : false}
    });
</script>
</body>
</html> -->

    Стили - bind h1 :style="{'font-size': fontSize + 'px'}" hello /h1 data() {
    fontSize:30 }
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>