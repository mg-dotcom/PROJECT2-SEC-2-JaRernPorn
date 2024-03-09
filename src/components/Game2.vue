<script setup>
import { defineProps } from 'vue'
import category from '../../data/categories.json'

const props = defineProps({
  categoryIndex: { //เอาไว้ดึงข้อมูลของหมวดหมู่มาใช้
    type: Number,
    default: 0 //ให้เป็นที่ 0 ไว้ก่อน
  },
  unitIndex: { //รับมาเพื่อที่จะเอาไว้ดึงข้อมูลของ unit อันนั้นๆมาใช้
    type: Number,
    default: 0 //ให้เป็นที่ 0 ไว้ก่อน
  }
})

//const items = category.categories[0].units[0].items

const currentCategory = category.categories[props.categoryIndex]
const items = currentCategory.units[props.unitIndex].items
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full">

    <div class="font-outfit">

      <div class="header flex justify-between p-12">

        <div class="text-5xl font-semibold font-outfit text-title ">
          Category : {{ currentCategory.name }}
        </div>

        <div class="setting flex">
          <img src="/setting.svg" alt="setting button" class="w-10" />
        </div>

      </div>

      <div class="flex justify-center">

        <div class="flex flex-col items-center">

          <div class="text-title text-4xl font-semibold py-5">
            Select this in English.
          </div>

          <div
            class="flex flex-col items-center bg-white text-2xl text-title font-semibold rounded-lg drop-shadow-lg w-80 py-5">
            <h3> 苹果 </h3>
          </div>

          <div class=" py-12 w-3/4">
            <div class="grid grid-cols-1 gap-y-5 justify-center ">
              <button v-for="(item, index) in items" :key="index"
                class="flex justify-center items-center bg-title text-white font-semiboldl text-2xl h-14 sm:h-20 rounded-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                {{ item.meaning }}
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<style scoped></style>
