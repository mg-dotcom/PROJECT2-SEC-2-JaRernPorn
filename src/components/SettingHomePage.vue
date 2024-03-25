<script setup>
import { ref, watch, defineEmits } from 'vue'

const emits = defineEmits(['closeSetting', 'close'])
const isPlaying = ref(false)

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

// onMounted(() => {
//   isPlaying.value = true;
//   musicControl();
// });
</script>

<template>
  <div
    class="bg-black bg-opacity-50 min-h-screen w-full"
    @click.self="emits('closeSetting')"
  >
    <div
      class="relative top-5 flex justify-center"
      @click.self="emits('closeSetting')"
    >
      <div class="setting bg-white w-1/5 border rounded-2xl">
        <div class="closebtn flex justify-end p-4">
          <img
            src="/close.svg"
            alt="close setting btn"
            class="cursor-pointer w-4"
            @click="$emit('closeSetting')"
          />
        </div>
        <div
          class="header text-center text-5xl font-alkatra text-title font-semibold"
        >
          <h1>Setting</h1>
        </div>
        <div class="musicToggle flex justify-between items-center m-5">
          <div class="font-alkatra text-3xl">Music</div>
          <div class="form-control">
            <input
              type="checkbox"
              class="toggle cursor-pointer"
              v-model="isPlaying"
              @click="isPlaying = !isPlaying"
              @change="musicControl"
            />
          </div>
        </div>
      </div>

      <audio controls loop class="hidden" ref="player">
        <source src="/background-music.mp3" type="audio/mp3" />
      </audio>
    </div>
  </div>
</template>

<style scoped></style>
