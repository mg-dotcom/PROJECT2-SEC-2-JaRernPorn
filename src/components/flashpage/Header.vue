<script setup>
import { defineProps } from "vue";
import settingButton from "../flashpage/icons/setting-button.vue";

const props = defineProps({
  closeOption: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex justify-between items-center p-2 md:p-4 lg:px-10 lg:py-7"
    @click.self="closeOption"
  >
    <div
      class="hover:scale-110 transition-transform duration-300 sm:scale-100 mobile:scale-90"
    >
      <img
        src="/img/flashcard-pic/back-button.svg"
        alt="back button"
        class="w-16 cursor-pointer lg:w-20"
      />
    </div>
    <div>
      <h1
        class="text-4xl font-alkatra text-title font-semibold md:text-5xl lg:text-6xl"
      >
        <slot name="title">Untitle</slot>
      </h1>
    </div>
    <div>
      <settingButton />
    </div>
  </div>
</template>

<style scoped></style>
