<template>
  <div>

      <h2 class="template-title-component">Сookies</h2>
      <div class="template-discription-component">
        КУКИ - это небольшие строки данных которые хранятся в браузере , устанавливают сервером и при запросе сохраняются или изменяются
      </div>
      
      <div class="template-code-component-wrapper">
        <code class="template-style-code">
          с JS document.cookies = "user=Jonh" можно перезаписывать значения <br><br>

          куке можно установить время жизни max-age с помощью js<br><br>
          пример<br>
          document.cookies = "user=jon;max-age=3600 (секунды)";
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