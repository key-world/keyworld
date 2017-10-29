<template>
  <v-container fluid pa-0 id="container1" class="scroll-y">
    <v-layout row align-center justify-center v-scroll="{
            target: '#container1'
          }">
      <v-flex xs12>
        <ul is="transition-group">
          <li v-for="msg in msgs" class="msgs" :key="msg['.key']">
            <span> {{ msg.text }} - {{ msg.timestamp }}</span>
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { DB } from '@/plugins/firebase.js'

export default {
  props: ['room'],
  firebase: function() {
    return {
      rooms: DB.ref('/rooms'),
      msgs: DB.ref('/rooms/' + this.room + '/msgs')
    }
  }
}
</script>

<style scoped>
#container1 {
  position: absolute;
  top: 64px;
  bottom: 82px;
}
</style>
