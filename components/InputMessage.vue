<template>
  <v-footer id="container" fixed class="pa-0">
    <v-container pa-0 ma-0>
      <v-form @submit.prevent="addMessage(room)">
        <v-layout class="text-xs-right">
          <v-flex id="input" pl-1 pb-1 pt-1 xs11 class="text-xs-center">
            <v-text-field light id="text-field" placeholder="메시지를 입력하세요" rows="1" v-model="newMessage.text" name="input-1" single-line full-width hide-details></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn type="submit" icon>
              <v-icon medium>send</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
  </v-footer>
</template>

<script>
import { DB } from '@/plugins/firebase.js'

export default {
  data() {
    return {
      newMessage: {
        text: '',
        timestamp: 0,
        uid: 0
      }
    }
  },
  props: ['room', 'uid'],
  computed: {
    validation: function() {
      return {
        name: !!this.newMessage.text.trim()
      }
    },
    isValid: function() {
      var validation = this.validation
      return Object.keys(validation).every(function(key) {
        return validation[key]
      })
    }
  },
  methods: {
    addMessage: function(room) {
      document.getElementById('text-field').focus()
      if (this.isValid) {
        const msgRef = DB.ref('/rooms/' + room + '/msgs')
        this.newMessage.timestamp = Date.now()
        this.newMessage.uid = this.uid
        msgRef.push(this.newMessage)
        this.newMessage.text = ''
        this.newMessage.timestamp = 0
        this.newMessage.uid = 0
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.input-group
  padding: 4px
  border: 1px solid grey
  background-color: white

#container
  position: fixed
  bottom: 0
  height: 48px
  background-color: rgba(0,0,0,0)

.layout
  height: 100%
  background-color: rgba(0,0,0,0)


</style>