<template>
  <div>
    <AppHeader/>
    <div class="mainArea">
      <splitpanes horizontal class="default-theme">
        <pane>
          <div>Box 1</div>
        </pane>
        <pane>
          <div>Box 2</div>
        </pane>
        <pane>
          <div>Box 3</div>
        </pane>
      </splitpanes>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Splitpanes,
    Pane
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
  background-color: lighten($appBaseColor, 20%);
  height: calc(100vh - $appHeaderHeight - $appFooterHeight);
}
</style>
