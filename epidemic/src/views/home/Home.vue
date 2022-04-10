<!-- 主页 -->
<template>
  <div id="home">
    <div class="show">
      <covid-show
        class="covid_show"
        :nowDate="nowDate"
        :incrNum="incrNum"
        :accuNum="accuNum"
      />
    </div>

    <div class="map">
      <covid-map />
    </div>
    <div class="news">
      <covid-news />
    </div>

    <div class="warm-prompt">
      <span class="prompt_img"
        ><img src="~assets/img/Home/cube.3c7b9b7.svg" alt=""
      /></span>
      <span class="prompt_txt">积极防护，保护自己，戴口罩，勤洗手</span>
      <span class="prompt_img"
        ><img src="~assets/img/Home/cube.3c7b9b7.svg" alt=""
      /></span>
    </div>
    <br />
  </div>
</template>

<script>
import moment from "moment";
import { getCovidInfo, IncrInfo, AccuInfo } from "network/covidInfo";
import CovidShow from "components/covidshow/CovidShow";
import CovidMap from "components/covidmap/CovidMap";
import CovidNews from "components/covidnews/CovidNews.vue";

export default {
  name: "Home",
  components: {
    CovidShow,
    CovidMap,
    CovidNews
  },
  data() {
    return {
      nowDate: moment(new Date()).format("YYYY-MM-DD"),
      incrNum: [],
      accuNum: []
    };
  },
  created() {
    getCovidInfo().then(res => {
      const desc = res.newslist[0].desc;
      const incrObj = new IncrInfo(desc);
      this.incrNum = Object.values(incrObj);
      const accuObj = new AccuInfo(desc);
      this.accuNum = Object.values(accuObj);
    });
  }
};
</script>

<style>
#home {
  width: 100%;
  background: -webkit-linear-gradient(top, #92D4E2, #cce9f0);
}
.show,
.map,
.news {
  width: 50%;
  margin: 0px auto;
  background-color: white;
  z-index: 999;
}
.warm-prompt {
  display: flex;
  margin: 0 auto;
  padding: 0;
  width: 50%;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* padding: 1rem; */
  text-align: center;
  line-height: 3rem;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #fff;
  border-radius: 0.625rem;
}

.warm-prompt span.prompt_img {
  width: 4rem;
}
.warm-prompt span.prompt_img img {
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0rem;
}
.warm-prompt span:first-child {
  margin-left: 7rem;
}
.warm-prompt span:last-child {
  margin-right: 7rem;
}

.warm-prompt span.prompt_txt {
  flex: 1;
}
</style>
