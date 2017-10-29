<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">keyworld </h1>
      <h2 class="subtitle"> {{ $route.params.user }}

        <ul is="transition-group">
          <li v-for="room in rooms" class="room" :key="room['.key']">
            <span> {{ room['.key'] }} - {{ room.timestamp }}

            </span>
            <button @click="removeUser(room)">X</button>
          </li>
        </ul>
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { DB } from '@/plugins/firebase.js'

const roomsRef = DB.ref('/rooms')

export default {
  layout: 'default',
  data: () => {
    return {
      rooms: {}
    }
  },
  asyncData({ route, store, error }) {
    const ref = DB.ref('/rooms/' + route.params.val)
    ref.set({
      timestamp: Date.now()
    })
  },
  firebase: {
    rooms: roomsRef
  },
  components: {
    Logo
  }
}
</script>
