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
            <input class="textfield" light placeholder="ENTER / CREATE KEYWORLD" rows="1" name="input-1" single-line full-width hide-details></v-text-field>
          </v-flex>
          <v-flex>
            <button class="join">
              JOIN
            </button>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="bottom-text">
        <h4>POPULAR KEYWORLD</h4>
      </v-flex>
      <v-layout wrap row pl-4 pr-4 pt-2>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              가천대
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              라오스
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              오버워치
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              해커톤
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              카메라
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              여행
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              음식
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              맛집
            </v-btn>
          </v-badge>
        </v-flex>
        <v-flex xs4 pr-2 pl-2>
          <v-badge overlap right color="red">
            <span slot="badge" class="np">12</span>
            <v-btn flat outline round medium block>
              여행
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

<style lang="sass" scoped>
.container
  font-family: DINCondensed-Bold;

.top-text
  padding: 8%

.bottom-text
  padding-top: 8%
  padding-bottom: 2%

.np
  padding-top: 5px

.logo
  width: 48px
  height: 48px

h2
  font-size: 3.0em
  margin: auto

h4
  margin: auto
  font-size: 1.5em
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
    padding-top: 12px
    padding-left: 2px

  .input-group
    padding: 0px
    padding-top: 20px
  
  input
    display: block
    width: 100%
    margin-top: 20px
    font-size: 1.5em
    color: black

  .join
    min-height: 100%
    margin: 0px
    min-width: 100%
    border: 1.5px solid white
    font-size: 1.5em
    padding-top: 8px
    background-color: #5BC487
    

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