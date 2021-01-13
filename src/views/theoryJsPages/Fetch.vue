<template>
  <div >
    
<h2 class="template-title-component">Fetch</h2>

    <div class="template-discription-component">
      ОПИСАНИЕ, ОПРЕДЕЛЕНИЕ
    </div>
    
<div class="template-code-component-wrapper">
<code class="template-style-code" >fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits') <br>
  .then(response => response.json()) <br>
  .then(commits => document.write(commits[0].author.id));</code>
    </div>



    <div class="template-text-component">
      обычный текст описания
    </div>

<iframe src="//codepen.io/IanHazelton/embed/preview/GrPEaK/?height=400&amp;theme-id=12451&amp;default-tab=html,result&amp;embed-version=2"
 width="100%" height="500" frameborder="no" allowfullscreen="true" scrolling="no" style=""> </iframe>

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