<template>
  <v-container pa-3 id="container2">
    <v-layout>
      <v-flex xs12>
        {{ msg.text }}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style scoped>
#container2 {
  border-bottom: 1px solid black;
}
</style>
