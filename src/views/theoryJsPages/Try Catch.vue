<template>
  <div>
      try catch

      ОГбработка ошибок

      Если не хотим прерывать работу программы, то поможет трай и кетч
      сначало срабатывает трай, если нашла ошибку то трай пропускается и выполнится кетч
пример
      try {
          ... code
      } catch (error) {
          error.name
          error.message
          error.stack
      }

      мы можем добавить свои ошибки
      например
      let error = new Error('bad tada')

      выброс ошибки своей throw error
      для одного раза , короткая запись throw new Error('message error')

    try {
        const input = promt('enter your name')

      const inputArray = input.split(' ');
      создаем массив из слов через пробел


          if(inputArray.length != 2) {
          throw new Error('invalid input')
      }

    } catch (error) {
        alert(error.message)
    }




  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>