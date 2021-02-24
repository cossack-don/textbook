<template>
  <div>
    class - класс это функция, шаблон геттеры и сетторы - в класс можно
    добавлять , спец свойства внутри объекта работают как методы, а снаружи
    класса, как свойства как и у объектов названия свойств и методов могут быть
    определены динамически название класса Task class Task { Конструктор (может
    быть один в одном классе) constructor(title = Task.getDefault(), isCompleted
    = false) { this.title = 'lern es 6', this.isCompleted = isCompleted,
    Task.counter +=1 названия гет и сет не должны совпадать с обычными
    названиями конструктора и пишут _ оно после перезаписалось(свойство)
    this._isCompleted = isCompleted, } Статические свойства - методы static
    getDefault() { return 'tutle' } Методы complite() { this.isCompleted = true;
    } get isCompl() { return this._isCompl === true ? 'go' : 'no' } } задаются
    статические свойства до создания экземпляров классов и после создания класса
    Task.counter = 0; let task = new Task('lern es6', false); let task2 = new
    Task('lern es6+1', true) let 3 = new Task() обращение к методу complite()
    task.complite() console.log(Task.counter); console.log(task);
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>