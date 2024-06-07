<template>
  <headerComponent></headerComponent>
  <RouterView></RouterView>
</template>

<script>
import headerComponent from './components/headerComponent.vue'

export default {
  components: {
    headerComponent
  }
}
</script>