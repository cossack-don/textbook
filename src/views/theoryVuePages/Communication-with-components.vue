<template>
  <div>

      <h2 class="template-title-component">Vue communication-with-components - общение между компонентами с помощью EMIT  $emit</h2>
      
    <h3 class="template-title-mini-component">Первый component</h3>
      
        <div class="template-code-component-wrapper">
            <code class="template-style-code">
                button @click="onClick" send event /button <br><br>
                data() {<br>
                    return {<br>
                        count:0<br>
                        }<br>
                    }<br><br>

                methods: {<br>
                    onClick() {<br>
                        this.count += 1; - увеличивает счетчик на 1 при клике<br><br>

                        Отправляем событие в другой компонент (2-й компонент) <br>
                         onChangeCounter- произвольное название<br>
                        this.$emit('onChangeCounter', this.counter);<br>

                    }<br>
                }<br>
            </code>
        </div>    

       

      







    <h3 class="template-title-mini-component">Второй component - куда передаем событие</h3>
        <div class="template-code-component-wrapper">
            <code class="template-style-code">
                div <br><br>

                    Чтобы отловить событие из 1-ого компонента, пишем событие @<br>
                    и имя события которое указывал при передачи,а именно onChangeCounter указывал<br><br>
                    
                    name-component @onChangeCounter="onChanceCounterInComponents"<br><br>

                /div <br><br>

                script<br><br>
                подключение компонента import name-component (1-ый компонент)<br><br>

                methods: {<br>
                    onChanceCounterInComponents(value) {<br>
                        console.log("in 2 component", value);<br>
                    }<br>
                }<br>
            </code>
        </div>
      


https://ru.vuejs.org/v2/guide/components.html
https://ru.vuejs.org/v2/guide/components-custom-events.html
https://metanit.com/web/vuejs/4.11.php

Просто генерирует событие, на которое может подписаться его родительский компонент.
Заметьте что такие события не "всплывают" как события в js, это только для общения между двумя компонентами. Что на практике будет означать что если куда то дальше надо передать то надо снова эмитеть, что не совсем удобно.
Но это не сильно надо, т.к. все равно все хранят данные во vuex, а не гоняют данные туда сюда
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>