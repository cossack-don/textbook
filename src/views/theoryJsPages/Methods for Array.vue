

<template>
  <div>
    <h2 class="template-title-component">Fetch</h2>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">forEach</span> - просто перебирает
        массив , ничего не возвращает и не может вернуть кроме undefined
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">map</span> - возвращает новый массив
        так же перебирает но возвращает новый массив с результатом метод
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">includes</span> - позволяет проверить,
        содержится ли значение внутри искомого массива, возвращает тру или фолс
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">find</span> - находит определенный эл
        по определенному условию в массиве , тоже цикл const res = arr.find(
        (item) => { return item.id === 1 }) возвращает элемент(один) возвращает
        всего один раз если тру и прекрощает действие findIndex - возвращает
        индекс элемента
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">filter</span> - фильтрует массив по
        определенному условию
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">push</span> - добавляет элементы в
        конец массив
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">split</span> создает массив из строки
        разделитель принимает const str = 'Lern js' const arr =
        str.split(разделитель-первый аргумент,) str.split('-',)
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">join</span> - помогает преобразовать
        массив в строку, обратный метод split arrStr.join('') - разделитель ''
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">splice</span> - для удаления или
        вставки эл внутрь массиваы, изменяет массив arr.splice(index-elementa
        prinimaet - 1-й аргумент, кол-во элементов что удаляем, значение которое
        хотим вставить в массив)
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">flat</span> - для двухмерных и более
        массивов - извлекает из глубоких массивов - значения arr =
        [1,2[2,3[3,4]]] 3-кол-во вложенных массивов если знаем их кол-во если не
        знаем кол-во , передаем инфинити arr.flat(3) arr.flat(инфинити)
      </code>
    </div>


      <h3 class="template-title-mini-component">Webdev функции высшего порядка</h3>
     <br />

      <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">forEach (item, index, array)</span>
        - обход для каждого элемента, ничего не возвращает response = JSON let newArray = [] <br> let getNames = fucntion (elem)
        { newArray.push(elem.name) } response.forEach(getNames)
        console.log(newArray)
      </code>
    </div>


      <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">Метод map</span> не изменяет исходной массив - возврвщает новый массив и возвращает такой же по длинне массив,от исходного <br>
         const arr = [1,2,3,4,5,6,7]; <br>
          const newArray = arr.map(item => { return item * 2 }) <br>
          console.log(arr)<br>
          console.log(newArray)<br><br>
          Пример если json отфильтровать нужно<br>
          const obj = [ {name:'Vasa', year:23 }, {name:'goga', year:2333 }, ]<br>
          const newArray = obj.map(item => { return { name:item.name, // year:item.year } })<br>
          console.log(newArray)
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">every,some своеобразные фильтры</span>

     - больше используются для проверки every - проверяет пробегается по массиву проверят по условию если все
    условия выполняются, возвращает true, если хотя бы одно условие не выполняется возвращается false <br />
    some - вернет тру, если хотя бы один элемент пройдет проверку
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">методы – reduce и reduceRigh</span>

        посмотреть более подробней
      </code>
    </div>

      <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">Псевдомассив - arguments</span>
        function go() { console.log(arguments) } go('a','b','c') <br />
      </code>
    </div>

      <div class="template-code-component-wrapper">
      <code class="template-style-code">
        <span class="template-color-word">function decloration</span> - function sum (a,b) {return a + b} <br />
        можно вызвать до объявления функции <br />
         <span class="template-color-word">function expression</span>
         let sum1 = function(a,b) { return a+b}
      </code>
    </div>
         
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>