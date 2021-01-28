<template>
  <div>
<h2 class="template-title-component">Vuetify-prodjects</h2>

    <div class="wrapper-prodjects">

      <article class="wrapper-prodjects__item item-prodjects">
        <h2 class="item-prodjects__title">Vuetify todo list</h2>
        
         <div class="item-prodjects__wrapper-image">
           <a href="https://sergeyzhur.github.io/vuetify-todo/#/" target="_blank">
           <img src="@/assets/imgs-prodjects/vuetify-todo.jpg" alt="" class="item-prodjects__image">
           </a>
        </div>
        
        <a href="https://sergeyzhur.github.io/vuetify-todo/#/" class="link-view-vue" target="_blank">View</a>
        <a href="https://github.com/SergeyZhur/vuetify-todo" target="_blank">Link for github code</a>
      </article>

            <article class="wrapper-prodjects__item item-prodjects">
        <h2 class="item-prodjects__title">Vuetify todo list</h2>
        
         <div class="item-prodjects__wrapper-image">
           <a href="https://sergeyzhur.github.io/vuetify-todo/#/" target="_blank">
           <img src="@/assets/imgs-prodjects/vuetify-todo.jpg" alt="" class="item-prodjects__image">
           </a>
        </div>
        
        <a href="https://sergeyzhur.github.io/vuetify-todo/#/" class="link-view-vue" target="_blank">View</a>
        <a href="https://github.com/SergeyZhur/vuetify-todo" target="_blank">Link for github code</a>
      </article>

            <article class="wrapper-prodjects__item item-prodjects">
        <h2 class="item-prodjects__title">Vuetify todo list</h2>
        
         <div class="item-prodjects__wrapper-image">
           <a href="https://sergeyzhur.github.io/vuetify-todo/#/" target="_blank">
           <img src="@/assets/imgs-prodjects/vuetify-todo.jpg" alt="" class="item-prodjects__image">
           </a>
        </div>
        
        <a href="https://sergeyzhur.github.io/vuetify-todo/#/" class="link-view-vue" target="_blank">View</a>
        <a href="https://github.com/SergeyZhur/vuetify-todo" target="_blank">Link for github code</a>
      </article>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper-prodjects {
display: flex;
justify-content: space-around;
flex-wrap: wrap;
}

.wrapper-prodjects__item {
  margin: 10px;
  max-width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
border: 5px solid  #007bff;
border-radius: 5px;
}

.wrapper-prodjects__item:hover {
  transition: 0.5s;
  -webkit-box-shadow: 9px 7px 10px 0px #6f42c1;
-moz-box-shadow: 9px 7px 10px 0px #6f42c1;
box-shadow: 9px 7px 10px 0px #6f42c1; 
}

.item-prodjects__title {
color: #007bff;
margin-bottom: 15px;
margin-top: 15p;
}

.item-prodjects__wrapper-image {
border: solid #343a40 4px;
border-radius: 5px;
}

.item-prodjects__image {
  max-width: 300px;
  height: auto;
}

.link-view-vue {
  color: #dc3545;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>