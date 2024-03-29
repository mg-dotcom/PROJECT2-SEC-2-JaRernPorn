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
    <div class="setting bg-white border border-black rounded-2xl">
      <div class="closebtn flex justify-end p-3 cursor-pointer">
        <img
          src="/settingBtn/close.svg"
          alt="close setting btn"
          class="cursor-pointer w-4"
          @click="$emit('closeSetting')"
        />
      </div>

      <div
        class="header text-center text-4xl font-alkatra text-title font-semibold"
      >
        <h1>Setting</h1>
      </div>

      <div class="flex m-5 gap-x-4">
        <div class="restart">
          <img
            src="/settingBtn/replay.svg"
            alt="restart button"
            class="restart cursor-pointer"
            @click="$emit('restartGame')"
          />
        </div>

        <div class="play">
          <img
            src="/settingBtn/resume.svg"
            alt="resume button"
            class="resume cursor-pointer"
            @click="$emit('resumeGame')"
          />
        </div>

        <div class="category">
          <img
            src="/settingBtn/category.svg"
            alt="home"
            class="home cursor-pointer"
            @click="$emit('goCategories')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
