<template>
  <div>
      
    <h2 class="template-title-component">Try Catch - Обработка ошибок</h2>


      <div class="template-code-component-wrapper">
        <code class="template-style-code">
            Если не хотим прерывать работу программы, то поможет Try и Catch <br>
            сначало срабатывает трай, если нашла ошибку то трай пропускается и выполнится кетч <br><br>
          Пример<br>
          try {<br>
              ... code<br>
          } catch (error) {<br>
              error.name<br>
              error.message<br>
              error.stack<br>
          }<br>
        </code>
      </div>

        <div class="template-code-component-wrapper">
        <code class="template-style-code">
          Мы можем добавить свои ошибки <br><br>
          например<br>
          let error = new Error('bad tada')<br>

          выброс своей ошибки throw error<br>
          для одного раза , короткая запись throw new Error('message error')<br><br>

        try {<br><br>
            const input = prompt('enter your name')<br>

          const inputArray = input.split(' ');<br>
          создаем массив из слов через пробел<br><br>


              if(inputArray.length != 2) {<br>
              throw new Error('invalid input')<br>
          }<br><br>

        } catch (error) {<br>
            alert(error.message)<br>
        }
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