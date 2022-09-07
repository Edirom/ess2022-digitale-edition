<template>
  <div>
    <AppHeader/>
    <div class="mainArea">
      <splitpanes class="default-theme" horizontal>
        <pane>
          <splitpanes>
            <pane>
              <FacsimileViewer/>
            </pane>
            <pane>
              <span>Transcription</span>
            </pane>
          </splitpanes>
        </pane>
        <pane>
          <span>Annotation</span>
        </pane>
      </splitpanes>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import FacsimileViewer from './components/FacsimileViewer.vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    FacsimileViewer,
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
