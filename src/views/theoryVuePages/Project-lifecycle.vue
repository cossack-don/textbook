<template>
  <div>
    <h2 class="template-title-component">Жизненный цикл Vue</h2>

    <a
      href="https://metanit.com/web/vuejs/1.13.php"
      class="template-link-supporting-information"
      target="_blank"
      >Ссылка на сайт-учебник Жизненный цикл Vue</a
    >

    Этапы жизненного цикла Vue
    иницилизация вью, new Vue 
    1) beforeCreate - когда произошла иницилизация new Vue  и вью готовится создать новое приложение
    2) Create - вью приложение уже создано на данном этапе, но на этом этапе не было создано еще html кода
    3) beforeMount - анализирует шаблон и собирается в ставить в точку в хода (div class app) 
      вью уже готовится  скомпилированный шаблон в ДОМ дерево, но оно еще НЕ вставилось
    4) mounted - когда скомпилированный шаблон вставлен в ДОМ дерево

    Вспомогательные этапы при изменениях в приложение
    5)beforeUpdate - перед тем что-то уже изменилось
    6)updated - изменения все закончены и то когда все уже изменилось

    7) beforeDestroy - отслеживание удаление компонента
    8) destroy - удаление компонента

    <img src="@/assets/img/lifeSicle.png" alt="" class="template-image">
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>