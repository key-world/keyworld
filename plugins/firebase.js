import firebase from 'firebase'
import Vue from 'vue'
import VueFire from 'vuefire'

Vue.use(VueFire)

var config = {
  apiKey: 'AIzaSyArBkvxAMKILwkUvW6sKoD-J03RFfCA410',
  authDomain: 'keyworld-203dd.firebaseapp.com',
  databaseURL: 'https://keyworld-203dd.firebaseio.com'
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const DB = firebase.database()
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
