<template>
  <header>
    ESS2022 Digitale Edition {{ isLightOn }}
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    isLightOn () {
      return this.$store.getters.isLightOn
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/_variables.scss';

header {
  background-color: lighten($appBaseColor, 20%);
  height: $appHeaderHeight;
}
</style>
