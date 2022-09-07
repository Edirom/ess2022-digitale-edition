<template>
  <div id="facsimileViewer">

  </div>
</template>

<script>
import OpenSeadragon from 'openseadragon'

export default {
  name: 'FacsimileViewer',
  mounted: function () {
    OpenSeadragon({
      id: 'facsimileViewer',
      preserveViewport: false,
      visibilityRatio: 0.8,
      sequenceMode: true,
      showNavigator: true,
      gestureSettingsMouse: {
        clickToZoom: false
      },
      silenceMultiImageWarnings: true,
      tileSources: [
        'https://images.domestic-beethoven.eu/iiif/2/ESS2022%2FBL_Zweig%20MS%2058_1r_Difficile.png',
        'https://images.domestic-beethoven.eu/iiif/2/ESS2022%2FBL_Zweig%20MS%2058_1v_O%20du%20eselhafter%20Peierl.png',
        'https://www.digizeitschriften.de/iiif/image/dzeit:472885294_0001:00000198/info.json',
        'https://www.digizeitschriften.de/iiif/image/dzeit:472885294_0001:00000199/info.json'
      ]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/_variables.scss';
#facsimileViewer {
  width: 100%;
  height: 100%;
}
</style>
