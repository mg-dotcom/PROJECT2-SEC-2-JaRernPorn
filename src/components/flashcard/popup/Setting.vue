<script setup>
import { onMounted, ref, watch, defineEmits } from "vue";

const emits = defineEmits(["closeSetting"]);
const isPlaying = ref(true);

const player = ref("");

const musicControl = () => {
  if (isPlaying.value) {
    player.value.play();
  } else {
    player.value.pause();
  }
};

watch(isPlaying, () => {
  musicControl();
});

onMounted(() => {
  isPlaying.value = true;
  musicControl();
});
</script>

<template>
  <div
    class="bg-black bg-opacity-50 min-h-screen w-screen"
    @click.self="emits('closeSetting')"
  >
    <div
      class="relative top-5 flex justify-center"
      @click.self="emits('closeSetting')"
    >
      <div class="setting bg-white w-1/5 border border-black rounded-2xl">
        <div class="closebtn flex justify-end py-2 px-2">
          <img
            src="/close.svg"
            alt="close setting btn"
            class="cursor-pointer"
            @click="$emit('closeSetting')"
          />
        </div>
        <div
          class="header text-center text-4xl font-alkatra text-title font-semibold"
        >
          <h1>Setting</h1>
        </div>
        <div class="musicToggle flex justify-between m-5">
          <div class="font-alkatra text-2xl">Music</div>
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
