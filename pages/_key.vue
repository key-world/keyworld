<template>
  <v-container pa-0 fluid>
    <toolbar></toolbar>
    <message-list :room="$route.params.key"></message-list>
    <input-text :room="$route.params.key" />
  </v-container>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import MessageList from '~/components/MessageList.vue'
import InputText from '~/components/InputText.vue'
import { DB } from '@/plugins/firebase.js'
// import requestIp from '@/plugins/request-ip.js'

export default {
  data() {
    return {
      msgsRef: {}
    }
  },
  props: {
    room: {
      type: String,
      default() {
        return ''
      }
    }
  },
  asyncData({ route }) {
    // const roomsRef = DB.ref('/rooms/' + route.params.key)
    // roomsRef.set({
    //   timestamp: Date.now()
    // })
    // console.log(req)
    const msgsRef = DB.ref('/rooms/' + route.params.key + '/msgs')
    // $.getJSON('https://api.ipify.org/?format=json', function(res) {
    //   this.ip = res.ip
    //   console.log(this.ip)
    // })
    return {
      msgsRef: msgsRef
    }
  },
  components: {
    MessageList,
    Toolbar,
    InputText
  }
}
</script>
