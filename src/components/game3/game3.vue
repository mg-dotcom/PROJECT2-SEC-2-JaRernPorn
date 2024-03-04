<script setup>
import Option from './Option.vue'
</script>

<template>
  <div class="font-outfit">
    <div class="header flex justify-between p-16">
      <div class="category-name text-title text-4xl font-semibold">
        Category : Fruit
      </div>
      <div class="setting flex">
        <img src="/public/Vector.svg" alt="setting button" class="w-10" />
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <progress
          class="progress progress-success"
          value="100"
          max="100"
        ></progress>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="quiz flex flex-col items-center">
        <div class="text-title text-3xl font-semibold py-5">
          Select the correct meaning.
        </div>
        <div
          class="pic bg-white flex flex-col items-center rounded-lg drop-shadow-lg w-32 py-5"
        >
          <img src="/public/fruits/fruits-01.png" alt="" class="w-20" />
          <h3>Apple</h3>
        </div>
        <div class="options py-12 w-3/4">
          <Option :options="['菠萝 bōluó', '苹果 píngguǒ', '葡萄 pú táo']" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
