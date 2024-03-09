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

  <div class="bg-main-bgColor h-screen w-full p-5">

    <div class="border-double border-8 border-title box-border h-full w-full">

      <div class="flex justify-between pt-10 px-20">
        <div class="setting flex">
          <img src="/setting.svg" alt="setting button" class="w-10" />

        </div>
        <div class=" font-semibold font-outfit text-title ">
          <h1>HOME</h1>
        </div>

      </div>

      <div class="flex justify-center mt-3">
        <h1 class="text-title text-5xl font-outfit font-semibold ">
          Review Vocabulary: {{ currentCategory.name }}
        </h1>
      </div>

      <div class="flex flex-row gap-14 justify-center mt-3">

        <div v-for="(item, index) in items" :key="index">

          <div class=" flex flex-col justify-center h-[400px] w-[280px] rounded-3xl shadow-md bg-white ">

            <div class="flex flex-col items-center ">
              <img :src="item.src" :alt="item.word" class="w-[200px] h-[205px]">
            </div>


            <div class="border-solid border-b-2 border-black w-[230px] ml-6 my-3"></div>

            <div class="flex justify-between">
              <div class="flex flex-col font-outfit text-lg ml-10 mt-7">
                <div> {{ item.word }} </div>
                <div> {{ item.meaning }} </div>
              </div>
              <div class="mr-10 mt-12">เสียง</div>
            </div>

          </div>

        </div>

      </div>

      <div class="flex flex-wrap justify-center mt-10">
        <div class="flex justify-center gap-6">
          <div
            class="flex justify-center items-center  bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white uppercase text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32">
            <button> Play Again </button>
          </div>

          <div
            class="flex justify-center items-center bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white uppercase text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32">
            <button> Main Menu </button>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped></style>
