<script setup>
import data from '../../data/categories.json'
import Options from './Options.vue'
import Setting from './Setting.vue'
import Topbar from './Topbar.vue'
import { ref } from 'vue'

const settingPopup = ref(false)

const showSetting = (flag) => {
  settingPopup.value = flag //true
}
const closeSetting = (flag) => {
  settingPopup.value = flag //false
}
</script>

<template>
  <!-- Game 4 page -->
  <div class="w-full h-screen bg-main-bgColor">
    <Topbar @setting="showSetting" />

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
      <div class="absolute left-0 right-0 top-0 m-auto" v-show="settingPopup">
        <Setting @close="closeSetting" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
