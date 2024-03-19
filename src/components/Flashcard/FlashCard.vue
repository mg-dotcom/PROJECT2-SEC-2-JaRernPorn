<script setup>
import { ref, watchEffect } from "vue";
import Header from "./Header.vue";
import Content from "./Content.vue";

const newWord = ref("");
const newMeaning = ref("");

// const { emit } = defineEmits(['addFlashcard']);

const showFlashCard = ref(true);
const showAddCard = ref(false);

function goToAddCard() {
  showAddCard.value = true;
  showFlashCard.value = false;
}

const flashcards = ref([]);

watchEffect(flashcards, () => {
  if (flashcards.value.length > 0) {
    showFlashCard.value = true;
    showAddCard.value = false;
  }
});
// , { deep: true });
// ตรวจสอบการเปลี่ยนแปลงของ flashcards

const addFlashcard = () => {
  flashcards.value.push({
    id: flashcards.value.length + 1,
    word: newWord.value,
    meaning: newMeaning.value,
  });
  clearForm();
};

function clearForm() {
  newWord.value = "";
  newMeaning.value = "";
}

function cancelAddFlashcard() {
  clearForm();
}

const closeOption = () => {};
</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full">
    <section v-if="showFlashCard">
      <Header :closeOption="closeOption">
        <template #title> Flashcard </template>
      </Header>

      <Content :popup="popup"></Content>
    </section>
  </div>
</template>

<style scoped></style>
