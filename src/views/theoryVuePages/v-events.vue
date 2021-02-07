<template>
  <div>
      v-events

 пример 1
  button @click="onclick" click me button

  пример 2
  button @click="onclick('value из методс параметр', $event)" click me button  
Если потеряли событие (контекс)EVENT, то добавляем $event в разметку пример выше

пример 3
prevent отменяет дефолтные события, не перезагружается стр (есть stopProp и тд)
а href @click.prevent="onClickLink" link a

  пример 4  @click.right клик правой кнопкой, можно левой left,
   @keyup - события для клавиатурыб @keyup.enter(нажатие на кнопку энтер работает и есть другие кнопки)
  button @click.right="onclick" click me button  

data() {
    return {
        value:значение
    }
}

  methods: {
      onclick(value, event, параметры) {
          тело события
          console.log("click", event)
          доступ к data через this.value
      },

      onClickLink() {
          тело события
          console.log('link')
          доступ к data через this.value
      }
  }    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>