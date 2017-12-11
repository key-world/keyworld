<template>
  <v-layout>
    <v-flex class="profile text-xs-center" :class="{'order-xs2': isMyMessage}">
      <v-flex xs12>
        <img class="avatar" :src="'/user-icon/' + msg.uid % 9 +'.png'">
      </v-flex>
      <v-flex xs12>
        <h5>{{ iconNames[msg.uid % 9] }}</h5>
      </v-flex>
    </v-flex>
    <v-flex xs11 ma-1 ml-2 id="message-block" :class="{myMessageText: isMyMessage}">
      <v-flex xs12 class="content" :class="{myMessageText: isMyMessage}" pa-2>
        <span v-for="n in splitMessage" :key="n.id">
          <span v-if="n[0] === '#'">
            <hashtag-badge :tagName="n"/>
          </span>
          <span v-else>
            {{ n }}
          </span>
        </span>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import HashtagBadge from '~/components/HashtagBadge.vue'
import _ from 'lodash'

export default {
  props: ['msg', 'uid'],
  data() {
    return {
      isMyMessage: this.uid === this.msg.uid,
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
  },
  computed: {
    splitMessage: function() {
      return _.split(this.msg.text, ' ')
    }
  },
  components: {
    HashtagBadge
  }
}
</script>

<style lang="sass" scoped>
.profile
  display: inline-block
  width: 40px

.layout
  // border-bottom: 1px solid black

.avatar
  width: 32px
  height: 32px

#avatar
  background-color: black

.myMessageText
    text-align: right

#message-block

  .content
    display: inline-block
    max-width: 70vw
    flex-wrap: nowrap 
    border-radius: 8px;
    background-color: rgba(255,255,255,1)

  .myMessageText
    text-align: left

  span
    color: black
    font-size: 1.1em



</style>
