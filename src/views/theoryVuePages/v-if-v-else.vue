<template>
  <div>
<h2 class="template-title-component">v-if-v-else</h2>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
          пример-1 <br><br>
        div class="message" v-if="messageTrue">если значение true div <br>
        div class="message" v-else>иначе (messageTrue значение равно false) div
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        пример-2<br><br>
        div class="message" v-if="message === 1">если значение = 1 div <br>
        div class="message" v-else-if="message === 2">если значение = 2 div <br>
        divГ class="message" v-else>иначе (если не равно не 1 и не 2, выводить этот блок - див div
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        template- псевдотег ( не рендерится в ДОМ ) <br><br>

       <p style="color:red;">пример 3 Выводит так же один дин, но другие элементы не показываются в доме и не выводятся из-за тега TEMPLATE</p><br>

        template v-if="message === 1"<br>
            div class="message" >если значение = 1 div <br>
        template<br><br>

        template v-else-if="message === 2"><br>
            div class="message" >если значение = 2 div <br>
        template<br><br>

        template v-else><br>
            div class="message" >иначе (если не равно не 1 и не 2, выводить этот блок - див div <br>
        template
      </code>
    </div>

<h3 class="template-title-mini-component">template- псевдотег ( не рендерится в ДОМ )</h3>
     
    <div class="template-code-component-wrapper">
      <code class="template-style-code">
    пример 3 <br><br>
     Выводит так же один дин, но другие элементы не показываются в доме и не выводятся из-за тега TEMPLATE<br><br>
        template v-if="message === 1"<br>
            div class="message" >если значение = 1 div<br>
        template<br><br>

        template v-else-if="message === 2"><br>
            div class="message" >если значение = 2 div<br>
        template<br><br>

        template v-else><br>
            div class="message" >иначе (если не равно не 1 и не 2, выводить этот блок - див div<br>
        template<br>
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        пример 4 <br><br>
        v-show не работает с template, с v-else<br>
        div v-show="show" div<br><br>
        показывает блок если show = true, если false, то скрывается,<br>
        но остается в ДОМ Дереве и просто добавляют display:none; display:block;<br>
        div<br><br>


        div class="name" v-if="hideInput"><br>
        label Name label<br>
        input type="text" placeholder="name" key="name"<br>
        div<br><br>

        div class="sername" v-else><br>
        label Sername label<br>
        input type="text" placeholder="Sername" key="Sername"<br>
        div<br><br>

        button @click="hideInput = !hideInput">изменить инпут на другой button<br><br>

        ОБЪЕКТ ДАТА СО ВСЕМИ ПЕРЕМЕННЫМИ<br><br>
              data() {<br>
            return {<br>
                messageTrue:true,<br>
                message:1,<br>
                show:true,<br>
                hideInput:true<br>
            }<br>
        }<br>
      </code>
    </div>




  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>