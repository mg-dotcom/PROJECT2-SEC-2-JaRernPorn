<script setup>
import Options from "../components/game4/Options.vue";
import data from "../../data/data.json";
import Setting from "../components/Setting.vue";

import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const paramCateIndex = route.params.cateIndex - 1;
const currentIndexItem = ref(paramCateIndex);

const currentCategory = computed(() => {
  return data.categories[currentIndexItem.value].name;
});
const settingPopup = ref(false);

const closeSetting = () => {
  settingPopup.value = false; //false
};

const toggleSetting = () => {
  settingPopup.value = !settingPopup.value;
};
</script>

<template>
  <!-- Game 4 page -->
  <div class="w-full h-screen bg-main-bgColor">
    <header class="py-8 px-10 flex-grow-0">
      <!-- Back to home Button -->
      <div class="header flex justify-center items-center">
        <div
          class="categories text-title font-semibold font-outfit text-4xl flex items-center justify-start w-full"
        >
          Category: {{ currentCategory }}
        </div>
      </div>
      <div class="setting">
        <img
          src="/settingBtn/setting.svg"
          alt="setting button"
          class="w-10 absolute right-10 top-10 hover:scale-105 transition-all duration-300 ease-in-out"
          @click="toggleSetting"
        />
      </div>
    </header>
    <div class="flex justify-center py-8">
      <p
        class="font-outfit text-title text-2xl font-semibold sm:text-3xl lg:text-4xl"
      >
        Select the matching pairs
      </p>
    </div>

    <Options />
    <!-- <ShuffleOptions /> -->

    <Teleport to="#setting">
      <div class="absolute left-0 right-0 top-1/3 z-20" v-show="settingPopup">
        <Setting
          @closeSetting="closeSetting"
          @restartGame="
            router.push({
              name: 'Game1',
              params: {
                cateIndex: route.params.cateIndex,
                unit: route.params.unit,
              },
            })
          "
          @resumeGame="toggleSetting"
          @goBackHome="router.push('/')"
        />
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
