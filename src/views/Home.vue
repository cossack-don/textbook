<template>
  <div>

    <h2 class="template-title-component">Полезные советы</h2>
    <div class="template-code-component-wrapper">
      <ul>
        <li><span class="template-marker-text-red-bold">Не распыляться , учить одно</span></li>
        <li><span class="template-marker-text-blue-bold">Не спрашивать Леню</span></li>
        <li><span class="template-marker-text-red-bold">Смотреть как пишут опытные прогеры код и где косячут сколько думают</span></li>
        <li><span class="template-marker-text-blue-bold">Учить теорию и сразу писать код , лучше небольшими порциями</span></li>
        <li><span class="template-marker-text-red-bold">Мотивация и отдых</span></li>
        <li><span class="template-marker-text-blue-bold">Не доводить до идеала, делать чтобы просто поначалу работало а потом рефакторить</span></li>
      </ul>
    </div>


      <h2 class="template-title-component">Cписок основных задач</h2>
      <div class="template-code-component-wrapper">
        <ul>
          <li><span class="template-marker-text-red-bold">Верстка брендов, доделать</span></li>
          <li>СТРУКТУРУ ПРОЕКТА СДЕЛАТЬ НОРМ И ОЧИСТИТЬ</li>
          <li>Смотреть уроки по JS, Vue и делать конспект</li>
          <li>СМ VUE+VUEX КУРС</li>
        </ul>
      </div>

      <h2 class="template-title-component">Алгоритм добавление компонента теории в код</h2>
      <div class="template-code-component-wrapper">
        <ul>
          <li>1-Добавить название компонента с шасширением компонент.vue в папку views => theoryvuepages</li>
          <li>2-Добавить название компонента в массив store=> arrayNameMiniProd(vue,js)</li>
          <li>3-Добавить маршрут в router component: () => import(/* webpackChunkName: "about" */ "@/views/Home")</li>
        </ul>
      </div>




<!--  -->
<h1>Задачи по проекту и скиллам, и другие дела по IT</h1>

<div class="wrapper-task">
      
<ul class="red-bg-ul">

  <li>---Сделать адаптив и убрать баги с sidebar+header+main content.(нужно headef position-stiky;sidebar-fixed; main 100vh или 100% и убрать скролл дополнительный, и убрать лишнее 90,10vh https://codepen.io/impertubable/full/xxENvxJ пример</li>
  <li>---Сделать нормальную структуру и названия SPA, а потом уже писать остальное</li>
  <li>---Cмотреть актуальный стек вакансий на хх и с чего спрос</li>
  <li>---Скинуть на ноут и на работе проект БИМ и job SPA чтобы от туда брать шаблоны решений</li>
  <li>---Смотреть курс Vue+Vuex Udemy</li>
  <li>Научиться передавать события и общаться через компоненты между собой</li>
  
</ul>
<!--  -->
<ul class="green-bg-ul">

  <li>---Разобрать гитхабы все</li>
  <li>---Перекинуть все на SSD</li>
  <li>Сертификаты it</li>
  <li>---Разобрать Портфолио и сделать одно нормальное</li>

</ul>

  <!--  -->
<ul class="yellow-bg-ul">
  <li>---Сделать тестовую продакшен версию SPA</li>
  <li>---Посмотреть как в проекте БИМ с роутами, если их много, как оптимизировать</li>
  <li>---Анимацию доделать</li>
  <li>Кнопка вверх при скроле</li>
</ul>
<!--  -->

</div>


<div class="template-discription-component">
  .split(' ').join('-') split осуществляет разбиение строки в массив по указанному разделителю.
  join объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива
</div>

  </div>
</template>

<script>
export default {
  methods: {
  },
  computed: {

  }

}
</script>

<style>
.wrapper-task{
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  margin-top: 20px;
}
.green-bg-ul {
  background: #d1e7dd;
  padding: 10px;
  padding-left: 15px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 10px;
}
.red-bg-ul {
  background: #f8d7da;
  padding: 10px;
  padding-left: 15px;
  border-radius: 15px;
}

.yellow-bg-ul {
  background: #fff3cd;
  padding: 10px;
  padding-left: 15px;
  border-radius: 15px;
}

li {
  margin-bottom: 10px;
}
</style>