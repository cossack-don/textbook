<template>
  <div class="main-left-sidebar" ref="mainLeftSidebar">
    
    <!-- <div class="wrapper-mobile-icons-left" ref="leftSidebarIconsMobile">
      <div @click="taggle1" class="list-items-icons-left-sidebar__item" ref="taggleLeftSidebarMobile">=></div>
      
      <ul class="wrapper-mobile-icons-left__list list-items-icons-left-sidebar">
        
        <li class="list-items-icons-left-sidebar__item">home</li>
        <li class="list-items-icons-left-sidebar__item">item 1</li>
        <li class="list-items-icons-left-sidebar__item">item 2</li>
        <li class="list-items-icons-left-sidebar__item">item 3</li>
      </ul>
    </div> -->

    <div class="wrapper-computer-sidebar" ref="leftSidebarComputer">
    <!-- <div @click="taggle1" class="list-items-icons-left-sidebar__item" ref="taggleLeftSidebarMobile">=></div> -->

      <!-- кнопка скрыть все уроки -->
    <button @click="closeAllcategory" ref="btnCloseCategory" class="button-close-category" >Закрыть все уроки</button>
<!-- //кнопка скрыть все уроки -->

<!-- Поиск по категориям (теория джс, проекты вью) -->
<input @input="searchValue = $event.target.value" v-model="searchValue" type="text"
 placeholder="Поиск" class="main-left-sidebar__search">
<!--// Поиск по категориям (теория джс, проекты вью) -->

<!-- отрисовка что нашлось в поиске и добавление правильного url routа -->
  <div v-for="(item,index) in getValueInputSearchFilterArrayAndPostResult" :key="index">
  <router-link :to="{ path: item.split(' ').join('-').toLowerCase() }">{{item}}</router-link>
  </div>
<!--// отрисовка что нашлось в поиске и добавление правильного url routа -->

<!-- сообщение "не найдено" -->
<div  v-if="hideMessageNotItemInSearch">Ничего не найдено</div> 
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
          <!-- <input type="text" placeholder="Поиск" class="main-left-sidebar__search"> -->
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
          <!-- <input type="text" placeholder="Поиск" class="main-left-sidebar__search"> -->
          <li v-for="(item,index) in sortArrayA_ZnameMiniProjects" :key="index"
          class="list-links-projects__list-link-theory">
            <router-link :to="{ path: item.split(' ').join('-').toLowerCase() }">{{item}}</router-link>
          </li>
      </ul>

   </li>
   <!-- end мини проекты и компоненты js -->


   </ul>
<!-- end список левый-сайдбар -->
    </div>

  </div>
</template>



<script>
export default {

data() {
  return {
    // Массивы и обьекты справочников ES 6 , VUE , PRODJECTS
    arrayNameTheoryJs:['fetch', 'Ajax', 'шаблон строк', 'инкремент', 'JSON','Sort','giga w'],

    arrayNameTheoryVue:['test1','test2 3'],

    arrayNameMiniProjects:['test122','test2111 3'],

    newArrayBeforeFilterInSearch:[],
// конекц     // Массивы и обьекты справочников ES 6 , VUE , PRODJECTS

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

//   taggle1() {
 


//      if(!this.taggleLeftSidebarForMobile) {
// this.$refs.mainLeftSidebar.style.width="10%";
//   this.$refs.leftSidebarIconsMobile.style.display="block";
//   this.$refs.leftSidebarComputer.style.display="none";

// }
// if(this.taggleLeftSidebarForMobile) {
//   this.$refs.mainLeftSidebar.style.width="30%";
//   this.$refs.leftSidebarIconsMobile.style.display="none";
//   this.$refs.leftSidebarComputer.style.display="block";
  
//   //  this.$refs.taggleLeftSidebarMobile.style.display="block";
// }
// this.taggleLeftSidebarForMobile = !this.taggleLeftSidebarForMobile
// // console.log(this.taggleLeftSidebarForMobile)
    
//   }
  
},

  computed: {

    // 
    // Сортировка справочников слева для трех списков по алфавиту
  sortArrayA_ZnameTheoryJs() {
   const newArrayNameJsLowerCase = this.arrayNameTheoryJs.map(function(item) {
     
       item.toLowerCase();
      const itemWithBigLetter = item[0].toUpperCase() + item.substring(1);
      
      return itemWithBigLetter
    })

    return newArrayNameJsLowerCase.sort()
  },

  sortArrayA_ZnameTheoryVue() {
   const newArrayNameVueLowerCase = this.arrayNameTheoryVue.map(function(item) {
     
       item.toLowerCase();
      const itemWithBigLetter = item[0].toUpperCase() + item.substring(1);
      
      return itemWithBigLetter
    })

    return newArrayNameVueLowerCase.sort()
  },

    sortArrayA_ZnameMiniProjects() {
   const newArrayMiniProjectsLowerCase = this.arrayNameMiniProjects.map(function(item) {
     
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
    const allArraysCategoryInOne = this.arrayNameTheoryJs.concat( this.arrayNameTheoryVue, this.arrayNameMiniProjects);
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