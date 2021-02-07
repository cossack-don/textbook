<template>
  <div>v-bind

привязка свойства из data() return {}  к элементам в блоке template
v-bind:src, v-bind:img 

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
          
div v-bind:href="nameLinkHref">Link div
короткая запись :href (двоеточие)

      </code>
    </div>



v-bind:[nameAttr] - записываем имя атрибута и берем из data

div v-bind:[nameAttr]="nameLinkHref">Link div


data() {
    return {
        nameLinkHref:'https://google.com',
        nameAttr:'href'
    }
}


https://ru.vuejs.org/v2/guide/class-and-style.html
ссылка на вью доку

классы
https://ru.vuejs.org/v2/guide/class-and-style.html

:class="[activeClass]" class="default-class" - не конфликтуют данные классы

пример 1

h1 :class="[activeClass]" class="default-class" hello /h1

пример 2
Если isActive будет true, то применится класс active-class, если false, то не будет применен класс
h1 :class="{'active-class' : isActive}" class="default-class" hello /h1

пример 3
с помощью свойства computed если много классов нужно менять и следить
h1 :class="classObj" class="default-class" hello /h1

пример 4
Можно комбенировать несколько свойств
h1 :class="[classObj, activeClass ]" class="default-class" hello /h1

data( {
  return {
    activeClass:'act' - название класса act
    isActive:true
  }
}

Если нужно много классов менять и следить за ними, нужен именно обьект чтобы возвращался
computed: {
  classObj() {
    return {
      "active-class2":isActive,
      error: !this.isActive
    }
  }
}

Стили - bind

h1 :style="{'font-size': fontSize + 'px'}" hello /h1

data() {
  fontSize:30
}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>