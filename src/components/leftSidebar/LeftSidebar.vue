<template>
  <div class="main-left-sidebar" >

    <div class="wrapper-computer-sidebar">

<div @click="btnCloseSidebar" class="wrapper-btn-close-sidebar"><img src="./closed.svg" alt="" class="btn-close-sidebar"></div>


<!-- кнопка скрыть все уроки -->
    <button @click="closeAllcategory" ref="btnCloseCategory" class="button-close-category" >Закрыть все уроки</button>
<!-- //кнопка скрыть все уроки -->

<div class="wrapper-search-close">
<!-- Поиск по категориям (теория джс, проекты вью) -->
<input @input="searchValue = $event.target.value" v-model="searchValue" type="text"
 placeholder="Поиск" class="main-left-sidebar__search">
 <!-- кнопка очистить инпут -->
 <div v-if="searchValue" class="btnCleanSearch" @click.stop="btnCleanSearch">X</div>
<!--// Поиск по категориям (теория джс, проекты вью) -->
</div>



<!-- отрисовка что нашлось в поиске и добавление правильного url routа -->
  <ul class="search-list-links">
    <li v-if="searchValue" class="search-list-links__text-search">Нашло в поиске</li>

    <li v-for="(item,index) in getValueInputSearchFilterArrayAndPostResult" :key="index">
      <router-link :to="{ path: item.split(' ').join('-').toLowerCase() }">{{item}}</router-link>
    </li>
  
  </ul>
<!--// отрисовка что нашлось в поиске и добавление правильного url routа -->


<!-- сообщение "не найдено" -->
<div v-if="hideMessageNotItemInSearch" class="nothing-found">Ничего не найдено</div> 
<!-- //сообщение "не найдено" -->




<!-- start список левый-сайдбар -->
 <ul @click="showBtnCloseAllCategory">


   <!-- start теория джс -->
   <li class="category-theory-js">
     <p @click="taggleShowAndHideTheoryJs  = !taggleShowAndHideTheoryJs" 
     class="category-theory-js__title">Теория ES6</p>

      <ul v-show="taggleShowAndHideTheoryJs" class="list-links-theory">
          <li v-for="(item,index) in sortArrayA_ZnameTheoryJs" :key="index"
           class="list-links-theory__list-link-theory">
            <router-link :to="{ path: item.split(' ').join('-').toLowerCase() }" >{{item}}</router-link>
          </li>
      </ul>

   </li>
<!-- end теория джс -->


<!-- start теория vue -->
    <li class="category-theory-vue">
     <p @click="taggleShowAndHideTheoryVue = !taggleShowAndHideTheoryVue"
      class="category-theory-vue__title">Теория Vue</p>

      <ul v-show="taggleShowAndHideTheoryVue" class="list-links-theory-vue">
          <li v-for="(item,index) in sortArrayA_ZnameTheoryVue" :key="index"
          class="list-links-projects__list-link-theory-vue">
            <router-link :to="{ path: item.split(' ').join('-').toLowerCase() }">{{item}}</router-link>
          </li>
      </ul>

   </li>
<!-- end теория vue -->


<!-- start мини проекты и компоненты js -->
   <li class="category-mini-projects">
     <p @click="taggleShowAndHideMiniProjects = !taggleShowAndHideMiniProjects"
      class="category-mini-projects__title">Мини-проекты</p>
      
      <ul v-show="taggleShowAndHideMiniProjects" class="list-links-projects">
          <li v-for="(item,index) in sortArrayA_ZnameMiniProjects" :key="index"
          class="list-links-projects__list-link-theory">
            <router-link :to="{ path: item.split(' ').join('-').toLowerCase() }">{{item}}</router-link>
          </li>
      </ul>

   </li>
   <!-- end мини проекты и компоненты js -->


   </ul>
<!-- end список левый-сайдбар -->

<br><br>
<router-link to="/all-links">Основные ссылки видео-курсов</router-link>
<br><br>

<a href="http://spacemath.xyz/" target="_blank">Матика учебник основы</a> <br><br>
<a href="https://ru.bem.info/methodology/" target="_blank">БЭМ справочник</a> <br><br>
<a href="https://miragejs.com/" target="_blank">Mirage js</a> <br><br>
<a href="https://cossack-don.github.io/group/#/" target="_blank">JOB SPA</a> <br><br>

<router-link to="/" class="btn-home-page">Home PAGE</router-link>
    </div>

  </div>
