<template>
  <v-container pa-0 fluid>
    <v-layout class="center1" justify-center>
      <v-flex>
        <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
          <v-list>
            <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar flat fixed app :clipped-left="clipped" height="56">
          <v-toolbar-side-icon @click="drawer = !drawer"/>
          <!-- <v-btn icon @click="drawer = !drawer">
            <v-icon>menu</v-icon>
          </v-btn> -->
          <v-btn icon disabled>
            <img class="logo" src="/logo.png">
          </v-btn>
          <v-badge color="red" right>
            <span slot="badge">10</span>
            <v-toolbar-title v-text="title"></v-toolbar-title>
          </v-badge>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <img class="avatar" :src="'/user-icon/' + uid % 9 + '.png'">
          </v-btn>
        </v-toolbar>
        <v-container id="main" fluid pa-0>
          <message-list :room="$route.params.key" :uid="uid" />
        </v-container>
        <input-message :room="$route.params.key" :uid="uid" />
        <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed>
          <v-list>
            <v-list-tile @click.native="right = !right">
              <v-list-tile-action>
                <v-icon light>compare_arrows</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MessageList from '~/components/MessageList.vue'
import InputMessage from '~/components/InputMessage.vue'
// import axios from 'axios'
import { DB } from '@/plugins/firebase.js'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Key World'
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
  async asyncData({ route }) {
    const msgsRef = DB.ref('/rooms/' + route.params.key + '/msgs')
    const s = await DB.ref('/current_key').once('value')
    const id = await s.val().key
    DB.ref('/current_key').set({ key: id + 1 })
    // const http = await axios.get('https://api.ipify.org/?format=json')
    // const ip = await http.data.ip
    return {
      msgsRef: msgsRef,
      uid: id
    }
  },
  components: {
    MessageList,
    InputMessage
  }
}
</script>

<style lang="sass">
.avatar
  width: 30px
  height: 30px

.center1
  min-height: 100vh

.logo
  width: 28px
  height: 28px

#main
  position: fixed
  top: 0
  bottom: 0
  minheight: 100vh
  background: rgb(91, 196, 135)
  background: -moz-linear-gradient(-45deg, rgb(91, 196, 135) 0%, rgb(64, 150, 155) 100%)
  background: -webkit-linear-gradient(-45deg, rgb(91, 196, 135) 0%, rgb(64, 150, 155) 100%)
  background: linear-gradient(135deg, rgb(91, 196, 135) 0%, rgb(64, 150, 155) 100%)

</style>