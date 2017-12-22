<template>
  <v-container pa-1 id="container1" class="scroll-y">
    <v-layout v-scroll="{target: '#container1'}">
      <v-flex id="flex1">
        <div v-for="msg in msgs" :key="msg['.key']">
          <message :msg="msg" :uid="uid" />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { DB } from '@/plugins/firebase.js'
import $ from 'jquery'
import Message from '~/components/Message.vue'

export default {
  props: ['room', 'uid'],
  data() {
    return {
      rooms: {},
      msgs: {},
      timestamp: 0
    }
  },
  firebase: function() {
    return {
      rooms: DB.ref('/rooms'),
      msgs: DB.ref('/rooms/' + this.room + '/msgs'),
      timeStamp: DB.ref('/rooms/'+ this.room + '/timeStamp')
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
=scrollbar($width)
  ::-webkit-scrollbar
    width: $width

#container1
  position: absolute
  top: 56px
  bottom: 48px
  +scrollbar(200px)

</style>
