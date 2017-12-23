<template>
  <v-container id="main" fluid pa-0 text-xs-center>
    <v-layout wrap row>
      <v-flex xs12 class="top-text">
        <img class="logo" src="/logo.png">
        <h2>K E Y W O R L D</h2>
        <h4>ANYTIME, ANYWHERE<br>MEET PEOPLE WITH SAME INTEREST</h4>
      </v-flex>
      <v-flex xs12>
        <v-layout class="input">
          <v-flex id="hash">
            <h1>#</h1>
          </v-flex>
          <v-flex>
            <input v-model="keyword" class="textfield" light placeholder="ENTER KEYWORLD" rows="1" name="input-1" single-line full-width hide-details></v-text-field>
          </v-flex>
          <v-flex>
            <a :href="'/'+keyword">
              <button type="submit" class="join">
                JOIN
              </button>
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="bottom-text">
        <h4>POPULAR KEYWORLD</h4>
      </v-flex>
      <v-layout wrap row pl-4 pr-4 pt-2>
        <v-flex v-for="room in roomInfo" :key="room.index" xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">{{ room.num }}</span>
            <v-btn :href="'/'+room.name" flat outline round medium block>
              <!--v-for="room in popularRoom"-->
              {{ room.name }}
            </v-btn>
          </v-badge>
        </v-flex>
      </v-layout>
      <v-flex class="legal" text-xs-center>
        Created by @Keyworld @2017 | Legal
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//  import { DB } from '@/plugins/firebase.js'
//
//  var rooms = DB.room;
//  var msgArray = [];
//  var sortedArray;
//  var popularRoom;
//
//  for(i=0; i<rooms.length; i++){
//    msgArray.append(rooms[i].msg(0));
//  }
//
//  sortedArray = msgArray.sort();
//  popularRoom = sortedArray[0,10];

export default {
  data() {
    return {
      keyword: '',
      roomInfo: [
        {
          name: '가천대',
          num: 10
        },
        {
          name: '여행',
          num: 10
        },
        {
          name: '오버워치',
          num: 10
        },
        {
          name: '해커톤',
          num: 10
        },
        {
          name: '카메라',
          num: 10
        },
        {
          name: '맛집',
          num: 10
        },
        {
          name: '음식',
          num: 10
        },
        {
          name: '게임',
          num: 10
        },
        {
          name: 'LOL',
          num: 10
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  font-family: 'Roboto', sans-serif

.top-text
  padding: 12%

.bottom-text
  padding-top: 8%
  padding-bottom: 2%

.np
  padding-top: 5px

.logo
  width: 48px
  height: 48px

h2
  font-size: 2.5em
  margin: auto

h4
  margin: auto
  font-size: 1.1em
  line-height: 1.1

#main
  background: rgb(48,35,174); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgb(48,35,174) 0%, rgb(200,109,215) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgb(48,35,174) 0%,rgb(200,109,215) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgb(48,35,174) 0%,rgb(200,109,215) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3023ae', endColorstr='#c86dd7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

.textfield
  font-size: 2em

.input
  background: #FFFFFF
  border-radius: 3px
  width: 300px
  margin: auto

  h1
    font-size: 2.5em
    margin-left: 4px

  input
    display: block
    width: 150px
    margin-left: 10px
    margin-top: 14px
    font-size: 1.2em
    color: black

  .join
    min-height: 100%
    margin: 0px
    min-width: 100%
    border: 1.5px solid white
    font-size: 1.5em
    background-color: #5BC487
    color: white


  .card
    background: #50E3C2
    border-radius: 4px
    border: 2px solid #FFFFFF

  #hash
    width: 0px
    color: black

.legal
  position: fixed
  bottom: 0
  width: 100%
  padding: 8px

  h1
    color: black

</style>

/* Rectangle 3: */
background: #FFFFFF;
border-radius: 5px;
/* Rectangle 3: */
background: #50E3C2;
border: 3px solid #FFFFFF;
border-radius: 5px;
/* #: */
font-family: DINCondensed-Bold;
font-size: 48px;
color: #000000;
/* JOIN: */
font-family: DINCondensed-Bold;
font-size: 36px;
color: #FFFFFF;
/* ENTER / CREATE KEYWO: */
font-family: DINCondensed-Bold;
font-size: 36px;
color: #D8D8D8;
