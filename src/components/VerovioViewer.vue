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
  breaks: 'encoded',
  openControlEvents: true,
  svgBoundingBoxes: true,
  svgViewBox: true,
  svgRemoveXlink: true,
  header: 'none',
  footer: 'none',
  appXPathQuery: './rdg[contains(@source, "#jakob")]',
  choiceXPathQuery: './orig',
  svgAdditionalAttribute: [
    'note@pname',
    'note@oct'
  ]
}

export default {
  name: 'VerovioViewer',
  mounted: function () {
    createVerovioModule().then(VerovioModule => {
      const verovioToolkit = new VerovioToolkit(VerovioModule)
      verovioToolkit.setOptions(verovioOptions)

      if (this.$store.getters.meiLoaded) {
        verovioToolkit.loadData(this.$store.getters.meiAsText)

        // attention: down there be dragons!
        verovioToolkit.select({ measureRange: '3-5' })
        verovioToolkit.redoLayout()

        const svg = verovioToolkit.renderToSVG(1, {})
        document.querySelector('#verovioViewer').innerHTML = svg
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/css/_variables.scss';
#verovioViewer {
  width: 100%;
  height: 100%;
  overflow: auto;

  svg {
    g.app {
      fill: lighten(red, 20%);
      stroke: lighten(red, 20%);
    }

    g.note[data-pname="c"][data-oct="4"] {
      fill: blue;
      stroke: blue;
    }
  }
}
</style>
