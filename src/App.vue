<template lang="pug">
v-app#app
  v-app-bar(color="#00897B")
    <v-icon x-large color="#FFFDE7" > mdi-anchor </v-icon>
    v-app-bar-title Pomodoro
    v-spacer
    v-btn(icon to='/')
      v-icon mdi-timer
    v-btn(icon to='/list')
      v-icon mdi-format-list-bulleted
    v-btn(icon to='/settings')
      v-icon mdi-cog
    v-btn(icon v-if="notify" @click="toggleNotify")
      v-icon mdi-bell
    v-btn(icon v-else @click="toggleNotify")
      v-icon mdi-bell-off
  v-main
    v-container
      router-view(v-slot="{ Component }")
        keep-alive(include="HomeView")
          component(:is="Component")
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
const list = useListStore()
const { notify } = storeToRefs(list)
const { toggleNotify } = list
</script>

<style>
* {
  color: #FFFDE7;
}

#app {
  width: 100%;
  height: 100%;
  background: url('https://cdn.dribbble.com/users/1398114/screenshots/6610828/tomato_texture_web_4x.jpg') no-repeat center center fixed, rgba(193, 226, 210, 1) !important;
  background-size: cover;
}

table {
  font-family: "Noto Sans TC", "Raleway", sans-serif;
}
</style>
