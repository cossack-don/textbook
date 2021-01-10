<template>
  <div >
    <div class="wp">
<h2>Fetch</h2>
<code style="color: #35495e;
    font-size: 16px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;">fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits') <br>
  .then(response => response.json()) <br>
  .then(commits => document.write(commits[0].author.id));</code>
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