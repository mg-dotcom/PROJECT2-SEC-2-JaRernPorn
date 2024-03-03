<script setup>
import Game4 from './components/Game4.vue'
</script>

<template>
  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex flex-col gap-5 p-6 py-8">
      <div class="flex justify-between items-center">
        <h1
          class="font-outfit text-title text-3xl font-semibold sm:text-4xl lg:text-5xl"
        >
          Category: Fruits
        </h1>
        <img
          src="./assets/game4/setting vector.svg"
          alt="setting"
          class="w-8 cursor-pointer sm:w-10"
        />
      </div>
      <div class="flex justify-center">
        <progress
          class="progress progress-success"
          value="100"
          max="100"
        ></progress>
      </div>
    </div>

    <div class="flex justify-center py-5">
      <p
        class="font-outfit text-title text-2xl font-semibold sm:text-3xl lg:text-4xl"
      >
        Select the matching pairs
      </p>
    </div>

    <div
      class="grid gap-x-3 gap-y-6 grid-cols-2 grid-rows-3 p-7 md:gap-x-12 md:gap-y-10 lg:px-36 lg:py-12 lg:gap-x-20 lg:gap-y-10"
    >
      <button
        class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-24 md:text-2xl lg:rounded-2xl"
        v-for="n in 6"
      >
        {{ n }}
      </button>
    </div>

    <div class="flex justify-end px-6">
      <button
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor"
      >
        Check
      </button>
    </div>
  </div>
</template>

<style scoped></style>
