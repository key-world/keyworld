<template>
  <v-badge overlap right color="red">
    <span slot="badge">{{ cnt }}</span>
    <a :href="'/'+tagName.slice(1)">
      <v-chip small color="blue" text-color="white">
        {{ tagName.slice(1) }}
      </v-chip>
    </a>
  </v-badge>
</template>

<script>

  export default {
    props: ['tagName', 'cnt']
  }
</script>

<style lang="sass" scoped>
  a {
    text-decoration: none;
  }
</style>
