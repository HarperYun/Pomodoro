<template lang="pug">
v-row.text-center#home
  v-col(cols="12")
    h1 {{ currentText }}
    h1 {{ timeText }}
  v-col(cols="12")
    v-btn.mx-3(icon color="yellow" v-if="status !== 1" @click="startTimer")
      v-icon mdi-play
    v-btn.mx-3(icon color="#C2185B" v-else @click="pauseTimer")
      v-icon mdi-pause
    v-btn.mx-3(icon color="#4E342E" v-if="current.length > 0" @click="finishTimer(true)")
      v-icon mdi-skip-next
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'

const list = useListStore()
const { current, items, timeleft } = storeToRefs(list)
const { countdown, start, finish } = list

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

const currentText = computed(() => {
  return current.value.length > 0 ? current.value : items.value.length > 0 ? 'Click to Start' : 'No Information'
})
const timeText = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

let timer
// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const status = ref(0)

const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}

const finishTimer = (skip) => {
  clearInterval(timer)
  status.value = 0
  finish()
  if (!skip) {
    const audio = new Audio()
    audio.src = selectedAlarmFile.value
    audio.play()
  }
  if (items.value.length > 0) {
    startTimer()
  }
}

const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (current.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer(false)
      }
    }, 1000)
  }
}

</script>

<style>
#home {
  width: 100vh;
  margin-top: 10%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
