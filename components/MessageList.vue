<template>
  <v-container pa-0 id="container1" class="scroll-y">
    <v-layout v-scroll="{target: '#container1'}">
      <v-flex id="flex1">
        <div v-for="msg in msgs" class="msg" :key="msg['.key']">
          <message :msg="msg" />
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
    $('#container1').scrollTop($('#flex1').height())
  },
  components: {
    Message
  }
}
</script>

<style lang="sass" scoped>
#container1 
  position: absolute
  top: 56px
  bottom: 56px
  max-width: 400px

</style>
