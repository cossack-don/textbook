<template>
<div>

    <h2 class="template-title-component">Local Storage</h2>

    <div class="template-discription-component">в локал сторадж хранятся значения ключ - значение
        хранятся даже после перезагрузки
        хранятся только в строках использую формат json для хранения
        для преобразования в <br> json JSON.stringify(обьект) => будет строка <br>
        JSON.parse(обьект) => будет обьект
    </div>

    <div class="template-code-component-wrapper">
        <code class="template-style-code">
            добавить в localStorage.setItem() <br>
            чтоб получить значение из localStorage.getItem() <br>
            удалить из localStorage.removeItem() <br>
            очистить весь localStorage.clear() <br><br>

            sessionStorage - хранит инфу пока ты в браузере, если вышел, данные стерлись <br><br>

            sessionStorage.setItem()<br>
            sessionStorage.getItem()<br>
            sessionStorage.removeItem()<br>
            sessionStorage.clear()<br>
        </code>
    </div>

    <div class="template-code-component-wrapper">
        <code class="template-style-code">
            пример <br><br>

            const input = prompt('your name');<br><br>

            const obj = {<br>
            name:input<br>
            }<br><br>

            const jsonObj = JSON.stringify(obj);<br>

            localStorage.setItem('user', jsonObj);<br>

            const localStorage.getItem('user')<br>
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
