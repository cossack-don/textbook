<template>
  <div>

    <h2 class="template-title-component">Оператор Switch</h2>

    <h3 class="template-title-mini-component">Как бы выглядел Switch при использование if else</h3>
    <div class="template-code-component-wrapper">
        <code class="template-style-code">
        if (browser == 'edge') { <br>
          ... <br>
        } else if (browser == 'firefox') { <br>
          ... <br>
        } else if (browser == 'safari') { <br>
          ... <br>
        }
        </code>
    </div>

      <h3 class="template-title-mini-component">Switch</h3>
      <div class="template-code-component-wrapper">
        <code class="template-style-code">
          
        <span class="template-marker-text-red ">Работает без приведения типов</span> <br>

          <span class="template-marker-text-red ">switch</span> (browser) { <br>
            case 'edge' : <br>
            ... <br>
            break; (выход из switch), если break нет, то продолжает идти вниз по case-м <br>
            case "firefox" : <br>
            ...  <br>
            break; <br>
            case "safari" : (можно проверять сразу для нескольких кейсов либо 1-ый кейс либо 2-й и тд 
            и выдавать для них один ответ) <br>
            case "exploier": <br>
            ...  <br>
            break; <br>

            defoult (если не совпало ни с одним значением в case) <br>

          }
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