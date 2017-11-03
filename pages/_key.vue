<template>
  <v-container pa-0 fluid>
    <v-layout class="center" justify-center>
      <v-flex class="chat-display" xs8 elevation-12>
        <toolbar/>
        <message-list :room="$route.params.key" />
        <input-text :room="$route.params.key" :ip="ip" />
      </v-flex>
    </v-layout>
    <!-- <v-container class="center-container" xs12 sm4 pa-0 align-content-center>
              <v-flex xs12>
                <toolbar></toolbar>
                <message-list :room="$route.params.key"></message-list>
                <input-text :room="$route.params.key"></input-text>
              </v-flex>
            </v-container> -->
  </v-container>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import MessageList from '~/components/MessageList.vue'
import InputText from '~/components/InputText.vue'
import axios from 'axios'
import { DB } from '@/plugins/firebase.js'
// import requestIp from '@/plugins/request-ip.js'

export default {
  data() {
    return {
      msgsRef: {},
      ip: ''
    }
  },
  props: {
    // ip: {
    //   type: String,
    //   default() {
    //     return ''
    //   }
    // },
    room: {
      type: String,
      default() {
        return ''
      }
    }
  },
  async asyncData({ route }) {
    // const roomsRef = DB.ref('/rooms/' + route.params.key)
    // roomsRef.set({
    //   timestamp: Date.now()
    // })
    // console.log(req)
    const msgsRef = DB.ref('/rooms/' + route.params.key + '/msgs')
    const http = await axios.get('https://api.ipify.org/?format=json')
    // console.log(http.data.ip)
    const ip = await http.data.ip
    // $.getJSON('https://api.ipify.org/?format=json', function(res) {
    //   this.ip = res.ip
    //   console.log(this.ip)
    // })
    return {
      msgsRef: msgsRef,
      ip: ip
    }
  },
  components: {
    MessageList,
    Toolbar,
    InputText
  }
}
</script>

<style lang="sass" scoped>
.center
  min-height: 100vh
  
  .chat-display
    max-width: 400px




</style>

