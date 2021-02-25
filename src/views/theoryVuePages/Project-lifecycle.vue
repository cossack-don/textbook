<template>
  <div>
    <h2 class="template-title-component">Жизненный цикл Vue</h2>

    <a
      href="https://metanit.com/web/vuejs/1.13.php"
      class="template-link-supporting-information"
      target="_blank"
      >Ссылка на сайт-учебник Жизненный цикл Vue</a
    >
    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        Этапы жизненного цикла Vue <br><br>
        0) иницилизация вью, new Vue  <br>
        1) beforeCreate - когда произошла иницилизация new Vue  и вью готовится создать новое приложение<br>
        2) Create - вью приложение уже создано на данном этапе, но на этом этапе не было создано еще html кода<br>
        3) beforeMount - анализирует шаблон и собирается в ставить в точку в хода (div class app) <br>
          вью уже готовится  скомпилированный шаблон в ДОМ дерево, но оно еще НЕ вставилось<br><br>
        4) mounted - когда скомпилированный шаблон вставлен в ДОМ дерево<br><br>

        Вспомогательные этапы при изменениях в приложение<br><br>
        5) beforeUpdate - перед тем что-то уже изменилось<br>
        6) updated - изменения все закончены и то когда все уже изменилось<br>

        7) beforeDestroy - отслеживание удаление компонента<br>
        8) destroy - удаление компонента<br><br>
      </code>
    </div>


    <img src="@/assets/img/lifeSicle.png" alt="" class="template-image">
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>