<template>
  <div id="nav-bar-item" @click="btnClick">
    <div class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    path: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
  },
  methods: {
    btnClick() {
      this.$router.replace(this.path).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
  #nav-bar-item {
    width: 260px;
    height: 100%;
    line-height: 100%;
    position: relative;
  }
  .item-icon {
    position: absolute;
    left: 1em;
    top: 1em;
  }
  .item-text {
    width: 100%;
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .item-text:hover{
    text-shadow: 2px 2px 2px rgb(21, 219, 153);
  }

</style>