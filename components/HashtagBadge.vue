<template>
  <v-badge overlap right color="red">
    <span slot="badge">{{ cnt }}</span>
    <v-btn small color="blue" text-color="white">
      {{ tagName.slice(1) }}
    </v-btn>
  </v-badge>
</template>

<script>

export default {
  props: ['tagName', 'cnt']
}
</script>

<style lang="sass" scoped>
</style>
