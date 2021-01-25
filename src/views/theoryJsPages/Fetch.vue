<template>
  <div>
    <h2 class="template-title-component">Fetch</h2>

    <a href="https://only-to-top.ru/blog/programming/2019-09-17-otpravka-dannyh-fetch-api.html"
 class="template-link-supporting-information" target="_blank">Ссылка на пример обработки формы обратной связи и запросов fetch</a>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        let url = "http://ya.ru" - по умолчанию гет запрос <br />
        fetch возвращает промис<br />
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        fetch(url).then( <br />
        (response) => { <br />
        response.status <br />
        response.statusText <br />
        response.url<br /><br />

        важные методы<br />
        response.text()<br />
        response.json()<br />
        } )
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        пример<br />

        fetch(url).then(<br />
        (response) => {<br />
        return response.text();<br />
        }<br />
        )<br />
        .then( (data) => {<br />
        console.log(data)<br />
        })<br />
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        пример<br />
        const options = {<br />
        methid:'post',<br />
        headers:{},<br />
        body:'' что отправляется на сервер<br />
        }<br /><br />

        fetch(url,options).then(...);<br />
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code">
        пример<br />
        response - ответ<br /><br />

        fetch('./data.json')<br />
        .then( (response) => {<br />
        return response.json();<br />
        })<br />
        .then( (data) => {<br />
        console.log(data)<br />
        })<br />
      </code>
    </div>

    <img
      src="@/assets/img/img-fetch-async-await.jpg"
      alt=""
      class="template-image"
    />

    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>