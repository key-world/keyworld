<template>
  <v-container id="main" fluid pa-0 text-xs-center>
    <v-layout wrap row>
      <v-flex xs12 class="top-text">
        <img class="logo" src="/logo.png">
        <h2>K E Y W O R L D</h2>
        <h4>Feel free to chat with people<br>who have same interest with you.</h4>
      </v-flex>
      <v-flex xs12>
        <v-layout class="input">
          <v-flex>
            <h1>#</h1>
          </v-flex>
          <v-flex>
            <v-text-field light id="text-field" placeholder="ENTER / CREATE KEYWORLD" rows="1" name="input-1" single-line full-width hide-details></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn>
              JOIN
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="legal" text-xs-center>
        Created by @Keyworld @2017 | Legal
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="sass" scoped>
.container
  font-family: DINCondensed-Bold;

.top-text
  padding: 10%

.logo
  width: 48px
  height: 48px

h2
  font-size: 3.0em
  margin: auto

h4
  margin: auto
  font-size: 1.5em
  line-height: 1.1;

#main
  background: rgb(48,35,174); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgb(48,35,174) 0%, rgb(200,109,215) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgb(48,35,174) 0%,rgb(200,109,215) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgb(48,35,174) 0%,rgb(200,109,215) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3023ae', endColorstr='#c86dd7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

.input
  background: #FFFFFF
  border-radius: 3px
  width: 280px
  margin: auto

  .card
    background: #50E3C2
    border-radius: 4px
    border: 2px solid #FFFFFF

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