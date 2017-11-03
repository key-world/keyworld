<template>
  <v-container class="topbar" fixed elevation-4 pa-0>
    <v-layout pa-1>
      <v-btn icon>
        <v-icon>menu</v-icon>
      </v-btn>
      <v-layout pa-2>
        <v-toolbar-title>
          {{ $route.params.key }}
        </v-toolbar-title>
      </v-layout>

      <!-- <v-flex pa-3>
              {{ $route.params.key }}
            </v-flex> -->
    </v-layout>
  </v-container>
</template>

<style lang="sass" scoped>
.topbar
  position: absolute
  top: 0
  height: 56px
  max-width: 400px

</style>
