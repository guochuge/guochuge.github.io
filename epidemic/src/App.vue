<template>
  <div id="app">
    <nav-bar class="nav-bar"/>
    <keep-alive include="Page1">
      <router-view :key="key"/>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from 'components/navigation/NavBar'
import Footer from 'components/navigation/Footer'


export default {
  components: { 
    NavBar,
    Footer 
  },
  name: 'App',
  computed: {
    key() {
    // return this.$key();
    return this.$route.path
  }
  }
}
</script>

<style>
  div#app {
    background: -webkit-linear-gradient(top, #92D4E2, #cce9f0);
  }
</style>
