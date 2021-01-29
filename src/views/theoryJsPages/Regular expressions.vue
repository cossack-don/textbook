<template>
<div>
    <h2 class="template-title-component">Regular expressions</h2>

    <div class="template-discription-component">
        рег вырожения - это способ записи текстовых шаблонов, по сути это обычная строка, но на спец языке <br><br>

        к ней относятся общиее правила <br> <br>

        const opn = new RegExp('pattern'); <br>
        const opn2 = /pattern/;<br><br>

        рег вырожения сложная тема<br>
    </div>

    <div class="template-code-component-wrapper">
        <code class="template-style-code">
            /abc/ идущие подряд <br>
            /[abc]/ один из символов <br>
            /[^abc]/ ни один из символов <br>
            /[a-z]/ Диапозон символов от а до з маленькие <br>
            /\b/ граница слова (первый или последний символ b) <br>
            /\B/ не граница слова <br>
            /\d/ Цифра <br>
            /\D/ не Цифра <br>
        </code>
    </div>

    <div class="template-code-component-wrapper">
        <code class="template-style-code">

            /\w/ лат буква, цифра или _ <br>
            /\W/ не лат буква, цифра и _ <br>
            /\s/ пробельный символ<br>
            /\S/ не пробельный символ <br>
            /a{3}/ 3 символа подряд <br>
            /a{2,4}/ от 2 о 4 символов а <br>
            /a+/ 1 и более символ <br>
            /a*/ 0 и более символов <br>
            /a?/ 0 или 1 символ <br>
            /./ один любой символ <br>
        </code>
    </div>

    <div class="template-text-component">
        g - global ищет все соответсвия,а не только первое <br><br>

        i поиск игнорирующий регистр <br><br>

        m - многострочный текстовых <br><br>

        онлайн редактор регул вырожений <br><br>
        https://regex101.com/
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
