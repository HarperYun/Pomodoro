<template lang="pug">
v-row#settings
  v-col(cols="8")
    h1.text-center Settings
  v-col(cols="8" )
    v-table
      thead
        tr
          th Name
          th Try
          th Choise
      tbody
        tr(v-for="alarm in alarms")
          td {{ alarm.name }}
          td
            audio(controls :src="alarm.file")
          td
            v-radio(v-model="selectedAlarm" :value="alarm.id")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { selectedAlarm, alarms } = storeToRefs(settings)
</script>

<style>
#settings {
  width: 100vh;
  margin-top: 10%;
  position: absolute;
  left: 50%;
  transform: translateX(-30%);
}

table {
  color: #954;
  background-color: #004D40;
}
</style>