</template>



<script>
export default {

data() {
  return {
    newArrayBeforeFilterInSearch:[],


// Поиск по справочникам
    searchValue:'',
    hideMessageNotItemInSearch:false,

// тагглы по клику на заголовки справочниковы
    taggleShowAndHideTheoryJs:false,
    taggleShowAndHideMiniProjects:false,
    taggleShowAndHideTheoryVue:false,

    // taggleLeftSidebarForMobile:true,
  }
},

methods: {

  btnCloseSidebar() {
 const sidebar = document.querySelector('.wrapper-sidebar-main-content__left-sidebar');

  sidebar.classList.add("hide-block");
  },

btnCleanSearch() {
this.searchValue = '';
},

 
  showBtnCloseAllCategory() {

    if(this.taggleShowAndHideTheoryVue === false ||
    this.taggleShowAndHideTheoryJs === false ||
    this.taggleShowAndHideMiniProjects === false) {
      
          this.$refs.btnCloseCategory.style.display="none";
    }

    if(this.taggleShowAndHideTheoryVue === true ||
    this.taggleShowAndHideTheoryJs === true ||
    this.taggleShowAndHideMiniProjects === true) {

        this.$refs.btnCloseCategory.style.display="block";
    } 

  },

  closeAllcategory() {
    this.taggleShowAndHideTheoryVue = false;
    this.taggleShowAndHideTheoryJs = false;
    this.taggleShowAndHideMiniProjects = false;

    this.$refs.btnCloseCategory.style.display="none";
  },


  
},

  computed: {

    // 
    // Сортировка справочников слева для трех списков по алфавиту
  sortArrayA_ZnameTheoryJs() {
   const newArrayNameJsLowerCase = this.$store.state.theoryJs.arrayNameTheoryJs.map(function(item) {
     
       item.toLowerCase();
      const itemWithBigLetter = item[0].toUpperCase() + item.substring(1);
      
      return itemWithBigLetter
    })

    return newArrayNameJsLowerCase.sort()
  },

  sortArrayA_ZnameTheoryVue() {
   const newArrayNameVueLowerCase = this.$store.state.theoryVue.arrayNameTheoryVue.map(function(item) {
     
       item.toLowerCase();
      const itemWithBigLetter = item[0].toUpperCase() + item.substring(1);
      
      return itemWithBigLetter
    })

    return newArrayNameVueLowerCase.sort()
  },

    sortArrayA_ZnameMiniProjects() {
   const newArrayMiniProjectsLowerCase = this.$store.state.MiniProjects.arrayNameMiniProjects.map(function(item) {
     
       item.toLowerCase();
      const itemWithBigLetter = item[0].toUpperCase() + item.substring(1);
      
      return itemWithBigLetter
    })

    return newArrayMiniProjectsLowerCase.sort()
  },

// 
// 
    getValueInputSearchFilterArrayAndPostResult() {
// cоеденяю все списки в один массив
    const allArraysCategoryInOne = this.$store.state.theoryJs.arrayNameTheoryJs.concat( this.$store.state.theoryVue.arrayNameTheoryVue, this.$store.state.MiniProjects.arrayNameMiniProjects);
    // allArraysCategoryInOne.sort()
// перезаписываю в переменую пустой массив (так как сразу не получилось записать,выдает ошибку) из за того что конкат возвращает новвый массив
    this.newArrayBeforeFilterInSearch = 
    allArraysCategoryInOne.filter(name => name.toLowerCase().includes(this.searchValue.toLowerCase()))
      
// если инпут пустой то скрываем сообщение "ничего не найдено"
      if(this.searchValue === '') {
        this.hideMessageNotItemInSearch  = false;
      }
// если инпут НЕ равняется пустой строке то делаем проверки
// если вернулся пустой массив (не найден элемент в главном массиве с данными из справочников) то показываем сообщение такого элемента нет
// если пришли данные с массивом, убираем сообщение "такого элемента нет"
// возвращаем тот элемент из массива, который нашел поиск по букве или слову
      if(this.searchValue !== '') {
    
      if(this.newArrayBeforeFilterInSearch.length === 0) {
        this.hideMessageNotItemInSearch  = true;
      } else {
        this.hideMessageNotItemInSearch  = false;
      }

      return allArraysCategoryInOne.filter(name => name.toLowerCase().includes(this.searchValue.toLowerCase())
      )

      }
    },


  }
}
</script>

<style lang="scss">


</style>