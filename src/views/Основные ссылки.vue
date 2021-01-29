<template>
  <div>
    <h2 class="template-title-component">Основные учебные ссылки-видео</h2>
    <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
    <div class="wrapper-video-lesson">
      <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
      <div class="bg-lesson-one">
        <h2>Vue и js vanilla первоочередное учить</h2>

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
      <!-- TWO -->
      <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
      <div class="bg-lesson-two">
        <h2>Vue - полезные ссылки</h2>

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
      <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
      <div class="bg-lesson-three">
        <h2>JS - полезные ссылки</h2>

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
      <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
      <div class="bg-lesson-three">
        <h2>JS - второстепенные ссылки</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoFour()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>
      <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
      <div class="bg-lesson-three">
        <h2>Vue - второстепенные ссылки</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoFive()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>
      <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
      <div class="bg-lesson-three">
        <h2>Полезные ссылки IT</h2>

        <ul class="mt-10">
          <li
            v-for="(item, index) in arrayWithUrlsVideoSix()"
            :key="index"
            class="mb-10"
          >
            <a :href="item.url" target="_blank">{{ item.nameContent }}</a>
          </li>
        </ul>
      </div>
      <!-- ------------------------------------------------------------------------COMMENT -RAZDELITEL________________________________________________________________ -->
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

    arrayWithUrlsVideoFour() {
      return this.$store.state.urlsVideo.arrayUrlsVideoFour;
    },

    arrayWithUrlsVideoFive() {
      return this.$store.state.urlsVideo.arrayUrlsVideoFive;
    },

    arrayWithUrlsVideoSix() {
      return this.$store.state.urlsVideo.arrayUrlsVideoSix;
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