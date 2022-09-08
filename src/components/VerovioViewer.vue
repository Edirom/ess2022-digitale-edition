<template>
  <div id="verovioViewer">
    Hello Laurent
  </div>
</template>

<script>
import createVerovioModule from 'verovio/wasm'
import { VerovioToolkit } from 'verovio/esm'

const verovioOptions = {
  scale: 50,
  // breaks: 'none',
  openControlEvents: true,
  svgBoundingBoxes: true,
  svgRemoveXlink: true,
  header: 'none',
  footer: 'none'
}

export default {
  name: 'VerovioViewer',
  mounted: function () {
    createVerovioModule().then(VerovioModule => {
      const verovioToolkit = new VerovioToolkit(VerovioModule)
      verovioToolkit.setOptions(verovioOptions)

      if (this.$store.getters.meiLoaded) {
        verovioToolkit.loadData(this.$store.getters.meiAsText)
        const svg = verovioToolkit.renderToSVG(1, {})
        document.querySelector('#verovioViewer').innerHTML = svg
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/_variables.scss';
#verovioViewer {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
