<template>
  <div>
    <h2 class="template-title-component">Основные учебные ссылки-видео</h2>

    <h1>Разобрать файл в STORE WITH URLS VIDEO</h1>
    <div class="wrapper-video-lesson">
      <!--  -->
      <div class="bg-lesson-one">
        <h2>Vue - курсы</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoOne()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="bg-lesson-two">
        <h2>Vue - учебники</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoTwo()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="bg-lesson-three">
        <h2>JS - курсы</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoThree()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>

      <div class="bg-lesson-three">
        <h2>JS - учебники</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoThree()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>

      <div class="bg-lesson-three">
        <h2>Полезные ссылки IT</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoThree()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>

      <div class="bg-lesson-three">
        <h2>Полезные ссылки</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoThree()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>
    </div>

    разделить в сторе данный файл
    this.$store.state.urlsVideo.arrayUrlsVideoContent на 3 массива в этом файле
    разбить

    <ul class="mt-10 all-links-video">
      <li
        v-for="(item, index) in arrayWithUrlsVideoThree()"
        :key="index"
        class="mb-10"
      >
        <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
      </li>
    </ul>
    <div>
      <a
        href="https://vk.com/doc43471214_580412033?hash=835031fea6b1191794&dl=d6ca56282167aecbf7"
        >ТЗ НА ДЖУНА ДОКИ</a
      >
      <a
        href="https://www.figma.com/file/k1eyyiHvBq73LMlj9dBpwX/PML_Test_task_for_Junior_Frontend-(18.12)?node-id=1%3A1636"
        >фигма макет</a
      >
      <a
        href="https://www.notion.so/Junior-Frontend-developer-aeeb4eac55634e11a855ae294fbe4404"
        >tz</a
      >
    </div>

    <div>
      https://www.youtube.com/c/VladislavNeverov/playlists <br />
      https://www.youtube.com/playlist?list=PLvpsu6rFEzwXtXe3bUQp5pCa6dG2z6S7t
      <br />
      https://www.youtube.com/watch?v=5lBf-Fm4io4&feature=share <br />
      https://www.youtube.com/watch?v=oxUyIzDbZts&feature=share <br />
      https://www.youtube.com/channel/UCP-xJwnvKCGyS-nbyOx1Wmg <br />
      https://www.youtube.com/c/IvanPetrychenkoDev/playlists <br />
      https://www.youtube.com/channel/UChSGI2R2kRMjzXJuYqHWQZg <br />
      https://www.youtube.com/c/ITVDN/playlists <br />
      https://codepen.io/impertubable/pen/xxENvxJ <br />
      https://www.youtube.com/channel/UCr_ImhIijOhCX7mUzBMFlaA <br />
      https://www.youtube.com/watch?v=e-E0UB-YDRk&t=7420s <br />
      https://www.youtube.com/watch?v=jqp1PNApy3A <br />

      https://itlogia.ru/article/10_resursov_dlya_izucheniya_vuejs_v_2020_godu
      https://www.vuemastery.com/courses https://www.vuemastery.com/
      https://scrimba.com/allcourses?price=free&q=vue
      https://scotch.io/courses/getting-started-with-vuejs/vue-events-build-a-counter
      https://alligator.io/vuejs/ https://www.youtube.com/watch?v=4deVCNJq3qc
      https://www.freecodecamp.org/news/vue-js-full-course/ vuejs
      https://ww1.underver.se/viewtopic.php?t=181417
      https://www.youtube.com/watch?v=CjXgoYo86yY
      https://www.youtube.com/watch?v=BIuQfQcptIU&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=4
      https://v15.vuetifyjs.com/ru/
      https://store.vuetifyjs.com/products/vuetify-material-dashboard-pro/preview
      https://vuetifyjs.com/en/getting-started/wireframes/#examples
      https://v15.vuetifyjs.com/ru/framework/pre-made-layouts
      https://www.youtube.com/channel/UC6eR_ndNgaTeE5t2Ud4ZiHw/playlists
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    arrayWithUrlsVideoOne() {
      return this.$store.state.urlsVideo.arrayUrlsVideoOne;
    },

    arrayWithUrlsVideoTwo() {
      return this.$store.state.urlsVideo.arrayUrlsVideoTwo;
    },

    arrayWithUrlsVideoThree() {
      return this.$store.state.urlsVideo.arrayUrlsVideoThree;
    },
  },
};
</script>

<style>
.wrapper-video-lesson {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.bg-lesson-one {
  background: #f8d7da;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
}

.bg-lesson-two {
  background: #cff4fc;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
}

.bg-lesson-three {
  background: #d1e7dd;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mt-10 {
  margin-top: 10px;
}

.all-links-video {
  display: flex;
  justify-content: center;
}
</style>