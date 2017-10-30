<template>
  <v-container pa-0>
    <toolbar/>
    <message-list :room="$route.params.key"/>
    <input-text :room="$route.params.key" :ip="ip"/>
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
      msgsRef: {},
      ip: ''
    }
  },
  asyncData({ req, res, route }) {
    // const roomsRef = DB.ref('/rooms/' + route.params.key)
    // roomsRef.set({
    //   timestamp: Date.now()
    // })
    // console.log(requestIp.getClientIp(req))
    const msgsRef = DB.ref('/rooms/' + route.params.key + '/msgs')
    return {
      msgsRef: msgsRef,
      ip: req.connection.remoteAddress
    }
  },
  components: {
    MessageList,
    Toolbar,
    InputText
  }
}
</script>
