<template>
  <div>
      Local Storage

      в локал сторадж хранятся значения ключ - значение
      хранятся даже после перезагрузки
      хранятся только в строках  использую формат json для хранения 
      для преобразования в json JSON.stringify(обьект) => будет строка
      JSON.parse(обьект) => будет обьект

      добавить в localStorage.setItem()
      чтоб получить значение из localStorage.getItem()
      удалить из localStorage.removeItem()
      очистить весь localStorage.clear()

sessionStorage - хранит инфу пока ты в браузере, если вышел, данные стерлись

sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
sessionStorage.clear()


пример

const input = prompt('your name');

const obj = {
  name:input
}

const jsonObj = JSON.stringify(obj);

localStorage.setItem('user', jsonObj);

const localStorage.getItem('user')
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>