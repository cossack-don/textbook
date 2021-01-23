<template>
  <div>
      fetch
      let url = "http://ya.ru"  - по умолчанию гет запрос
      fetch возвращает промис

      fetch(url).then(
          (response) => {
              response.status
              response.statusText
              response.url

            важные методы
              response.text()
              response.json()
          }
      )

      пример

      fetch(url).then(
          (response) => {
              return response.text();
          }
      )
      .then( (data) => {
          console.log(data)
      })


пример
      const options = {
          methid:'post',
          headers:{},
          body:'' что отправляется на сервер
      }

      fetch(url,options).then(...);


пример
response - ответ

fetch('./data.json')
.then( (response) => {
return response.json();
})
.then( (data) => {
    console.log(data)
})
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>