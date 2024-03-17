<script setup>
import SoundControl from '../SoundControl.vue'
</script>

<template>
  <div class="flex flex-row gap-16 justify-center mt-10">
    <div
      class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer hover:border-8 border-slate-200"
    >
      <!-- Sound-Part -->
      <!-- <SoundControl :soundPath="item.pronunciation">
        <img
          :src="item.src"
          :alt="item.meaning"
          class="w-[220px] h-[225px] ml-10 mt-3"
        />
      </SoundControl> -->

      <div
        class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
      ></div>
      <slot name="showingWord"></slot>

      <SoundButton />
    </div>
  </div>
</template>

<style scoped></style>
