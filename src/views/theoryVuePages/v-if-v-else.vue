<template>
  <div>
      v-if-v-else

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

     template- псевдотег ( не рендерится в ДОМ )

пример 3 Выводит так же один дин, но другие элементы не показываются в доме и не выводятся из-за тега TEMPLATE
    template v-if="message === 1"
        div class="message" >если значение = 1 div
    template

    template v-else-if="message === 2">
        div class="message" >если значение = 2 div
    template

    template v-else>
        div class="message" >иначе (если не равно не 1 и не 2, выводить этот блок - див div
    template


 пример 4
v-show не работает с template, с v-else
 div v-show="show" div
показывает блок если show = true, если false, то скрывается,
 но остается в ДОМ Дереве и просто добавляют display:none; display:block;
 div


div class="name" v-if="hideInput">
label Name label
input type="text" placeholder="name" key="name"
div

div class="sername" v-else>
label Sername label
input type="text" placeholder="Sername" key="Sername"
div

button @click="hideInput = !hideInput">изменить инпут на другой button

ОБЪЕКТ ДАТА СО ВСЕМИ ПЕРЕМЕННЫЕ
      data() {
    return {
        messageTrue:true,
        message:1,
        show:true,
        hideInput:true
    }
}


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>