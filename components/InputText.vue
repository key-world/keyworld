<template>
  <v-container class="input-box" fixed elevation-4 pa-0>
    <v-form @submit.prevent="addMessage(room)">
      <v-layout pa-0 class="text-xs-right">
        <v-flex xs10>
          <v-text-field placeholder="메시지를 입력하세요" rows="1" v-model="newMessage.text" name="input-1" single-line full-width hide-details></v-text-field>
        </v-flex>
        <v-flex pa-1>
          <v-btn type="submit" icon>
            <v-icon medium>send</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
  <!-- <v-container id="container1">
          <v-footer class="elevation-24" fixed>
            <v-layout id="layout" grey lighten-3 row wrap ma-0 justify-center>
              <v-flex xs12>
                <v-divider></v-divider>
              </v-flex>
              <v-flex xs12 pa-2>
                <v-form @submit.prevent="addMessage(room)">
                  <v-layout id="layout2">
                    <v-layout row wrap ma-0 justify-center white>
                      <v-flex id="flex1" xs8>
                        <v-text-field placeholder="메시지를 입력하세요" v-model="newMessage.text" name="input-1" rows="1" app single-line full-width hide-details></v-text-field>
                      </v-flex>
                      <v-flex xs4 ma-0>
                        <v-layout id="layout3" yellow accent-3 pa-0 ma-0 fluid fill-height align-center justify-center>
                          <v-btn type="submit" id="btn" flat block class="ma-0">
                            전송
                          </v-btn>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-footer>
        </v-container> -->
</template>

<script>
import { DB } from '@/plugins/firebase.js'

// import $ from 'jquery'

export default {
  data() {
    return {
      newMessage: {
        text: '',
        timestamp: 0,
        ip: ''
      }
    }
  },
  props: ['room', 'ip'],
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
      if (this.isValid) {
        const msgRef = DB.ref('/rooms/' + room + '/msgs')
        this.newMessage.timestamp = Date.now()
        this.newMessage.ip = this.ip
        msgRef.push(this.newMessage)
        this.newMessage.text = ''
        this.newMessage.timestamp = 0
        this.newMessage.ip = ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.input-box
  position: absolute
  bottom: 0
  height: 56px
  max-width: 400px

  .input-group
    height: 56px

</style>
