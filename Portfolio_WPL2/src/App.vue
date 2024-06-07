<template>
  <headerComponent></headerComponent>
  <RouterView></RouterView>
  <footerComponent></footerComponent>
</template>

<script>
import headerComponent from './components/headerComponent.vue'
import footerComponent from './components/footerComponent.vue'

export default {
  components: {
    headerComponent,
    footerComponent
  }
};
</script>