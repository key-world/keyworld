<template>
  <v-container fluid pa-0 id="container3" class="scroll-y">
    <v-layout row align-center justify-center v-scroll="{
            target: '#container3'
          }">
      <v-flex id="flex1" xs12>
        <div v-for="msg in msgs" class="msg" :key="msg['.key']">
          <message :msg="msg"/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Message from '~/components/Message.vue'
import $ from 'jquery'
import { DB } from '@/plugins/firebase.js'

export default {
  props: ['room'],
  data() {
    return {
      rooms: {},
      msgs: {}
    }
  },
  firebase: function() {
    return {
      rooms: DB.ref('/rooms'),
      msgs: DB.ref('/rooms/' + this.room + '/msgs')
    }
  },
  updated: function() {
    $('#container3').scrollTop($('#flex1').height())
  },
  components: {
    Message
  }
}
</script>

<style scoped>
#container3 {
  position: absolute;
  top: 64px;
  bottom: 82px;
}
</style>
