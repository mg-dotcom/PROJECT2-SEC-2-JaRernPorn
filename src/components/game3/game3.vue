<script setup></script>

<template>
  <div class="font-outfit">
    <div class="header flex justify-between p-16">
      <div class="category-name text-title text-4xl font-semibold">
        Category : Fruit
      </div>
      <div class="setting flex">
        <img
          src="/public/Vector.svg"
          alt="setting button"
          class="w-10 "
        />
      </div>
    </div>
    <div>
        <p>green</p>
    </div>
    <div class="flex justify-center">
      <div class="quiz flex flex-col items-center ">
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
          <div class="bg-title mb-3 text-center text-white text-lg font-normal p-2 rounded-xl">菠萝 bōluó</div>
          <div class="bg-title mb-3 text-center text-white text-lg font-normal p-2 rounded-xl">苹果 píngguǒ</div>
          <div class="bg-title mb-3 text-center text-white text-lg font-normal p-2 rounded-xl">葡萄 pú táo</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
