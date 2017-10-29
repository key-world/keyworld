<template>
    <v-app id="inspire">

      <toolbar/>

      <main>
        <v-content>
          <v-container fluid fill-height>
            <nuxt/>
          </v-container>
        </v-content>
      </main>

      <input-text/>

    </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import InputText from '~/components/InputText.vue'

export default {
  components: {
    Toolbar,
    InputText
  }
}
</script>