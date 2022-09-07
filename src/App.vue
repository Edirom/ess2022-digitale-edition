<template>
  <div>
    <AppHeader/>
    <div class="mainArea">
      Hello Polly
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '@/css/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
}

.mainArea {
  background-color: #ffff66;
  height: calc(100vh - $appHeaderHeight - $appFooterHeight);
}
</style>
