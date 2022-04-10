<template>
  <div id="nav-bar">
    <div class="left" @click="btnClick('/home')">
      <img src="~assets/img/common/logo.png" alt="logo" />
      <p>益苗 | 新冠疫苗科普平台</p>
    </div>

    <div class="center">
      <nav-bar-item path="/coupe" class="hvr-underline-from-center">
        <img
          class="item"
          slot="item-icon"
          src="~assets/img/coupe/coupe_logo.png"
          alt=""
        />
        <div slot="item-text">新冠疫苗科普</div>
      </nav-bar-item>
      <nav-bar-item path="/attentions" class="hvr-underline-from-center">
        <img
          class="item"
          slot="item-icon"
          src="~assets/img/attentions/attention_logo.png"
          alt=""
        />
        <div slot="item-text">接种注意事项</div>
      </nav-bar-item>
      <nav-bar-item path="/conditions" class="hvr-underline-from-center">
        <img
          class="item speimg"
          slot="item-icon"
          src="~assets/img/conditions/cani_logo.png"
          alt=""
        />
        <div slot="item-text">我能打吗</div>
      </nav-bar-item>
    </div>

    <div class="right">
      <img src="~assets/img/common/miaomiao.png" alt="logo_1" />
    </div>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";

export default {
  name: "NavBar",
  components: {
    NavBarItem
  },
  data() {
    return {};
  },
  methods: {
    btnClick(path) {
      this.$router.replace(path).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style>
@import "../../assets/css/hover.css";

#nav-bar {
  display: flex;
  height: 6em;
  text-align: center;
  /* background: rgb(171,221,232); */
  /* background-color: #4cc2c4; */
  background-color: rgb(105, 222, 222);
  /* background-color: #7acef4; */
  /* background-color: #56b881; */
  /* background-color: rgb(19,134,134); */
  color: aliceblue;
  border-bottom-left-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
}
.left {
  width: 14em;
}
.center {
  flex: 1;
}

.left {
  text-align: center;
  font-size: 1.125rem;
  position: relative;
}
.left img {
  height: 3em;
  opacity: 0.6;
  position: absolute;
  left: 15px;
  top: 23px;
}
.left p {
  position: absolute;
  width: 100%;
  margin: 0;
  top: 56%;
  left: 80%;
  font-size: 20px;
  transform: translate(-50%, -50%);
}

.center {
  display: flex;
  justify-content: center;
}
.item {
  height: 3em;
}
.special {
  margin-right: 1.875rem;
}
.speimg {
  margin-left: 1.5rem;
}

.right {
  position: relative;
}
.right img {
  height: 3em;
  position: absolute;
  right: 2em;
  top: 1em;
}

.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(0.0625rem) translateZ(0);
  transform: perspective(0.0625rem) translateZ(0);
  box-shadow: 0 0 0.0625rem rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
</style>
