<script setup>
import { defineProps, ref } from "vue";
import settingButton from "./icons/setting-button.vue";
import settingPopup from "./popup/Setting.vue";

const props = defineProps({});

const showSetting = ref(false);

const toggleSetting = () => {
  showSetting.value = !showSetting.value;
};
</script>

<template>
  <div
    class="z-50 fixed top-0 left-0 w-screen min-h-screen"
    v-show="showSetting"
  >
    <settingPopup @closeSetting="toggleSetting" />
  </div>

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
        class="text-4xl font-alkatra text-title font-semibold md:text-5xl lg:text-7xl"
      >
        <slot name="title">Untitle</slot>
      </h1>
    </div>
    <div>
      <settingButton @click="toggleSetting" />
    </div>
  </div>
</template>

<style scoped></style>
