<template>
  <v-layout v-if="uid !== msg.uid">
    <v-flex class="profile text-xs-center">
      <v-flex xs12>
        <img class="avatar" :src="'/user-icon/' + msg.uid % 9 +'.png'">
      </v-flex>
      <v-flex xs12>
        <h5>{{ iconNames[msg.uid % 9] }}</h5>
      </v-flex>
    </v-flex>
    <v-flex xs11 ma-1 ml-2 id="message-block">
      <v-flex xs12 class="content" pa-2>
        <span>{{ msg.text }}</span>
      </v-flex>
    </v-flex>
  </v-layout>
  <v-layout v-else>
    <v-flex xs11 ma-1 ml-2 text-xs-right id="message-block">
      <v-flex xs12 class="content" pa-2>
        <span>{{ msg.text }}</span>
      </v-flex>
    </v-flex>
    <v-flex class="profile text-xs-center">
      <v-flex xs12>
        <img class="avatar" :src="'/user-icon/' + msg.uid % 9 +'.png'">
      </v-flex>
      <v-flex xs12>
        <h5>{{ iconNames[msg.uid % 9] }}</h5>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['msg', 'uid'],
  data() {
    return {
      iconNames: {
        0: '돼지',
        1: '댕댕이',
        2: '꿀벌',
        3: '냥냥',
        4: '음메',
        5: '뭉뭉이',
        6: '여우',
        7: '개굴',
        8: '우끼'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.profile
  width: 40px

.layout
  // border-bottom: 1px solid black

.avatar
  width: 32px
  height: 32px

#avatar
  background-color: black

#message-block

  
  .content
    display: inline-block
    max-width: 70vw
    flex-wrap: nowrap 
    border-radius: 8px;
    background-color: rgba(255,255,255,1)

  span
    color: black
    font-size: 1.2em



</style>
