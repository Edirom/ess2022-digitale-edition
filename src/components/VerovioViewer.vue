<template>
  <div class="verovioComponent">
    <SourceSelectionButtons/>
    <div id="verovioViewer">
      this will go away automatically as soon as MEI is rendered…
    </div>
  </div>
</template>

<script>
import createVerovioModule from 'verovio/wasm'
import { VerovioToolkit } from 'verovio/esm'
import SourceSelectionButtons from '@/components/SourceSelectionButtons.vue'

const verovioOptions = {
  scale: 50,
  breaks: 'encoded',
  openControlEvents: true,
  svgBoundingBoxes: true,
  svgViewBox: true,
  svgRemoveXlink: true,
  header: 'none',
  footer: 'none',
  // appXPathQuery: './rdg[contains(@source, "#jakob")]',
  choiceXPathQuery: './orig',
  svgAdditionalAttribute: [
    'note@pname',
    'note@oct'
  ],
  transpose: '-M2'
}

export default {
  name: 'VerovioViewer',
  components: {
    SourceSelectionButtons
  },
  methods: {
    renderMEI () {
      if (!this.$store.getters.meiLoaded || this.verovioToolkit === undefined) {
        // console.log('cannot render yet')
        return null
      }

      const activeSource = this.$store.getters.activeSource
      const mei = this.$store.getters.meiAsText

      if (activeSource !== null) {
        // console.log('setting source to ' + this.$store.getters.activeSource)
        verovioOptions.appXPathQuery = './rdg[contains(@source, "' + activeSource + '")]'
      }

      this.verovioToolkit.setOptions(verovioOptions)
      this.verovioToolkit.loadData(mei)

      // attention: down there be dragons!
      // verovioToolkit.select({ measureRange: '3-5' })
      // verovioToolkit.redoLayout()
      // document.querySelector('#verovioViewer').innerHTML = 'nope'
      const svg = this.verovioToolkit.renderToSVG(1, {})
      document.querySelector('#verovioViewer').innerHTML = svg
      // console.log(svg)
      // console.log('done')
    }
  },
  mounted: function () {
    const setup = VerovioModule => {
      this.verovioToolkit = new VerovioToolkit(VerovioModule)

      this.renderMEI()

      this.$store.watch((state, getters) => getters.activeSource,
        (newSource, oldSource) => {
          this.renderMEI()
        })
    }

    createVerovioModule().then(VerovioModule => setup(VerovioModule))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/css/_variables.scss';

.verovioComponent {
  width: 100%;
  height: 100%;
}

#verovioViewer {
  width: 100%;
  height: calc(100% - $sourceSelectionButtonsHeight);
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
