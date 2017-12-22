import Vue from 'vue'
import Vuetify from 'vuetify'
import fullpage from 'fullpage.js'
import $ from 'jquery'

Vue.use(Vuetify)
Vue.use(fullpage)
$(document).ready(function () {
  $('#fullpage').fullpage()
})
