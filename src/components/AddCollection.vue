<script setup></script>

<template>
  <div class="w-full h-screen grid place-content-center">
    <div class="bg-white shadow-xl rounded-2xl px-4 py-6 w-96 h-90">
      <div class="flex justify-center py-2">
        <span class="font-outfit text-3xl font-semibold text-title"
          >Add new flashcard</span
        >
      </div>

      <div class="grid place-content-center py-2">
        <div class="flex flex-col py-2 gap-y-1">
          <label for="chineseword" class="text-black font-outfit"
            >Chinese Word</label
          >
          <input
            type="text"
            id="chineseword"
            class="border border-black bg-white rounded-md p-1 w-60"
            placeholder="苹果"
          />
        </div>

        <div class="flex flex-col py-2 gap-y-1">
          <label for="pinyin" class="text-black font-outfit">Pinyin</label>
          <input
            type="text"
            id="pinyin"
            class="border border-black bg-white rounded-md p-1 w-60"
            placeholder="píngguǒ"
          />
        </div>

        <div class="flex flex-col py-2 gap-y-1">
          <label for="meaning" class="text-black font-outfit">Meaning</label>
          <input
            type="text"
            id="meaning"
            class="border border-black bg-white rounded-md p-1 w-60"
            placeholder="Apple"
          />
        </div>
      </div>

      <div class="flex justify-between px-12 py-2">
        <button
          class="font-outfit font-semibold text-white bg-title rounded-xl w-24 p-2 hover:bg-button-bgColor"
        >
          CANCEL
        </button>
        <button
          class="font-outfit font-semibold text-white bg-title rounded-xl w-24 p-2 hover:bg-button-bgColor"
        >
          ADD
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
