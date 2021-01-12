<template>
  <div >
    <div class="wp">
<h2 class="template-title-component">Fetch</h2>

    <div class="template-discription-component">
      ОПИСАНИЕ, ОПРЕДЕЛЕНИЕ
    </div>
    
<div class="template-code-component">
<code  style="color: #35495e;
    font-size: 16px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;">fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits') <br>
  .then(response => response.json()) <br>
  .then(commits => document.write(commits[0].author.id));</code>
    </div>



    <div class="template-text-component">
      обычный текст описания
    </div>
</div>


  </div>
</template>

<script>
export default {

}
</script>

<style>
.wp {
  margin: 0 auto;
}
</style>