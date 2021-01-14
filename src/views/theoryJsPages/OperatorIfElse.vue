<template>
  <div>

    <h2 class="template-title-component">Операторы if else и ?</h2>

    <h3 class="template-title-mini-component">Тернарный оператор ?</h3>
    
    <div class="template-code-component-wrapper">
      <code class="template-style-code" >(условие) ? знач1 : знач2 <br>
      если условие выполняется, то оператор возвращает знач 1 если условие не выполняется то выводит знач2 <br>
      const cost = 500;<br>
      let category = (cost > 500) ? "height price" : "low price";
      </code>
    </div>

    <h3 class="template-title-mini-component">if else</h3>

    <div class="template-code-component-wrapper">
      <code class="template-style-code" >if(выполняется если условие true) { <br> тут код  <br> }</code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code" >if(выполняется если условие true) { <br> тут код (действие)  <br> } else (иначе (условие false)) { <br> 
      выполняется действие это <br> }
      </code>
    </div>

    <div class="template-code-component-wrapper">
      <code class="template-style-code" > if(условие) { <br> код <br> } else { <br> код <br> }
      else if (условие) { <br> код <br> }
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