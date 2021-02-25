<template>
  <div>
<h2 class="template-title-component">v-for</h2>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
            key - не должен повторяться <br><br>
                li v-for="item,index" in array :key = index массива или id { значение item} {значение index}<br><br>

            если перебираем объекты в массиве то item.value :key = item.id <br>
            li v-for=item in obj :key = item.id  {item.id} {item.value}<br><br>

            если перебор объекта<br><br>
            v-for="(value, name, index") in objTwo :key="index"  --  {index} {name} {value}<br><br>

            data() {<br>
                return {<br>
                    array:[1,2,3,4,],<br>
                    obj: [<br>
                    {<br>
                        value:111111,<br>
                        id:0<br>
                    },<br>
                    {<br>
                        value:2222,<br>
                        id:1<br>
                    }<br>
                    ],<br>

                    objTwo: {<br>
                        value:'hello',<br>
                        id:1,<br>
                        tel:900033<br>
                    }<br>
                }<br>
            }<br><br>

            $set, $delete - ознакомиться
      </code>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>