<template>
  <footer>
    Github whatever
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/_variables.scss';

footer {
  background-color: $appBaseColor;
  height: $appFooterHeight;
  position: absolute;
  bottom: 0;
  width: 100vw;
}
</style>
