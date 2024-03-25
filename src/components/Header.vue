<script setup>
import { defineProps, ref } from 'vue'
import SettingHomePage from '../components/SettingHomePage.vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  closeOption: {
    type: Function,
    required: true
  }
})

const showSetting = ref(false)

const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div
    class="z-50 fixed top-0 left-0 w-screen min-h-screen"
    v-show="showSetting"
  >
    <SettingHomePage @closeSetting="toggleSetting" />
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
        @click="goBack"
      />
    </div>
    <div>
      <h1
        class="text-4xl font-alkatra text-title font-semibold md:text-5xl lg:text-7xl"
      >
        <slot name="title"> Untitle </slot>
      </h1>
    </div>
    <div>
      <img
        src="/settingBtn/setting.svg"
        alt="setting"
        class="w-12 cursor-pointer hover:scale-110 transition-transform duration-300 sm:scale-100 mobile:scale-90"
        @click="toggleSetting"
      />
    </div>
  </div>
</template>

<style scoped></style>
