<script setup>
import categories from '../data/categories.json'
</script>

<template>
  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex flex-col gap-5 px-16 py-12">
      <div class="flex justify-between items-center">
        <h1 class="font-outfit text-title text-3xl font-semibold sm:text-4xl">
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

    <div class="flex justify-center">
      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
          v-for="n in 3"
        >
          {{ n }}
        </button>
      </div>

      <div class="grid grid-cols grid-rows-3 gap-y-7 p-8">
        <button
          class="bg-white rounded-lg font-NotoSansSC border border-pink-border h-12 sm:h-16 hover:border-blue-border md:border-2 md:h-20 md:w-96 md:text-2xl lg:rounded-2xl"
          v-for="n in 3"
        >
          {{ n }}
        </button>
      </div>
    </div>

    <div class="flex justify-end px-6 lg:px-32">
      <button
        class="bg-title rounded-2xl text-white font-outfit font-semibold w-20 h-8 sm:text-2xl sm:w-28 sm:h-14 sm:rounded-3xl hover:bg-button-bgColor lg:w-36 lg:h-12"
      >
        Check
      </button>
    </div>
  </div>
</template>

<style scoped></style>
