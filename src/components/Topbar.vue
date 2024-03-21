<script setup>
import { ref } from 'vue'
import data from '../../data/categories.json'
import Setting from '../components/Setting.vue'
const currentIndexCate = ref(2)
const showSetting = ref(false)
const toggleSetting = () => {
  showSetting.value = !showSetting.value
}
</script>

<template>
  <div>
    <div class="flex flex-col gap-5 px-16 py-8">
      <div class="flex justify-between items-center">
        <h1 class="font-outfit text-title text-3xl font-semibold sm:text-4xl">
          Category: {{ data.categories[currentIndexCate].name }}
        </h1>
        <img
          src="/Setting.svg"
          alt="setting"
          class="w-8 cursor-pointer hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out sm:w-10"
          @click="toggleSetting"
        />
      </div>
    </div>
    <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
      <Setting
        @closeSetting="toggleSetting"
        @restartGame=""
        @resumeGame=""
        @goBackHome=""
      />
    </div>
  </div>
</template>

<style scoped></style>
