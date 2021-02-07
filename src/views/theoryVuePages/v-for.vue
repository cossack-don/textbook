<template>
  <div>v-for

ul
key - не должен повторяться
    li v-for="item,index" in array :key = index массива или id { значение item} {значение index}

если перебираем объекты в массиве то item.value :key = item.id 
li v-for=item in obj :key = item.id  {item.id} {item.value}

если перебор объекта
v-for="(value, name, index") in objTwo :key="index"  --  {index} {name} {value}

data() {
    return {
        array:[1,2,3,4,],
        obj: [
        {
            value:111111,
            id:0
        },
        {
            value:2222,
            id:1
        }
        ],

        objTwo: {
            value:'hello',
            id:1,
            tel:900033
        }
    }
}

$set, $delete - ознакомиться
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>