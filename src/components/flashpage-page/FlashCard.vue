<script setup>
import { reactive, ref } from "vue";
import Header from "./Header.vue";
import Content from "./Content.vue";

const page = reactive({
  flashcard: true,
});

const popup = reactive({
  newCollection: false,
  optionCollection: false,
  editCollection: false,
  renameCollection: false,
});

const closeOption = () => {
  popup.optionCollection = false;
  renameCollectionName.value = "";
  SelectedIndex.value = null;
};

const SelectedIndex = ref(null);

const renameCollectionName = ref("");
</script>

<template>
  <!-- Flashcard Page -->
  <section class="flashcard-page overflow-hidden" v-show="page.flashcard">
    <div
      class="min-h-screen w-screen bg-main-bgColor"
      @click.self="closeOption"
    >
      <Header :closeOption="closeOption">
        <template #title> Flashcard </template>
      </Header>

      <Content :closeOption="closeOption" :popup="popup"> </Content>
    </div>
  </section>
</template>

<style scoped></style>
