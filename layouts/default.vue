<template>
    <v-layout row wrap>
        <div>
            <v-navigation-drawer
            expand-on-hover
            :rail="rail"
            >
                <v-list @click:select="">
                    <v-list-item :prepend-icon="mdiMenu" title="Xiang Lishan"></v-list-item>
                    <v-divider></v-divider>
                    <v-list-item :prepend-icon="mdiChat" title="AI Chat" link nuxt to="/chat"></v-list-item>
                    <v-list-item :prepend-icon="mdiNoteEdit" title="Transcript" link nuxt to="/"></v-list-item>
                    <v-list-item :prepend-icon="mdiKeyVariant" title="API Key" link nuxt to="/apikey"></v-list-item>
                    <v-list-item :prepend-icon="mdiCog" title="Promptimg" link nuxt to="/prompting"></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
          <v-container>
            <slot />
          </v-container>
    </v-layout>
</template>
<script>
import { mdiMenu, mdiKeyVariant, mdiNoteEdit, mdiCog, mdiChat } from '@mdi/js'
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
        mdiMenu, 
        mdiKeyVariant, 
        mdiNoteEdit, 
        mdiCog, 
        mdiChat
      }
    },
  }
</script>