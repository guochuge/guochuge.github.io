<!-- 接种注意事项页面 -->
<template>
  <div id="attentions">
    <div class="question" id="question">
      <div class="fade-in-left">
        <img
          src="../../assets/img/attentions/attention.png"
          alt="attention.jpg"
        />
      </div>

      <!-- question标题 -->
      <div class="bounce-in-top">
        <h1>{{ name }}</h1>
      </div>

      <img
        class="pulsate-fwd"
        id="downward"
        src="~assets/img/attentions/xiangxia.svg"
        alt=""
        @click="prev()"
      />
    </div>

    <!-- 接种前 -->
    <div class="before" id="before">
      <!-- <div class="firstPart pulsate-bck" @click="firstPart()">
        <img src="../../assets/img/attentions/xiangshang.svg" alt="" />
      </div> -->

      <img
        class="pulsate-fwd"
        id="upward"
        src="~assets/img/attentions/xiangshang.svg"
        alt=""
        @click="firstPart()"
      />

      <div class="before-txt">
        <h1>接种前</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ before[0] }}</p>
        <p>{{ before[1] }}</p>
        <p>{{ before[2] }}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ before[3] }}</p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ before[4] }}</p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ before[5] }}</p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ before[6] }}</p>
        <br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ before[7] }}</p>
      </div>
      <img src="../../assets/img/attentions/attentions_1.png" alt="" />

      <img
        class="pulsate-fwd"
        id="downward_2"
        src="~assets/img/attentions/xiangxia.svg"
        alt=""
        @click="next()"
      />
    </div>

    <!-- 接种后 -->
    <div class="after" id="after">
      <img src="../../assets/img/common/people.png" alt="" />

      <img
        class="pulsate-fwd"
        id="upward_2"
        src="~assets/img/attentions/xiangshang.svg"
        alt=""
        @click="secondPart()"
      />
      <div class="after-txt">
        <h1>接种后</h1>
        <p>&nbsp;&nbsp;{{ after[0] }}</p>
        <p>{{ after[1] }}</p>
        <p>{{ after[2] }}</p>
        <p>{{ after[3] }}</p>
        <p>{{ after[4] }}</p>

        <p>{{ after[5] }}</p>
        <p>{{ after[6] }}</p>
        <p>{{ after[7] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getAttentions } from "network/attentions";

export default {
  name: "attentions",
  data() {
    return {
      attentions: {},
      name: "",
      source: "",
      before: [],
      after: []
    };
  },
  methods: {
    prev() {
      document.getElementById("before").scrollIntoView({
        behavior: "smooth"
      });
    },
    next() {
      document.getElementById("after").scrollIntoView({
        behavior: "smooth"
      });
      //  console.log("ssd")
    },
    firstPart() {
      // document.getElementById("attentions").scrollIntoView();
      var scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    secondPart() {
      document.getElementById("before").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  created() {
    // 请求接种禁忌事项
    getAttentions().then(res => {
      console.log(res);
      this.attentions = res.data[0];
      this.name = res.data[0].name;
      this.source = res.data[0].source;
      this.after = res.data[0].data.after;
      this.before = res.data[0].data.before;
    });
  }
};
</script>

<style scoped>
#coupe {
  background: -webkit-linear-gradient(top, #92d4e2, #cce9f0);
}
#attentions {
  width: 100%;
  margin: 0;
  position: relative;
  /* background: linear-gradient(rgb(158, 214, 224),rgb(243, 243, 243)); */
}
.question {
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 6rem);
  margin: 0;
  background: linear-gradient(rgb(158, 214, 224), rgb(188, 217, 223));
  position: relative;
}
.question h1 {
  position: relative;
  top: 6.5rem;
  left: 0em;
  width: 100%;
  text-align: center;
  font-family: "华文彩云";
  font-size: 4.4rem;
  margin: 0;
  color: rgb(67, 166, 247);
}
.question img {
  position: relative;
  top: 31.5vh;
  left: 7vh;
  width: 6rem;
  height: 6rem;
}
.nextPart {
  position: relative;
  top: 7.8125rem;
  left: 35.5rem;
  width: 7rem;
  height: 7rem;
}
.nextPart img {
  position: relative;
  top: 34vh;
  left: 22vh;
  opacity: 0.75;
  width: 5rem;
  height: 5rem;
}
.before {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgb(188, 217, 223), rgb(154, 219, 223));
}
.before-txt {
  padding-top: 18vh;
}
.before h1 {
  /* position: relative; */
  top: -1.375rem;
  left: 37.5625rem;
  width: 6.75rem;
  padding-top: 10rem;
  padding: 0;
  height: 3.125rem;
  font-size: 2.25rem;
  color: rgb(45, 216, 247);
  background-color: black;
  text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px,
    rgba(255, 255, 255, 0.2) 1px 3px 3px;
  -webkit-background-clip: text;
  margin-top: 0 !important;
  padding-left: 44vw;
}
.before p {
  margin: 0.75rem 3.125rem;
  font-size: 0.9375rem;
}
.before p:nth-of-type(1) {
  position: relative;
  width: 32.75rem;
  left: 42%;
  top: -2%;
}
.before p:nth-of-type(2) {
  position: relative;
  width: 32.75rem;
  left: 42%;
  top: -2%;
}
.before p:nth-of-type(n + 3) {
  /* display: inline-block; */
  margin-left: 50%;
  margin-top: 1.4375rem;
  margin-bottom: -0.5rem;
  background-color: rgba(248, 238, 238, 0.2);
}
.before img {
  position: absolute;
  top: 102vh;
  left: 10vh;
  width: 32rem;
  height: 32rem;
  opacity: 0.26;
}

.firstPart {
  position: relative;
  top: 1rem;
  left: 38rem;
  width: 7rem;
  height: 7rem;
}
.firstPart img {
  position: relative;
  top: -1rem;
  left: 0rem;
  opacity: 0.6;
  width: 5rem;
  height: 5rem;
}

.lastPart {
  position: relative;
  width: 7rem;
  height: 7rem;
  top: -0.75rem;
  left: 35.5rem;
}
.lastPart img {
  position: relative;
  top: 15vh;
  left: 2.5rem;
  opacity: 0.75;
  width: 5rem;
  height: 5rem;
}
.after {
  width: 100%;
  /* height: 35rem; */
  height: 100vh;
  margin: 0;
  /* margin-top: -1.375rem; */
  font-size: 1rem;
  /* background: url(../../assets/img/common/people.png) no-repeat; */
  background: linear-gradient(rgb(154, 219, 223), rgb(136, 222, 226));
}
.after-txt {
  padding-top: 16vh;
}
.after h1 {
  position: relative;
  top: -0.1875rem;
  left: 1.875rem;
  width: 6.25rem;
  color: rgb(45, 216, 247);
  background-color: black;
  text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px,
    rgba(255, 255, 255, 0.2) 1px 3px 3px;
  -webkit-background-clip: text;
  margin-top: 0 !important;
}
.after img {
  position: absolute;
  top: 68%;
  left: 56%;
  width: 33rem;
  height: 34rem;
  opacity: 0.26;
  border-radius: 10;
}
.secondPart {
  position: relative;
  top: 0;
  left: 38rem;
  width: 7rem;
  height: 7rem;
}
.secondPart img {
  position: relative;
  top: 2rem;
  left: 0.15rem;
  opacity: 0.6;
  width: 5rem;
  height: 5rem;
}
.after p:nth-of-type(-5 + n) {
  margin-left: 7%;
  margin-top: 0rem;
}
.after p:nth-of-type(n + 6) {
  width: 43.75rem;
  background-color: rgb(255, 255, 255, 0.25);
  margin: 0.8125rem 0.1875rem;
  margin-left: 7%;
  margin-top: 0rem;
}
.bounce-in-top {
  -webkit-animation: bounce-in-top 1.5s;
  animation: bounce-in-top 1.5s;
}

@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.fade-in-left {
  -webkit-animation: fade-in-left 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  animation: fade-in-left 1s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.question img#downward {
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: calc(100vh - 10rem);
  left: calc((100vw - 5rem) / 2);
}
.before img#upward {
  width: 5rem;
  height: 5rem;
  margin-top: 84vh;
  top: 0;
  left: calc((100vw - 5rem) / 2);
}
.before img#downward_2 {
  width: 5rem;
  height: 5rem;
  margin-top: 70vh;
  left: calc((100vw - 5rem) / 2);
}
.after img#upward_2 {
  width: 5rem;
  height: 5rem;
  margin-top: -10vh;
  left: calc((100vw - 5rem) / 2);
}

/* class */
.pulsate-fwd {
  -webkit-animation: pulsate-fwd 0.5s ease-in-out infinite both;
  animation: pulsate-fwd 0.5s ease-in-out infinite both;
}
/* animation */
@-webkit-keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.pulsate-bck {
  -webkit-animation: pulsate-bck 1.25s ease-in-out infinite;
  animation: pulsate-bck 1.25s ease-in-out infinite;
}

@-webkit-keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
