<script setup>
const emits = defineEmits([
  'closeSetting',
  'restartGame',
  'resumeGame',
  'goCategories'
])
</script>

<template>
  <div class="flex justify-center z-30">
    <div
      class="setting bg-white border rounded-2xl shadow-xl max-h-[600px] w-[300px]"
    >
      <div class="closebtn flex justify-end p-2 cursor-pointer">
        <div
          class="hover:bg-slate-100 p-1 rounded-full transition-all duration-300 ease-in-out"
        >
          <img
            src="/settingBtn/close.svg"
            alt="close setting btn"
            class="cursor-pointer w-4"
            @click="$emit('closeSetting')"
          />
        </div>
      </div>

      <div
        class="header text-center text-5xl font-alkatra text-title font-semibold"
      >
        <h1>Menu</h1>
      </div>

      <div class="flex flex-col m-5 gap-x-4 gap-y-4 px-6">
        <div
          @click="$emit('restartGame')"
          class="restart bg-replay-btn px-8 py-3 h-16 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#EF9D00] transition-all duration-300 ease-in-out"
        >
          <img
            src="/settingBtn/replay.svg"
            alt="restart"
            class="restart cursor-pointer w-10"
          />
        </div>

        <div
          @click="$emit('resumeGame')"
          class="play bg-play-btn px-8 py-3 h-16 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#439A00] transition-all duration-300 ease-in-out"
        >
          <img
            src="/settingBtn/play.svg"
            alt="resume"
            class="resume cursor-pointer"
          />
        </div>

        <div
          @click="$emit('goCategories')"
          class="category bg-category-btn px-8 py-3 h-16 rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#5FA3C9] transition-all duration-300 ease-in-out"
        >
          <img
            src="/settingBtn/category.svg"
            alt="category"
            class="home cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
