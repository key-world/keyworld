<template>
  <v-badge overlap right color="red">
    <span slot="badge">{{ cnt }}</span>
    <v-chip small color="blue" text-color="white">
      {{ tagName.slice(1) }}
    </v-chip>
  </v-badge>
</template>

<script>

export default {
  props: ['tagName', 'cnt']
}
</script>

<style lang="sass" scoped>
</style>
