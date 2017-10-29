<template>
  <v-app id="inspire">
    <nuxt/>
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import InputText from '~/components/InputText.vue'

export default {
  components: {
    Toolbar,
    InputText
  }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
