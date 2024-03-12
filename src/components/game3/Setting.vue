<script setup>
import { onMounted, ref, watch } from 'vue'

const isPlaying = ref(true)
const player = ref('')
const musicControl = () => {
  isPlaying.value = !isPlaying.value

  if (isPlaying.value) {
    player.value.play()
  } else {
    player.value.pause()
  }
}

watch(isPlaying, () => {
  musicControl()
})
</script>

<template>
  <div>
    <div class="setting bg-white w-1/5 border border-black rounded-2xl">
      <div class="closebtn ">
        <img src="/public/close.svg" alt="close setting btn" class="" />
      </div>
      <div
        class="header text-center text-4xl font-alkatra text-title font-semibold"
      >
        <h1>Setting</h1>
      </div>
      <div class="musicToggle flex justify-between m-5">
        <div class="font-alkatra text-2xl ">Music</div>
        <div class="form-control ">
            <input
              type="checkbox"
              class="toggle cursor-pointer"
              v-model="isPlaying"
              @change="musicControl"
            />
        </div>
      </div>
      <hr class="mx-5 border border-b-1 border-slate-200"/>
      <div class="btn flex m-5">
        <div class="restart">
          <img
            src="/public/settingBtn/restartButton.png"
            alt="restart button"
            class=""
          />
        </div>
        <div class="play">
          <img
            src="/public/settingBtn/resumeButton.png"
            alt="resume button"
            class="resume button"
          />
        </div>
        <div class="home">
          <img
            src="/public/settingBtn/homebutton.png"
            alt="home button"
          />
        </div>
      </div>
    </div>
    <audio controls loop class="hidden" ref="player">
      <source src="../../assets/background-music.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<style scoped></style>
