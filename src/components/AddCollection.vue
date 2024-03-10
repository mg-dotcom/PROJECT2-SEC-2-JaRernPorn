<script setup>
import { ref, reactive, computed } from 'vue'
</script>

<template>
  <div class="w-full h-screen bg-main-bgColor">
    <!-- Add Collection -->
    <div class="flex justify-between p-6 items-center">
      <img
        src="/flashcard/setting vector.svg"
        alt="setting"
        class="w-8 cursor-pointer lg:w-10"
      />
      <img
        src="/flashcard/close.svg"
        alt="close"
        class="w-3 cursor-pointer lg:w-4"
      />
    </div>

    <div class="flex justify-center">
      <h1 class="text-5xl text-title font-outfit font-semibold">
        Collection Name
      </h1>
    </div>

    <div class="flex flex-col gap-y-8">
      <div class="flex flex-col">
        <label for="chineseword" class="font-outfit text-xl"
          >Chinese word</label
        >
        <input type="text" class="rounded-xl shadow-md w-1/4 h-11" />
      </div>

      <div class="flex flex-col">
        <label for="chineseword" class="font-outfit text-xl">Pinyin</label>
        <input type="text" class="rounded-xl shadow-md w-1/4 h-11" />
      </div>

      <div class="flex flex-col">
        <label for="chineseword" class="font-outfit text-xl">Meaning</label>
        <input type="text" class="rounded-xl shadow-md w-1/4 h-11" />
      </div>
    </div>
    <div class="flex py-8">
      <button
        class="bg-title text-white font-outfit font-medium text-xl px-4 py-2 tracking-wide rounded-xl"
      >
        ADD
      </button>
    </div>
  </div>
</template>

<style scoped></style>
