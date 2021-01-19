<template>
  <div >
    <hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">
           <a href="https://learn.javascript.ru/destructuring"
       class="template-link-supporting-information" target="_blank">Ссылка на документацию Деструктуризация</a>

<hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">

<a href="https://codepen.io/impertubable/pen/JjRzdgB" target="_blank" class="template-link-code-pen">Пример на Code Pen</a>
<hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">
<h2 class="template-title-component">Fetch</h2>
<hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">
    <div class="template-discription-component">
      ОПИСАНИЕ, ОПРЕДЕЛЕНИЕ
    </div>
    <hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">
<div class="template-code-component-wrapper">
<code class="template-style-code" >fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits') <br>
  .then(response => response.json()) <br>
  .then(commits => document.write(commits[0].author.id));</code>
    </div>

<hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">

    <div class="template-text-component">
      обычный текст описания
    </div>
<hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">
<iframe src="https://codepen.io/impertubable/details/JjRzdgB"
 > </iframe>
<hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">
<iframe src="//codepen.io/IanHazelton/embed/preview/GrPEaK/?height=400&amp;theme-id=12451&amp;default-tab=html,result&amp;embed-version=2"
 width="100%" height="500" frameborder="no" allowfullscreen="true" scrolling="no" style=""> </iframe>
<hr style="margin-top:15px;margin-bottom:15px; background:#1dc579;">
для видео с ютуба заходишь в видео нажимаешь на видео и будет скопировать html код и выдаст норм фрейм
<iframe width="100%" height="700" src="https://www.youtube.com/embed/geT5dQIaarU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- <video
  width="480"
  controls
  poster="https://www.youtube.com/watch?v=ayCglHI8ltw&t=4399s"
>
  <source
    src="https://www.youtube.com/watch?v=ayCglHI8ltw&t=4399s"
    type="video/mp4"
  />
  <source
    src="https://www.youtube.com/watch?v=ayCglHI8ltw&t=4399s"
    type="video/ogg"
  />
  <source
    src="https://www.youtube.com/watch?v=ayCglHI8ltw&t=4399s"
    type="video/webm"
  />
  Your browser doesn't support HTML5 video tag.
</video> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* .wp {
  margin: 0 auto;
} */
</style>