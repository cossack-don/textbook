(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d1e":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Цикл For")]),r("div",{staticClass:"template-discription-component"},[t._v(" for(счетчик,условие, шаг) { "),r("br"),t._v(" тело цикла "),r("br"),t._v(" } ")]),r("div",{staticClass:"template-text-component"},[t._v(" Пример "),r("br"),r("br"),t._v(" for(let i = 0; i < 5; i++) { "),r("br"),t._v(" console.log(i) "),r("br"),t._v(" } "),r("br")]),t._v(" тут можно вставить фрейм с код пеном цикла как работает "),r("div",{staticClass:"template-discription-component"},[t._v(" Выход из любого цикла - break, писать внутри тела цикла ")])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"101d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" Local Storage в локал сторадж хранятся значения ключ - значение хранятся даже после перезагрузки хранятся только в строках использую формат json для хранения для преобразования в json JSON.stringify(обьект) => будет строка JSON.parse(обьект) => будет обьект добавить в localStorage.setItem() чтоб получить значение из localStorage.getItem() удалить из localStorage.removeItem() очистить весь localStorage.clear() sessionStorage - хранит инфу пока ты в браузере, если вышел, данные стерлись sessionStorage.setItem() sessionStorage.getItem() sessionStorage.removeItem() sessionStorage.clear() пример const input = prompt('your name'); const obj = { name:input } const jsonObj = JSON.stringify(obj); localStorage.setItem('user', jsonObj); const localStorage.getItem('user') ")])},s=[],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},1256:function(t,e,r){t.exports=r.p+"img/or.297ff953.jpg"},"12f7":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" try catch ОГбработка ошибок Если не хотим прерывать работу программы, то поможет трай и кетч сначало срабатывает трай, если нашла ошибку то трай пропускается и выполнится кетч пример try { ... code } catch (error) { error.name error.message error.stack } мы можем добавить свои ошибки например let error = new Error('bad tada') выброс ошибки своей throw error для одного раза , короткая запись throw new Error('message error') try { const input = promt('enter your name') const inputArray = input.split(' '); создаем массив из слов через пробел if(inputArray.length != 2) { throw new Error('invalid input') } } catch (error) { alert(error.message) } ")])},s=[],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"1a55":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("CountTwo2")])},s=[],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"2e32":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Цикл while")]),r("div",{staticClass:"template-discription-component"},[t._v(" 3 вида циклов "),r("br"),r("br"),t._v(" -Цикл с предусловием "),r("br"),t._v(" -Цикл с постусловием "),r("br"),t._v(" -Цикл со счетчиком "),r("br")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" цикл while (условие) { "),r("br"),t._v(" тело цикла "),r("br"),t._v(" } ")])]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" Пример "),r("br"),r("br"),t._v(" let count = 0; "),r("br"),r("br"),t._v(" while (count < 4) { "),r("br"),t._v(" count++ "),r("br"),t._v(" } "),r("br"),t._v(" "),r("br"),t._v(" Когда count будет 4, цикл закончится 4 < 4 не больше, а равны ")])]),r("div",{staticClass:"template-discription-component"},[t._v(" Когда один раз проходится по телу цикла - это итерация (один раз проходит) ")]),r("div",{staticClass:"template-discription-component"},[t._v(" Пока условие тру в while (условие true) цикл будет повторяться ")])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"2fbc":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Операторы if else и ?")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Тернарный оператор ?")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v("(условие) ? знач1 : знач2 "),r("br"),t._v(" если условие выполняется, то оператор возвращает знач 1 если условие не выполняется то выводит знач2 "),r("br"),t._v(" const cost = 500;"),r("br"),t._v(' let category = (cost > 500) ? "height price" : "low price"; ')])]),r("h3",{staticClass:"template-title-mini-component"},[t._v("if else")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v("if(выполняется если условие true) { "),r("br"),t._v(" тут код "),r("br"),t._v(" }")])]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v("if(выполняется если условие true) { "),r("br"),t._v(" тут код (действие) "),r("br"),t._v(" } else (иначе (условие false)) { "),r("br"),t._v(" выполняется действие это "),r("br"),t._v(" } ")])]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" if(условие) { "),r("br"),t._v(" код "),r("br"),t._v(" } else { "),r("br"),t._v(" код "),r("br"),t._v(" } else if (условие) { "),r("br"),t._v(" код "),r("br"),t._v(" } ")])])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"464e":function(t,e,r){},5669:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(' cookies КУКИ это небольшие строки данных хранятся в браузере , устанавливают сервером и при запросе сохраняют с js document.cookies = "user=Jonh" можно перезаписывать значения куке можно установить время жизни max-age с помощью js пример document.cookies = "user=jon;max-age=3600 (секунды)"; ')])},s=[],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},5842:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("API")]),r("div",{staticClass:"template-discription-component"},[t._v(" API (программный интерфейс приложения, интерфейс прикладного программирования) (англ. application programming interface, API) — описание способов (набор классов, процедур, функций, структур или констант), которыми одна компьютерная программа может взаимодействовать с другой программой. "),r("br"),r("br"),t._v(" Обычно входит в описание какого-либо интернет-протокола, программного каркаса (фреймворка) или стандарта вызовов функций операционной системы). Часто реализуется отдельной программной библиотекой или сервисом операционной системы. Используется программистами при написании всевозможных приложений. ")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" API как средство интеграции приложений "),r("br"),r("br"),t._v(" API определяет функциональность, которую предоставляет программа (модуль, библиотека), при этом API позволяет абстрагироваться от того, как именно эта функциональность реализована."),r("br"),r("br"),t._v(" Если программу (модуль, библиотеку) рассматривать как чёрный ящик, то API — это множество «ручек», которые доступны пользователю данного ящика и которые он может вертеть и дёргать."),r("br"),r("br"),t._v(" Программные компоненты взаимодействуют друг с другом посредством API. При этом обычно компоненты образуют иерархию — высокоуровневые компоненты используют API низкоуровневых компонентов, а те, в свою очередь, используют API ещё более низкоуровневых компонентов."),r("br"),r("br"),t._v(" По такому принципу построены протоколы передачи данных по Интернету. Стандартный стек протоколов (сетевая модель OSI) содержит 7 уровней (от физического уровня передачи бит до уровня протоколов приложений, подобных протоколам HTTP и IMAP). Каждый уровень пользуется функциональностью предыдущего («нижележащего») уровня передачи данных и, в свою очередь, предоставляет нужную функциональность следующему («вышележащему») уровню."),r("br"),r("br"),t._v(" Понятие протокола близко по смыслу к понятию API. И то, и другое является абстракцией функциональности, только в первом случае речь идёт о передаче данных, а во втором — о взаимодействии приложений."),r("br"),r("br"),t._v(" API библиотеки функций и классов включает в себя описание сигнатур и семантики функций. ")])]),r("br"),r("br"),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://ru.wikipedia.org/wiki/API",target:"_blank"}},[t._v("Ссылка на википедию API")]),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://habr.com/ru/post/464261/",target:"_blank"}},[t._v("Ссылка на Что такое API простыми словами")])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"5b1e":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("JSON")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Внешний АПИ для полного РЕСТ ФУЛ АПИ")]),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://habr.com/ru/company/mailru/blog/334536/",target:"_blank"}},[t._v("Руководство для начинающих по прогрессивным веб-приложениям и фронтенду")]),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://tyapk.ru/blog/post/rest-api-for-test-purpose",target:"_blank"}},[t._v("Ссылка на документацию Fake Rest API (jsonplaceholder)")]),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://github.com/typicode/json-server",target:"_blank"}},[t._v("jsonplaceholder документация с github + файл бд")]),r("div",{staticClass:"template-discription-component"},[t._v(" Вместо яндекс диска можно использовать гитхаб и скидывать туда примеры и давать ссылку "),r("br"),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://yadi.sk/d/9rmtu7yHhqfEAw",target:"_blank"}},[t._v("Cсылка на пример кода исходники")])])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"5ca7":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Переменные JavaScript")]),r("div",{staticClass:"template-discription-component"},[t._v("Переменная - выделенная область памяти, у которой есть имя.")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[r("span",{staticClass:"template-marker-text-red "},[t._v("-var")]),t._v(" синтаксис ES5, устаревшое "),r("br"),r("span",{staticClass:"template-marker-text-red "},[t._v("-let")]),t._v(" - можно изменять let value = 157; value = 189 "),r("br"),r("span",{staticClass:"template-marker-text-red "},[t._v("-const")]),t._v(" константа - нельзя изменять const value = 157; value = 189 (ошибка будет), нельзя объявлять пустой ")])]),r("div",{staticClass:"template-text-component"},[t._v(" 1.состоять из букв,цифр и символов $ и _ "),r("br"),t._v(" 2.быть уникальным "),r("br"),t._v(" 3.начинаться с буквы или символа $ или _ "),r("br"),t._v(" 4. писать переменные с помощью CamelCase "),r("br"),t._v(" 5. нельзя использовать зареверзированные переменные ")])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"5ced":function(t,e,r){},6083:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("Ссылка на документацию")]),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://learn.javascript.ru/destructuring",target:"_blank"}},[t._v("Ссылка на документацию Деструктуризация")]),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("Пример на Code Pen")]),r("a",{staticClass:"template-link-code-pen",attrs:{href:"https://codepen.io/impertubable/pen/JjRzdgB",target:"_blank"}},[t._v("Пример на Code Pen")]),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("Заголовок h2")]),r("h2",{staticClass:"template-title-component"},[t._v("Fetch")]),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("Заголовок h3")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("if else")]),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("ОПИСАНИЕ, ОПРЕДЕЛЕНИЕ")]),r("div",{staticClass:"template-discription-component"},[t._v(" ОПИСАНИЕ, ОПРЕДЕЛЕНИЕ ")]),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("Пример кода на синем фоне")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" function sum(a,b) { "),r("br"),t._v(" return a+b "),r("br"),t._v(" } ")])]),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("обычный текст описания")]),r("div",{staticClass:"template-text-component"},[t._v(" обычный текст описания ")]),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}}),r("h1",[t._v("iframe на ютуб источник")]),t._v(" для видео с ютуба заходишь в видео нажимаешь на видео и будет скопировать html код и выдаст норм фрейм "),r("iframe",{attrs:{width:"100%",height:"700",src:"https://www.youtube.com/embed/geT5dQIaarU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),r("hr",{staticStyle:{"margin-top":"15px","margin-bottom":"15px",background:"#1dc579"}})])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},6180:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" Сетевое взаимодействие Клиент => Сервер сервер - удаленный комп который умеет получать и обрабатывать запросы и выдавать информацию. у сервера есть свой url (google.com) , ip адрес 192.168.0.1 DNS - Система доменных имен, преобразует url в ip адрес протоколы запроса http, https на сервер типы запроса GET, POST, DELETE, PUT (Получить, отправить, удалить, изменить) AJAX - для работы с сервером без перезагрузки стр, запрос fetch - новый вариант ajax запроса ")])},s=[],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},6338:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("HTMLElement.hidden")]),r("div",{staticClass:"template-text-component"},[t._v(" HTMLElement Свойство hidden является Boolean типом данных , который принимает значение true , если содержимое спрятано, в противном случае значение будет false. Это свойство соверешенно отличается от использования CSS свойства display , чтобы контролировать отображение элемента.Свойство hidden применимо ко всем режимам представления и не должно использоваться для скрытия содержимого предназначенного для прямого доступа к пользователю. ")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" isHidden = HTMLElement.hidden;"),r("br"),r("br"),t._v(" HTMLElement.hidden = true | false; ")])])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},6491:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Destructuring Деструктуризация массивов и обьектов")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Деструкторизация нужно записать элементы массива в переменные и так же с обьектами")]),r("div",{staticClass:"template-text-component"},[t._v(" Важен порядок в массиве "),r("br"),r("br"),t._v(" выводит по порядку массива"),r("br"),t._v(" let nums = [29,30,21];"),r("br"),t._v(" let [first, secind,therd] = nums "),r("br"),t._v(" часто используют сплит "),r("br"),r("br"),t._v(" чтобы пропустить элемент массива используют [first, ,therd]"),r("br"),t._v(" чтобы установить по умолчанию значение то [first, second,therd=50]"),r("br"),t._v(" если 3 элемента не будет в массиве,выведется 50"),r("br"),r("br"),t._v(" let nums = [1,3,200,30,30]"),r("br"),t._v(" let [num1,num2, ...rest] = nums "),r("br"),t._v(" ...spread оператор,выводит остальную часть массива сразу(в виде массива) например [200,30,30] ")]),r("a",{staticClass:"template-link-supporting-information",attrs:{href:"https://learn.javascript.ru/destructuring",target:"_blank"}},[t._v("Ссылка на документацию Деструктуризация")]),r("a",{staticClass:"template-link-code-pen",attrs:{href:"https://codepen.io/impertubable/pen/JjRzdgB",target:"_blank"}},[t._v("Пример на Code Pen")])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},7006:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Основные учебные ссылки-видео")]),r("h1",[t._v("Разобрать файл в STORE WITH URLS VIDEO")]),r("div",{staticClass:"wrapper-video-lesson"},[r("div",{staticClass:"bg-lesson-one"},[r("h2",[t._v("Смотреть в первую очередь")]),r("ul",{staticClass:"mt-10"},t._l(t.arrayWithUrlsVideoOne(),(function(e,a){return r("li",{key:a,staticClass:"mb-10"},[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.nameContent))])])})),0)]),r("div",{staticClass:"bg-lesson-two"},[r("h2",[t._v("Смотреть во вторую очередь")]),r("ul",{staticClass:"mt-10"},t._l(t.arrayWithUrlsVideoTwo(),(function(e,a){return r("li",{key:a,staticClass:"mb-10"},[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.nameContent))])])})),0)]),r("div",{staticClass:"bg-lesson-three"},[r("h2",[t._v("Смотреть в третью очередь")]),r("ul",{staticClass:"mt-10"},t._l(t.arrayWithUrlsVideoThree(),(function(e,a){return r("li",{key:a,staticClass:"mb-10"},[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.nameContent))])])})),0)])]),t._v(" разделить в сторе данный файл this.$store.state.urlsVideo.arrayUrlsVideoContent на 3 массива в этом файле разбить "),t._m(0)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{attrs:{href:"https://vk.com/doc43471214_580412033?hash=835031fea6b1191794&dl=d6ca56282167aecbf7"}},[t._v("ТЗ НА ДЖУНА ДОКИ")]),r("a",{attrs:{href:"https://www.figma.com/file/k1eyyiHvBq73LMlj9dBpwX/PML_Test_task_for_Junior_Frontend-(18.12)?node-id=1%3A1636"}},[t._v("фигма макет")]),r("a",{attrs:{href:"https://www.notion.so/Junior-Frontend-developer-aeeb4eac55634e11a855ae294fbe4404"}},[t._v("tz")])])}],l={data:function(){return{}},methods:{arrayWithUrlsVideoOne:function(){return this.$store.state.urlsVideo.arrayUrlsVideoOne},arrayWithUrlsVideoTwo:function(){return this.$store.state.urlsVideo.arrayUrlsVideoTwo},arrayWithUrlsVideoThree:function(){return this.$store.state.urlsVideo.arrayUrlsVideoThree}}},n=l,i=(r("c36d"),r("2877")),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"7f6b":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Date")]),r("div",{staticClass:"template-discription-component"},[t._v(" ОПИСАНИЕ, ОПРЕДЕЛЕНИЕ ")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" function sum(a,b) { "),r("br"),t._v(" return a+b "),r("br"),t._v(" } ")])])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"8e0d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Оператор Switch")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Как бы выглядел Switch при использование if else")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" if (browser == 'edge') { "),r("br"),t._v(" ... "),r("br"),t._v(" } else if (browser == 'firefox') { "),r("br"),t._v(" ... "),r("br"),t._v(" } else if (browser == 'safari') { "),r("br"),t._v(" ... "),r("br"),t._v(" } ")])]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Switch")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[r("span",{staticClass:"template-marker-text-red "},[t._v("Работает без приведения типов")]),t._v(" "),r("br"),r("span",{staticClass:"template-marker-text-red "},[t._v("switch")]),t._v(" (browser) { "),r("br"),t._v(" case 'edge' : "),r("br"),t._v(" ... "),r("br"),t._v(" break; (выход из switch), если break нет, то продолжает идти вниз по case-м "),r("br"),t._v(' case "firefox" : '),r("br"),t._v(" ... "),r("br"),t._v(" break; "),r("br"),t._v(' case "safari" : (можно проверять сразу для нескольких кейсов либо 1-ый кейс либо 2-й и тд и выдавать для них один ответ) '),r("br"),t._v(' case "exploier": '),r("br"),t._v(" ... "),r("br"),t._v(" break; "),r("br"),t._v(" defoult (если не совпало ни с одним значением в case) "),r("br"),t._v(" } ")])])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},9074:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Цикл Do While")]),r("div",{staticClass:"template-discription-component"},[t._v(" С пост условием цикл "),r("br"),t._v(" "),r("br"),t._v(" do { "),r("br"),t._v(" тело цикла "),r("br"),t._v(" } while (условие) ")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" Пример: "),r("br"),t._v(" let value = 0;"),r("br"),r("br"),t._v(" do {"),r("br"),t._v(" value++ "),r("br"),t._v(" } while (value < 5);"),r("br"),r("br"),t._v(" точку запятой ставить обязательно ")])]),r("div",{staticClass:"template-text-component"},[t._v(" Работает так же как и другие циклы, если условие true работает, если условие false , выходит из цикла "),r("br"),r("br"),t._v(" В отличие от while цикл do while выполнится один раз полюбому ")])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},"95a2":function(t,e,r){t.exports=r.p+"img/and.477a6286.jpg"},"9b97":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Функции в js (function, arrow function)")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Обычная функция")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" function sum(a, b, параметр) { "),r("br"),t._v(" return a+b "),r("br"),t._v(" } ")])]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Стрелочная функция")]),t._v(" Почитать получше про нее и видео добавить + полезные примеры и ссылки web dev, как передавать анонимные стрелочные и тд, больше примеров "),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" const area = (a, b, параметр) => { "),r("br"),t._v(" тело функции "),r("br"),t._v(" } ")])]),r("div",{staticClass:"template-text-component"},[t._v(" Стрелочной функцией можно пользоваться после её объявления, а не как обычной, в любом месте"),r("br"),t._v(" Должна быть объявлена имя переменной обязательно для стрелочной функции ")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Область видимости функций")]),r("div",{staticClass:"template-text-component"},[t._v(" Блочная,внутри функции и внешне(глобальная) ")]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Замыкания")]),r("div",{staticClass:"template-text-component"},[t._v(" Одна функция внитри другой и внитри них объявлена общая переменная ")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" Пример "),r("br"),r("br"),t._v(" function fun() { "),r("br"),t._v(" let message = 'hello';"),r("br"),r("br"),t._v(" return function() { "),r("br"),t._v(" console.log(message); "),r("br"),r("br"),t._v(" } } ")])]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Асинхронные операции")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" Есть синхронные и асинхронные операции "),r("br"),r("br"),t._v(" запрос на сервер асинхронные в основном(в фоне, не блокируют программу)"),r("br"),t._v(" выполняется через какое-то время, например"),r("br"),r("br"),t._v(" function counter(from, to) { "),r("br"),t._v(" let number = from;"),r("br"),r("br"),t._v(" const id = setInterval(() => {"),r("br"),t._v(" console.log(number);"),r("br"),r("br"),t._v(" if(number == to) {"),r("br"),t._v(" clearInterval(id);"),r("br"),t._v(" } else {"),r("br"),t._v(" number++;"),r("br"),t._v(" }"),r("br"),r("br"),t._v(" }, 1000) } "),r("a",{staticClass:"template-link-code-pen",attrs:{href:"https://codepen.io/impertubable/pen/OJRGogm?editors=0011",target:"_blank"}},[t._v("Пример на Code Pen")])])]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Колл бек функции")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" выполнить действие после асинхронной операции как завершится, используют колл бек функции "),r("br"),r("br"),t._v(" (в идеале нужно - отправился запрос на сервер, получили ответ, обработчик сработал)"),r("br"),r("br"),t._v(" много калл беков вкладывать - плохая практика"),r("br"),r("br")])]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" имитация запроса к серверу"),r("br"),t._v(" ответ от сервера через 2 секунды"),r("br"),r("br"),t._v(" const request = (callback) => {"),r("br"),t._v(" console.log('request');"),r("br"),r("br"),t._v(" setTimeout(() => {"),r("br"),t._v(" console.log('response');"),r("br"),t._v(' const data = {text:"hellow dannie s servera"}'),r("br"),t._v(" callback(data)"),r("br"),t._v(" }, 2000)"),r("br"),t._v(" }"),r("br"),r("br"),t._v(" обработка данных после получения с сервера"),r("br"),t._v(" const handler = (data) => {"),r("br"),t._v(" console.log('handler', data)"),r("br"),t._v(" }"),r("br"),r("br"),t._v(" request(handler); ")])]),t._v(" калл бекс тоже подучить получше "),r("h3",{staticClass:"template-title-mini-component"},[t._v("Промисы (Promise)")]),r("div",{staticClass:"template-discription-component"},[t._v(" Cпециальная конструкция которая обрабатывает асинхронные операции, как ОБЕРТКА действует"),r("br"),r("br"),t._v(" пример new Promise( (resolve, reject) => { "),r("br"),r("br"),t._v(" асинхронная операция "),r("br"),r("br"),t._v(" })"),r("br"),r("br"),t._v(" resolve,reject(калл бек функции)"),r("br"),t._v(" при успешном и не успешном заверешение, выходит resolve и reject ")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" resolve- успешное выполнение запроса "),r("br"),t._v(" reject - не успешное выполнение запроса"),r("br"),r("br"),t._v(" const request = new Promise( (resolve, reject) => {"),r("br"),t._v(" console.log('request')"),r("br"),r("br"),t._v(" setTimeout( () => {"),r("br"),t._v(" console.log('response');"),r("br"),t._v(" resolve(); (успешеый запрос)"),r("br"),t._v(" reject() (не успешный звпрос) закоментить"),r("br"),t._v(" }, 2000)"),r("br"),r("br"),t._v(" })"),r("br"),r("br"),t._v(" request.then( () => {"),r("br"),t._v(" console.log('resolve');"),r("br"),r("br"),t._v(" успешное выполнение"),r("br"),t._v(" },"),r("br"),t._v(" () => {"),r("br"),t._v(" console.log('reject');"),r("br"),r("br"),t._v(" не успешное выполнение"),r("br"),t._v(" }); ")])]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Контекст функции")]),t._v(" Контекст функции см , подучить "),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" const person = { "),r("br"),r("br"),t._v(" name: 'John Smith',"),r("br"),t._v(" sayHi () {"),r("br"),t._v(" console.log(`Hi ${this.name}`);"),r("br"),t._v(" }"),r("br"),r("br"),t._v(" }"),r("br"),t._v(" person.sayHi(); ")])]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" const calc = { "),r("br"),r("br"),t._v(" a:3,"),r("br"),t._v(" b:4,"),r("br"),t._v(" sum() {"),r("br"),t._v(" console.log(this.a + this.b);"),r("br"),t._v(" },"),r("br"),t._v(" nul() {"),r("br"),t._v(" console.log(this.a * this.b)"),r("br"),t._v(" },"),r("br"),t._v(" write(a,b) {"),r("br"),t._v(" this.a = a;"),r("br"),t._v(" this.b = b;"),r("br"),t._v(" }"),r("br"),r("br"),t._v(" }"),r("br"),r("br"),t._v(" write(3,3)"),r("br"),t._v(" calc.sum();"),r("br"),t._v(" calc.nul();"),r("br")])]),r("h3",{staticClass:"template-title-mini-component"},[t._v("Изменение контекста функции")]),t._v(" call apply bind см - подучить "),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" const person = { name: 'Vasa'}; "),r("br"),t._v(" const user = {name: 'Gosha'};"),r("br"),r("br"),t._v(" function greet() {"),r("br"),t._v(" console.log(`i am ${this.name}`)"),r("br"),t._v(" }"),r("br"),r("br"),t._v(" greet.call(user)"),r("br"),t._v(" выдаст i am Vasa"),r("br"),r("br"),t._v(" greet.call(person)"),r("br"),t._v(" выдаст i am Gosha"),r("br")])])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},b051:function(t,e,r){},b2ec:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-error-404"},[r("p",{staticClass:"wrapper-error-404__text"},[t._v("404 "),r("span",{},[t._v("error")])])])}],l={},n=l,i=(r("d2ef"),r("2877")),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},b4f5:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" fetch let url = \"http://ya.ru\" - по умолчанию гет запрос fetch возвращает промис fetch(url).then( (response) => { response.status response.statusText response.url важные методы response.text() response.json() } ) пример fetch(url).then( (response) => { return response.text(); } ) .then( (data) => { console.log(data) }) пример const options = { methid:'post', headers:{}, body:'' что отправляется на сервер } fetch(url,options).then(...); пример response - ответ fetch('./data.json') .then( (response) => { return response.json(); }) .then( (data) => { console.log(data) }) ")])},s=[],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Полезные советы")]),r("div",{staticClass:"template-code-component-wrapper"},[r("ul",[r("li",[r("span",{staticClass:"template-marker-text-red-bold"},[t._v("Не распыляться , учить одно")])]),r("li",[r("span",{staticClass:"template-marker-text-blue-bold"},[t._v("Не спрашивать Леню")])]),r("li",[r("span",{staticClass:"template-marker-text-red-bold"},[t._v("Смотреть как пишут опытные прогеры код и где косячут сколько думают")])]),r("li",[r("span",{staticClass:"template-marker-text-blue-bold"},[t._v("Учить теорию и сразу писать код , лучше небольшими порциями")])]),r("li",[r("span",{staticClass:"template-marker-text-red-bold"},[t._v("Мотивация и отдых")])]),r("li",[r("span",{staticClass:"template-marker-text-blue-bold"},[t._v("Не доводить до идеала, делать чтобы просто поначалу работало а потом рефакторить")])])])]),r("h2",{staticClass:"template-title-component"},[t._v("Cписок основных задач")]),r("div",{staticClass:"template-code-component-wrapper"},[r("ul",[r("li",[r("span",{staticClass:"template-marker-text-red-bold"},[t._v("Верстка брендов, доделать")])]),r("li",[t._v("СТРУКТУРУ ПРОЕКТА СДЕЛАТЬ НОРМ И ОЧИСТИТЬ")]),r("li",[t._v("Смотреть уроки по JS, Vue и делать конспект")]),r("li",[t._v("СМ VUE+VUEX КУРС")])])]),r("h2",{staticClass:"template-title-component"},[t._v("Алгоритм добавление компонента теории в код")]),r("div",{staticClass:"template-code-component-wrapper"},[r("ul",[r("li",[t._v("1-Добавить название компонента с шасширением компонент.vue в папку views => theoryvuepages")]),r("li",[t._v("2-Добавить название компонента в массив store=> arrayNameMiniProd(vue,js)")]),r("li",[t._v('3-Добавить маршрут в router component: () => import(/* webpackChunkName: "about" */ "@/views/Home")')])])]),r("h1",[t._v("Задачи по проекту и скиллам, и другие дела по IT")]),r("div",{staticClass:"wrapper-task"},[r("ul",{staticClass:"red-bg-ul"},[r("li",[t._v("---Сделать нормальную структуру и названия SPA, а потом уже писать остальное")]),r("li",[t._v("---Cмотреть актуальный стек вакансий на хх и с чего спрос")]),r("li",[t._v("---Скинуть на ноут и на работе проект БИМ и job SPA чтобы от туда брать шаблоны решений")]),r("li",[t._v("---Смотреть курс Vue+Vuex Udemy")]),r("li",[t._v("Научиться передавать события и общаться через компоненты между собой")])]),r("ul",{staticClass:"green-bg-ul"},[r("li",[t._v("---Разобрать гитхабы все")]),r("li",[t._v("---Перекинуть все на SSD")]),r("li",[t._v("Сертификаты it")]),r("li",[t._v("---Разобрать Портфолио и сделать одно нормальное")])]),r("ul",{staticClass:"yellow-bg-ul"},[r("li",[t._v("---Сделать тестовую продакшен версию SPA")]),r("li",[t._v("---Посмотреть как в проекте БИМ с роутами, если их много, как оптимизировать")]),r("li",[t._v("---Анимацию доделать")]),r("li",[t._v("Кнопка вверх при скроле")])])]),r("div",{staticClass:"template-discription-component"},[t._v(" .split(' ').join('-') split осуществляет разбиение строки в массив по указанному разделителю. join объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива ")])])}],l={methods:{},computed:{}},n=l,i=(r("cccb"),r("2877")),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},c36d:function(t,e,r){"use strict";r("b051")},c6b3:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"template-title-component"},[t._v("Console")]),r("div",{staticClass:"template-code-component-wrapper"},[r("code",{staticClass:"template-style-code"},[t._v(" console.log() вывод в консоль "),r("br"),t._v(" console.warn() вывод предупреждения в консоль "),r("br"),t._v(" console.error() вывод ошибки в консоль ")])])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},cccb:function(t,e,r){"use strict";r("5ced")},d2ef:function(t,e,r){"use strict";r("464e")},ece2:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("fetcha prodjects mim")])},s=[],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports},f575:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"template-title-component"},[t._v("Типы данных")]),a("div",{staticClass:"template-code-component-wrapper"},[a("code",{staticClass:"template-style-code"},[a("span",{staticClass:"template-marker-text-red "},[t._v("String")]),t._v(" - строка \" \" или ' ' "),a("br"),a("span",{staticClass:"template-marker-text-red "},[t._v("Шаблонные строки")]),t._v(" - ` ${ переменная,функция и т.д.} ` "),a("span",{staticClass:"template-marker-text-red "},[t._v("Number")]),t._v(" - число "),a("br"),a("span",{staticClass:"template-marker-text-red "},[t._v("NaN")]),t._v(' - не число. "text" * 256 выдаст NaN (число умножать на строку нельзя) '),a("br"),a("span",{staticClass:"template-marker-text-red "},[t._v("Infinity")]),t._v(" - бесконечность. 256 / 0 (на ноль делить нельзя, выдаст Infinity) "),a("br"),a("span",{staticClass:"template-marker-text-red "},[t._v("Boolean")]),t._v(" - логический тип (true , false) "),a("br"),a("span",{staticClass:"template-marker-text-red "},[t._v("Undefined")]),t._v(" - отсутствие значения (let a; console.log(a) выведет Undefined) "),a("br"),a("span",{staticClass:"template-marker-text-red "},[t._v("Null")]),t._v(" - явное показывает, что пусто в переменной (let value = null) ")])]),a("div",{staticClass:"template-text-component"},[t._v(' -Cтроки можно складывать "string-1" + "string-2" '),a("br"),t._v(" -Длинна строки string.length отчет с 1 "),a("div",{staticClass:"template-line"}),t._v(" -Остаток от деления (числа) 5 % 4 = 1, 12 % 7 = 5, 15 % 3 = 0 "),a("br"),t._v(" -Увелечение числа на 1 или уменьшение ++ и -- "),a("br"),t._v(' -Чтобы перевести СТРОКУ в ЧИСЛО ставят + , например let a ="2" + "2" => +a - будет число,а не строка '),a("br"),a("div",{staticClass:"template-line"}),t._v(" -Boolean логическое отрицание !true (будет false), !false(будет true) "),a("br"),t._v(" -Boolean используют first && second (и), first || second (или) "),a("br"),t._v(" -Boolean порядок выполнения вначале !(не) потом приоритет && (и) и потом || (или) "),a("div",{staticClass:"template-line"}),a("span",{staticClass:"template-marker-text-red "},[t._v("Оператор &&")]),a("img",{staticClass:"template-image",attrs:{src:r("95a2"),alt:""}}),a("span",{staticClass:"template-marker-text-red "},[t._v("Оператор ||")]),a("img",{staticClass:"template-image",attrs:{src:r("1256"),alt:""}})])])}],l={},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.be485c31.js.map