

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

    <!-- 
  
 -->https://www.youtube.com/watch?v=tCGiKGNmMbE&list=PLNkWIWHIRwMHKLotIS_d-wyj00pg0AnUg&index=10
    <br />
    webdev функции высшего порядка <br />
    forEach (item, index, array) - обход для каждого элемента, ничего не
    возвращает response = JSON let newArray = [] let getNames = fucntion (elem)
    { newArray.push(elem.name) } response.forEach(getNames)
    console.log(newArray) <br />
    метод map <br />
    не изменяет исходной массив - возврвщает новый массив const arr =
    [1,2,3,4,5,6,7]; const newArray = arr.map(item => { return item * 2 })
    console.log(arr) console.log(newArray) пример если json отфильтровать нужно
    const obj = [ {name:'Vasa', year:23 }, {name:'goga', year:2333 }, ] const
    newArray = obj.map(item => { return { name:item.name, // year:item.year } })
    console.log(newArray) <br />

    filter <br />

    every,some своеобразные фильтры - больше используются для проверки <br />
    every - проверяет пробегается по массиву проверят по условию если все
    условия выполняются, возвращает true, если хотя бы одно условие не
    выполняется возвращается false <br />
    some - вернет тру, если хотя бы один элемент пройдет проверку <br />

    методы – reduce и reduceRight br для вычесления <br />
    слева на права и справа на лево -посмотреть более подробней

    <br />
    псевдомассив - arguments <br />
    function go() { console.log(arguments) } go('a','b','c') <br />

    function decloration - function sum (a,b) {return a + b} <br />
    можно вызвать до объявления функции <br />
    function expression let sum1 = function(a,b) { return a+b}

    <!-- THIS -->

    сall apply bind

    bind создает обертку не вызывает функцию

    call- 

    почитать еще про this.call,apply,bind,каллбек,рекурсию,
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>