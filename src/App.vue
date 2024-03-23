<script setup>
import { ref } from 'vue';
import game3 from './components/game3/game3.vue'
// import Setting from './components/game3/Setting.vue'
// import answer_popup from './components/game3/answer_popup.vue';

const showgame3=ref(true)
</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full">
    <game3 />
    <!-- <Test/> -->
    <!-- <answer_popup/> -->
  </div>
</template>

<style scoped></style>
