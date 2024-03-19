<script setup>
import { defineProps, ref, computed } from "vue";
import newFlashcard from "./popup/newFlashcard.vue";
import Card from "./Card.vue";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
});

const flashcards = ref([]);

const computedFlashcards = computed(() => {
  return flashcards.value;
});

const handleAddNewFlashcard = (chineseWord, pinyin, meaning) => {
  flashcards.value.push({
    id: flashcards.value.length + 1,
    word: chineseWord,
    pinyin: pinyin,
    meaning: meaning,
  });
  console.log(flashcards.value);
};
</script>

<template>
  <newFlashcard
    :popup="popup"
    @addNewFlashcard="handleAddNewFlashcard"
  ></newFlashcard>

  <!-- All Flashcard -->
  <div
    v-if="computedFlashcards.length === 0"
    class="flex-grow flex justify-center items-center text-center h-[70vh]"
  >
    <div class="text-gray-300 text-sm">No flashcard added yet</div>
  </div>

  <div
    v-else-if="computedFlashcards.length > 0"
    class="grid grid-cols-1 gap-10 px-10 py-7 text-center lg:grid-cols-3 md:grid-cols-3 md:gap-17 sm:grid-cols-2 sm:gap-10"
  >
    <Card :computedFlashcards="computedFlashcards"></Card>
  </div>
</template>

<style scoped></style>
