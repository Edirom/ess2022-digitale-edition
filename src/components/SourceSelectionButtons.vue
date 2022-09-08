<template>
  <div class="sourceButtons">
    <button v-for="(source, i) in sources" :key="i" @click="selectSource(source)">{{ source }}</button>
  </div>
</template>

<script>
export default {
  name: 'SourceSelectionButtons',
  computed: {
    sources () {
      return this.$store.getters.sources
    }
  },
  methods: {
    selectSource (source) {
      console.log('clicked button: ' + source)
      this.$store.dispatch('selectSource', source)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/_variables.scss';
.sourceButtons {
  height: $sourceSelectionButtonsHeight;
  background-color: lighten(limegreen, 40%);
}
</style>
