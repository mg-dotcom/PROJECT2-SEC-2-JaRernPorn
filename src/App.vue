<script setup></script>

<template>
  <!-- flashcard page -->
  <div class="w-full h-screen bg-main-bgColor">
    <div class="flex justify-between items-center p-2 md:p-4 lg:px-10 lg:py-12">
      <div>
        <img
          src="/flashcard/back-button.svg"
          alt="back button"
          class="w-16 cursor-pointer lg:w-20"
        />
      </div>
      <div>
        <h1
          class="text-4xl font-alkatra text-title font-semibold md:text-5xl lg:text-6xl"
        >
          FLASHCARD
        </h1>
      </div>
      <div>
        <img
          src="/flashcard/setting vector.svg"
          alt="setting"
          class="w-8 cursor-pointer lg:w-10"
        />
      </div>
    </div>
    <div class="flex flex-col px-4 md:px-6 lg:px-14">
      <div class="flex justify-between">
        <button class="font-outfit font-medium md:text-xl lg:text-2xl">
          Add new +
        </button>
        <img src="/flashcard/menu.svg" alt="menu" class="w-1 lg:w-1.5" />
      </div>
      <p class="border border-b-0 border-gray-border"></p>
    </div>
  </div>
</template>

<style scoped></style>
