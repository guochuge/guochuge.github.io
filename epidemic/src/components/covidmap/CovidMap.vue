<template>
  <div class="map-container">

    <div class="header">
      <p class="title">国内疫情地图</p>
    </div>

    <!-- echarts容器 -->
    <div id="echarts-container"></div>
    
  </div>
</template>

<!-- 国内疫情地图 -->
<script>
import { getChinaData } from "network/covidInfo";

export default {
  name: 'CovidMap',
  components: {

  },
  data() {
    return {
    }
  },
  created() {

    getChinaData().then(res => {
      let data = res.map(item => {
        return {
          name: item.provinceName,
          value: item.currentConfirmedCount,
        }
      })
      this.$myChart(  
        "echarts-container",
        data
      )
    })

  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  padding-bottom: 2rem;
}
.map-container>.header {
  box-sizing: border-box;
  /* padding: 0 0.32rem; */
}
.map-container>.title {
  font-weight: 600;
  font-size: 0.34rem;
  height: 0.48rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
}
#echarts-container {
  width: 100%;
  height: 50vw;
  background-color: rgb(248,249,250);
}
</style>