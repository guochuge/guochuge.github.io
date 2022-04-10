<template>
  <div id="news_container">
    <div class="news_title">
      国内疫情实时播报
    </div>
    <div class="container">
      <!-- Left vertical line -->
      <div class="container__line"></div>

      <!-- The timeline items container -->
      <ul class="container__items">
        <!-- Each timeline item -->
        <li
          class="container__item"
          v-for="(item, index) in news_info"
          :key="index"
        >
          <!-- The circle and title -->
          <div class="container__top">
            <!-- The circle -->
            <div class="container__circle"></div>

            <!-- The title -->
            <div class="container__title">
              <div class="artTitle" @click="urlClick(item.sourceUrl)">{{ item.title }}</div>
              <div class="pubDate">{{ item.pubDateStr }}</div>
            </div>
          </div>

          <!-- The description -->
          <div class="container__desc" @click="urlClick(item.sourceUrl)">
            {{ item.summary }}
          </div>
        </li>

        <!-- Repeat other items -->
      </ul>
    </div>
  </div>
</template>

<script>
import { getCovidInfo, NewsInfo } from "network/covidInfo";

export default {
  name: "CovidNews",
  data() {
    return {
      news_info: []
    };
  },
  methods: {
    urlClick(url) {
      window.open(url, "_blank")
    }
  },
  created() {
    getCovidInfo().then(res => {
      const news = res.newslist[0].news;
      this.news_info = news.map(item => {
        return new NewsInfo(item);
      });
    });
  }
};
</script>

<style scoped>
#news_container {
  border-radius: 0 0 0.625rem 0.625rem;
}

.container {
  /* Used to position the left vertical line */
  position: relative;
  overflow: hidden;
  border-radius: 0 0 0.625rem 0.625rem;
}

.news_title {
  font-size: 1.25rem;
  font-weight: 800;
  padding: 1rem 0 1rem 1rem;
}

.container__line {
  border-right: 0.125rem solid #aaa;
  left: 0.9375rem;
  position: absolute;
  top: 1rem;
  height: 100%;
}

.container__items {
  /* Reset styles */
  list-style-type: none;
  margin: 0rem;
  padding: 0rem;
}

.container__item {
  margin-bottom: 1rem;
}

.container__top {
  /* Center the content horizontally */
  align-items: center;
  display: flex;
}

.container__circle {
  /* Rounded border */
  background-color: rgb(71, 192, 196);
  border-radius: 9999px;

  /* Size */
  height: 1rem;
  width: 1rem;
  z-index: 999;
  margin-left: 0.5rem;
}

.container__title {
  /* Take available width */
  height: 2rem;
  flex: 1;
  position: relative;
  font-weight: 600;
}
.artTitle {
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  left: 0.5rem;
  top: 0.3rem;
}
.pubDate {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(153, 153, 153);
  position: absolute;
  top: 0.625rem;
  right: 1.5rem;
}

.container__desc {
  /* Make it align with the title */
  background-color: rgb(245, 246, 247);
  padding: 0.5rem;
  margin: 0.5rem 1rem 0 2rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}
</style>
