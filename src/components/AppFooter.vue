<template>
  <footer>
    Github whatever {{ isLightOn }}
    <span @click="toggleTheLight">Klaus</span>

    <span v-if="isLoading" class="isLoading">loading data</span>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    isLightOn () {
      return this.$store.getters.isLightOn
    },
    isLoading () {
      return this.$store.getters.isLoading
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

  .isLoading {
    font-weight: bold;
    color: red;
    margin-left: 50px;
  }
}
</style>
