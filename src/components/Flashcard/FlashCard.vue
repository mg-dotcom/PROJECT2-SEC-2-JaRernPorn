<script setup>
import { reactive, ref, watchEffect } from "vue";
import Header from "./Header.vue";
import Content from "./Content.vue";

const showFlashCard = ref(true);

const popup = reactive({
  newFlashcard: false,
  //Setting
  optionFlashcard: false,
});
</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full" @click.self="">
    <section v-if="showFlashCard">
      <Header>
        <template #title> </template>
      </Header>

      <Content :popup="popup"></Content>
    </section>
  </div>
</template>

<style scoped></style>
