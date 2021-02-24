<template>
  <div>
    <h2 class="template-title-component">Class</h2>
<!--  -->
    <div class="template-discription-component">    
     Class - класс это функция, шаблон<br><br>

    Геттеры и сетторы - в классе. Их можно добавлять, спец свойства внутри объекта<br><br>
    
    Работают как методы, а снаружи класса, как свойства как и у объектов<br><br>
    Названия свойств и методов могут быть определены динамически <br>
    </div>

    <!--  -->
      <div class="template-code-component-wrapper">
      <code class="template-style-code">

            
     <span class="template-color-word">Название класса Task</span> <br><br>
      class Task { <br><br>
    <span class="template-color-word">Конструктор (может быть один в одном классе)</span> <br><br>

     constructor(title = Task.getDefault(), isCompleted = false) {<br>

       this.title = 'lern es 6', this.isCompleted = isCompleted,<br>

        Task.counter +=1 <br><br>
    <span class="template-color-word">Названия гет и сет не должны совпадать с обычными названиями конструктора и пишут _ оно после перезаписалось(свойство)</span> <br>
   
    this._isCompleted = isCompleted, <br>
    
    }<br><br>
    
     
<span class="template-color-word">Статические свойства - методы</span><br><br>
      static getDefault() {<br>
         return 'tutle' <br>
         }<br><br>
      
<span class="template-color-word">Методы</span><br><br>
        
       
       complite() {<br>
          this.isCompleted = true;<br>
    }<br><br>
    
    <span class="template-color-word">Геттер, сеттер</span><br><br>
     get isCompl() {<br>
        return this._isCompl === true ? 'go' : 'no' <br>
        
        } <br>
        
        } <br><br>
     <span class="template-color-word">Конец класса }</span><br><br>
     <span class="template-color-word">задаются статические свойства до создания экземпляров классов и после создания класса</span><br><br>
     
    Task.counter = 0;<br><br>

     let task = new Task('lern es6', false); <br>
     let task2 = new<br>

    Task('lern es6+1', true)<br>
    let 3 = new Task()<br><br>
    
     <span class="template-color-word">Обращение к методу complite()</span><br><br>
     
      task.complite()<br><br>
    
     console.log(Task.counter);<br>
      console.log(task);<br>
      </code>
    </div>  


       
       
    
   
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>