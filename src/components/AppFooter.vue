<template>
  <footer>
    Github whatever {{ isLightOn }}
    <span @click="toggleTheLight">Klaus</span>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    isLightOn () {
      return this.$store.getters.isLightOn
    }
  },
  methods: {
    toggleTheLight () {
      console.log('clicked Klaus')
      this.$store.dispatch('toggleLights')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/_variables.scss';

footer {
  background-color: lighten($appBaseColor, 20%);
  height: $appFooterHeight;
  position: absolute;
  bottom: 0;
  width: 100vw;
}
</style>
