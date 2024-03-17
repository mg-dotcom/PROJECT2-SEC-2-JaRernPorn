<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'

const emits = defineEmits(['close', 'restartGame', 'resumeGame', 'goBackHome'])
const isPlaying = ref(true)
const player = ref('')

const musicControl = () => {
  if (isPlaying.value) {
    player.value.play()
  } else {
    player.value.pause()
  }
}

watch(isPlaying, () => {
  musicControl()
})

onMounted(() => {
  isPlaying.value = true
  musicControl()
})
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
            v-model="isPlaying"
            @click="isPlaying = !isPlaying"
            @change="musicControl"
          />

          <audio controls loop class="hidden" ref="player">
            <source src="/background-music.mp3" type="audio/mp3" />
          </audio>
        </div>

        <div>
          <hr />
        </div>

        <div class="flex justify-center py-4">
          <div class="flex justify-between items-center gap-x-2 w-48">
            <button>
              <img
                src="/game4/replay.svg"
                alt="restart"
                class="restart cursor-pointer"
                @click="$emit('restartGame')"
              />
            </button>
            <button>
              <img
                src="/game4/resume.svg"
                alt="resume"
                class="resume cursor-pointer"
                @click="$emit('resumeGame')"
              />
            </button>
            <button>
              <img
                src="/game4/home.svg"
                alt="home"
                @click="$emit('goBackHome')"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
