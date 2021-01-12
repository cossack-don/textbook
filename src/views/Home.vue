<template>
  <div>
    <p>Добавить название компонента в массив store=> arrayNameMiniProd(vue,js)</p>
    <p>добавить компонент.vue в папку views => theoryvuepages </p>
    <p>добавить маршрут в router component: () => import(/* webpackChunkName: "about" */ "@/views/Home")</p>
    1. СТРУКТУРУ ПРОЕКТА СДЕЛАТЬ НОРМ И ОЧИСТИТЬ <br>
    2. СМ КУРС JS И ЗАЛИТЬ НА ЯНДЕКС ДИСК + КОНСПЕКТ
    <br>
    3.СМ VUE+VUEX КУРС
    <br><br>
<h1>Учить фреймворк а остальной джс по хожу, так как с фрейма спрос на рынке</h1>
<h1>Freamword drive learning</h1>
<li style="color:red; font-weight:bold">работа -- сверстать блок бренды</li>
<div class="z">
      

      <ul>
      
      
      <li>---Сделать нормальную структуру и названия SPA, а потом уже писать остальное</li>
      <li>---Сделать анализ сообщений и курсов что скинул в вк</li>
      <li>--- Сделать список полезных каналов ютуб и курсов(lern js , udemy minin js ect.</li>
      <li>---Делать SPA</li>
      <li>---Смотреть курс JS+ конспект в SPA</li>
      <li>---Cмотреть актуальный стек вакансий на хх и с чего спрос</li>
      <li>---Скинуть на ноут и на работе проект БИМ и job SPA чтобы от туда брать шаблоны решений</li>
      <li>---Смотреть курс Vue+Vuex Udemy</li>
      
<!-- <img src="../assets/img/icon.jpg" alt="" > -->
      <br><br>
      <li>---Разобрать гитхабы все</li>
      <li>---Перекинуть все на SSD</li>
      <li>сертификаты it</li>
      <li>---Разобрать Портфолио и сделать одно нормальное</li>
      <li>---</li>
      <li>---</li>
      <li>---</li>
      <li>---</li>
  </ul>

  <!--  -->
  <ul style="background:pink;">
    <li><p>ПОДКЛЮЧИТЬ СТИЛИ ОТДЕЛЬНЫМ ФАЙЛОС ЦСС ИМПОРТ И РЕСЕТЫ</p></li>
    <li>---Сделать тестовую продакшен версию SPA</li>
    <li>---Доделать адаптивность</li>
    <li>---доделать клик на мейн и шапку чтобы плавно уходил сайтбар при мобийл версии Возможно нужно будет
      взаимодействие с vuex как в job spa
    </li>
    <li>---Вынести справочники в vuex</li>
    <li>---Посмотреть как в проекте БИМ с роутами, если их много, как оптимизировать</li>
    <li>---Анимацию доделать</li>
  </ul>
<!--  -->
    <ul>
      
   
    
    <li v-for="(item,index) in arrayWithUrlsVideoAndName()" :key="index"><a :href="item.url" target="_blank">{{item.nameContent}}</a></li>

  </ul>

<div>
  <a href="https://vk.com/doc43471214_580412033?hash=835031fea6b1191794&dl=d6ca56282167aecbf7">ТЗ НА ДЖУНА ДОКИ</a>
  <a href="https://www.figma.com/file/k1eyyiHvBq73LMlj9dBpwX/PML_Test_task_for_Junior_Frontend-(18.12)?node-id=1%3A1636">фигма макет</a>
  <a href="https://www.notion.so/Junior-Frontend-developer-aeeb4eac55634e11a855ae294fbe4404">tz</a>
</div>

</div>

<h1>Полезные советы</h1>
  <ul>
<li>Не распыляться , учить одно</li>
<li>не спрашивать Леню</li>
<li>смотреть как пишут опытные прогеры код и где косячут сколько думают</li>
<li>учить теорию и сразу писать код , лучше небольшими порциями</li>
<li>мотивация и отдых</li>
<li>не доводить до идеала, делать чтобы просто поначалу работало а потом рефакторить</li>
  </ul>






<!--  -->
<!--  -->
<!--  -->
<!--  -->

      <p>



.split(' ').join('-')
split осуществляет разбиение строки в массив по указанному разделителю.
 join объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива</p>
  
  

  посмотреть bim проекты как выносить роуты на компоненты
  <!--Добавление нового файла или страницы   -->
  <!-- 1. пишем название (sort,json) в массив test в leftsidebar vue -->
  <!-- 2. создаем сам файл sort.vue в папке views в нужной папке категории и создаем разметку в нем -->
  <!-- 3. папка router => index.js => пишем в routers путь,имя и импортируем файл компонент (sort,json) -->
  
  научиться передавать события и общаться через компоненты между собой
  </div>
</template>

<script>
export default {
  methods: {
    arrayWithUrlsVideoAndName() {
      
            return this.$store.state.urlsVideo.arrayUrlsVideoContent
    },

  },
  computed: {

  }

}
</script>

<style>
.z {
  display: flex;
  justify-content: space-around;
}
li {
  margin-bottom: 10px;
}
</style>