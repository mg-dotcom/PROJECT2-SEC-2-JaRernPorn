<script setup>
import { ref, watch, watchEffect } from 'vue'
// const isPlaying = ref(false)
// const player = ref('')
// const musicControl = () => {
//   isPlaying.value = !isPlaying.value
//   if (isPlaying.value) player.value.play()
//   else player.value.pause()
// }

const isPlaying = ref(false)
const player = ref(null)

const musicControl = () => {
  isPlaying.value = !isPlaying.value
}

watch(isPlaying, (newValue) => {
  if (player.value) {
    if (newValue) player.value.play()
    else player.value.pause()
  }
})
</script>

<template>

  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex justify-center">
      <div class="bg-white shadow-xl p-4 w-64 h-64 rounded-xl">
        <div class="flex justify-end py-2">
          <img src="/game4/close.svg" alt="close" class="w-3 cursor-pointer" />
        </div>

        <div class="flex justify-center py-2">
          <span class="font-alkatra text-title font-semibold text-5xl"
            >Setting</span
          >
        </div>

        <div class="flex justify-between items-center py-4">
          <span class="font-alkatra text-3xl text-gray-text">Music</span>
          <input
            type="checkbox"
            class="toggle toggle-md"
            @click="musicControl"
            v-model="isPlaying"
          />
          <audio controls class="hidden" ref="player">
            <source src="./assets/sample.mp3" />
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
