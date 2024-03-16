<script setup>
import { ref, watch, watchEffect } from 'vue'

const isPlaying = ref(false)
const player = ref('')
const musicControl = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) player.value.play()
  else player.value.pause()
}

const emits = defineEmits(['close'])
const settingPopup = ref(false)
</script>

<template>
  <div class="w-full h-screen">
    <div class="flex justify-center">
      <div class="bg-white shadow-xl px-5 py-4 w-64 h-64 rounded-xl">
        <div class="flex justify-end py-2">
          <img
            src="/game4/close.svg"
            alt="close"
            class="w-3 cursor-pointer"
            @click="$emit('close', false)"
          />
        </div>

        <div class="flex justify-center py-1">
          <span class="font-alkatra text-title font-semibold text-5xl"
            >Setting</span
          >
        </div>

        <div class="flex justify-between items-center py-4">
          <span class="font-alkatra text-3xl text-gray-text">Music</span>
          <input
            type="checkbox"
            class="toggle toggle-error"
            @click="musicControl"
            v-model="isPlaying"
          />

          <audio controls class="hidden" ref="player">
            <source src="./assets/voice/background-music.mp3" />
          </audio>
        </div>

        <div>
          <hr />
        </div>

        <div class="flex justify-center py-4">
          <div class="flex justify-between items-center gap-x-2 w-48">
            <button><img src="/game4/replay.svg" alt="replay" /></button>
            <button><img src="/game4/resume.svg" alt="resume" /></button>
            <button><img src="/game4/home.svg" alt="home" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
