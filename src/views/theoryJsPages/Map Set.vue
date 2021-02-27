<template>
  <div>
      <h2 class="template-title-component">Set и Map</h2>

      
    <div class="template-discription-component">
        2 коллекции новые в ес 6 наподобие обьектов <br>
      Map для хранения записей ключ - значение <br>
      в обьектах ключами явл всегда строки, в map могут быть произвольное значение<br>
    </div>



    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        let map = new Map(); <br><br>

            map.set('str', 'string');<br>
            map.set (1, 'number');<br>
            map.set(true.'boolean');<br><br>

            можно писать сокращенно <br>
            map<br><br>
                    .set('str', 'string');<br>
                    .set (1, 'number');<br>
                    .set(true.'boolean');<br><br>

                    set  - записывает значение в map обьект<br>
                    get - получить - вывести<br>
                    size - длинна значений (кол-во) (как ленгс)<br>
                    has - есть ли такой ключ в обьекте, выдаст тру или фолс map.has(значение ключа)<br>

                    удаляет из коллекции<br><br>
                    delete удалять запись с переданным ключем- аргументом - выдаст тру если найдена иначе фолс<br>
                    clear удаляет все из объекта<br><br>

                    для итераций по коллекции используют <br>
                    kays() - возвращает итерируемый обьект для ключений<br>
                    values() возвращает итерируемый обьект для значений<br>
                    entries() возвращает итерируемый обьект  для записей ключ - значений<br><br>


            например <br><br>
            for(let item of recipeMap.entries()) {<br>
                console.log(item)<br>
                }<br><br>

            можно записать еще <br>
            let map = new Map([<br>
            ['str','string'],<br>
            [1,'number']<br>
            ])<br>
      </code>
    </div>
      


    <div class="template-code-component-wrapper">
      <code class="template-style-code">
            Set тип коллекции для множество значений, но уникально, встречается один раз <br><br>

            let jack = {name:'Jack'}<br>
            let vasa = {name:'Vasa'}<br><br>

            let users = new Set();<br><br>

            users<br>
                .add(jack)<br>
                .add(vasa)<br>
                users.size => 2 шт<br><br>

            users.forEach(item => {<br>
                console.log(item)<br>
            })<br>
        получить определенное какое либо значение не получится так как нет ключений<br><br>

        либо получить все значения и потом отфильтровать<br><br>
        либо использовать has для проверка наличии элемента в коллекции<br><br>

        add  - добавляет в коллекцию<br>
        delete - удаляет из коллекции возвращает тру если удалил, если фолс то его там не было(такого значения)<br>
        clear() очищает весь обьект<br>
        has() проверяет есть ли данный элемент там или нет<br>
      </code>
    </div>


Есть еще <br>
WeackMap & WeackSet - не препядствуют мусорщику<br>
хранят вспомогательные данные в них

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>