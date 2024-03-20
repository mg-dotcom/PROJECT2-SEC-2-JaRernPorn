<script setup>
import { ref, defineProps } from 'vue'
import category from '../../../data/categories.json'
import SoundButton from '../SoundButton.vue'
import SoundControl from '../SoundControl.vue'
import Setting from '../Setting.vue'

const props = defineProps({
  categoryIndex: {
    //เอาไว้ดึงข้อมูลของหมวดหมู่มาใช้
    type: Number,
    default: 0 //ให้เป็นที่ 0 ไว้ก่อน
  },
  unitIndex: {
    //รับมาเพื่อที่จะเอาไว้ดึงข้อมูลของ unit อันนั้นๆมาใช้
    type: Number,
    default: 0 //ให้เป็นที่ 0 ไว้ก่อน
  }
})

const showSetting = ref(false)
const toggleSetting = () => {
  showSetting.value = !showSetting.value
}

const currentCategory = category.categories[props.categoryIndex]
const items = currentCategory.units[props.unitIndex].items
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full p-5">
    <div class="border-double border-8 border-title box-border h-full w-full">
      <div class="flex justify-between pt-10 px-20">
        <div class="setting flex">
          <img
            src="/setting.svg"
            alt="setting button"
            class="w-10 cursor-pointer"
            @click="toggleSetting"
          />
        </div>
        <div class="font-semibold font-outfit text-title">
          <img
            src="../../public/homeButton.svg"
            alt="home button"
            class="cursor-pointer size-14"
          />
        </div>
      </div>

      <div class="flex justify-center mt-3">
        <h1 class="text-title text-[86px] font-alkatra font-semibold">
          Review Vocabulary
          <!-- : {{ currentCategory.name }} -->
        </h1>
      </div>

      <div class="flex flex-row gap-16 justify-center mt-10">
        <div
          class="h-[400px] w-[300px] rounded-3xl shadow-md bg-white cursor-pointer hover:border-8 border-slate-200"
          v-for="(item, index) in items"
          :key="index"
        >
          <!-- Sound-Part -->
          <SoundControl :soundPath="item.pronunciation">
            <img
              :src="item.src"
              :alt="item.meaning"
              class="w-[220px] h-[225px] ml-10 mt-3"
            />
            <SoundButton />
          </SoundControl>

          <div
            class="border-solid border-b-2 border-black w-[230px] ml-7 mt-10"
          ></div>
          <h1 class="text-[24px] ml-10 mt-3">
            {{ item.word.split(' ')[0] }} <br />
            {{ item.word.split(' ').slice(1).join(' ') }}
          </h1>
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

      <div class="flex flex-wrap justify-center mt-16">
        <div class="flex justify-center gap-6">
          <div
            class="flex justify-center items-center bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-40 h-16"
          >
            <button class="uppercase">Play Again</button>
          </div>

          <div
            class="flex justify-center items-center bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-40 h-16"
          >
            <button class="uppercase">Main Menu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
