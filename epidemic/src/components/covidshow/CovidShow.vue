<template>
  <div id="covid_show">
    <div class="show_header">
      <div class="title">国内疫情实时数据</div>
      <div class="delay">数据更新至 {{nowDate}}</div>
      <div class="source">来源: TianAPI数据平台</div>
    </div>
    <div class="show_body">

      <div class="increase">
        <div v-for="(value, key) in increase" :key="key">
          <p class="incr_txt">{{key}}</p>
          <p class="incr_num">{{value}}</p>
        </div>
      </div>

      <div class="accumulate">
        <div v-for="(value, key) in accumulate" :key="key">
          <p class="accu_txt">{{key}}</p>
          <p class="accu_num">{{value}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "CovidShow",
  props: {
    nowDate: {
      type: String
    },
    incrNum: {
      type: Array
    },
    accuNum: {
      type: Array
    }
  },
  data() {
    return {
      incrTxt: ['新增确诊', '新增本土', '新增境外', '新增无症状'],
      accuTxt: ['累计确诊', '累计境外', '累计治愈', '累计死亡'],
    }
  },
  create() {

    console.log(incrNum)
  },
  computed: {

    increase() {
      let txt = []
      let num = []
      if(this.incrTxt !== undefined) {
        txt = this.incrTxt
      }
      if(this.incrNum !== undefined) {
        num = this.incrNum
      }
      const size = txt.length
      const increaseObj = {}
      for (let i = 0; i < size; i++) {
        let key = txt[i]
        let value = num[i]
        increaseObj[key] = value
      }
      return increaseObj
    },
    accumulate() {
      let txt = []
      let num = []
      if(this.accuTxt !== undefined) {
        txt = this.accuTxt
      }
      if(this.accuNum !== undefined) {
        num = this.accuNum
      }
      const size = txt.length
      const accumulateObj = {}
      for (let i = 0; i < size; i++) {
        let key = txt[i]
        let value = num[i]
        accumulateObj[key] = value
      }
      return accumulateObj
    }

  }
};
</script>

<style>
  #covid_show {
    position: relative;
    padding-bottom: 1.125rem; 
  }
  /* #covid_show::after {
    content: "";
    border-radius: 1.25rem;
    background: url('~assets/img/common/bg.jpg');
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    -webkit-background-size:100% 100%;
    opacity: 0.4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  } */

  .show_header {
    width: 100%;
    height: 4rem;
    position: relative;
  }
  .title {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 800;
    margin: 1rem 0 1rem 1rem;
  }
  .delay,
  .source {
    position: absolute;
    bottom: 0;
    font-size: 0.75rem;
    color: rgb(153,153,153);
  }
  .delay {
    left: 1rem;
  }
  .source {
    right: 1rem;
  }

  .show_body {
    width: 100%;
  }
  .increase,
  .accumulate {
    display: flex;
  }
  .increase {
    border-bottom: 0.0625rem rgb(238,238,238) solid;
  }
  .accumulate {
    border-top: 0.0625rem rgb(238,238,238) solid;
  }
  .increase>div,
  .accumulate>div {
    flex: 1;
    text-align: center;
  }
  .incr_txt,
  .accu_txt {
    font-size: 1rem;
  }
  .incr_num,
  .accu_num {
    font-size: 1.125rem;
    font-weight: 800;
  }
  .increase>div:first-child>p.incr_num,
  .increase>div:nth-child(2)>p.incr_num {
    color: rgb(255,106,87);
  }
  .increase>div:nth-child(3)>p.incr_num,
  .accumulate>div:nth-child(2)>p.accu_num {
    color: rgb(71,109,160);
  }
  .increase>div:last-child>p.incr_num {
    color: rgb(232,109,72);
  }
  .accumulate>div:first-child>p.accu_num {
    color: rgb(232,49,50);
  }
  .accumulate>div:nth-child(3)>p.accu_num {
    color: rgb(16,174,181);
  }
  .accumulate>div:last-child>p.accu_num {
    color: rgb(77,80,84);
  }
</style>
