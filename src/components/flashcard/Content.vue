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

const SelectedIndex = ref(0);

const toggleOption = (index) => {
  props.popup.optionFlashcard = !props.popup.optionFlashcard;
  SelectedIndex.value = index;
};

const showRenameFlashcard = (index) => {
  props.popup.renameFlashcard = !props.popup.renameFlashcard;
  SelectedIndex.value = index;
};

const handleAddNewFlashcard = (chineseWord, pinyin, meaning) => {
  flashcards.value.push({
    id: flashcards.value.length + 1,
    chineseWord: chineseWord,
    pinyin: pinyin,
    meaning: meaning,
  });
  props.popup.optionFlashcard = false;
  console.log("flashcards", flashcards.value);
};

const handelDeleteFlashcard = (index) => {
  flashcards.value.splice(index, 1);
  props.popup.optionFlashcard = false;
};

const handelEditFlashcard = (chineseWord, pinyin, meaning, index) => {
  flashcards.value[index].chineseWord = chineseWord;
  flashcards.value[index].pinyin = pinyin;
  flashcards.value[index].meaning = meaning;
  props.popup.renameFlashcard = false;
  props.popup.optionFlashcard = false;
  console.log(SelectedIndex.value);
  console.log(index);
};
</script>

<template>
  <div class="w-8/12 mx-auto flex flex-col">
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
      class="grid grid-cols-1 gap-10 px-10 py-7 text-center lg:grid-cols-4 md:grid-cols-3 md:gap-17 sm:grid-cols-2 sm:gap-10"
    >
      <Card
        v-for="(card, index) in computedFlashcards"
        :card="card"
        :index="index"
        :key="index"
        :popup="popup"
        :SelectedIndex="SelectedIndex"
        :computedFlashcards="computedFlashcards"
        @toggle-option-flashcard="toggleOption"
        @deleteFlashcard="handelDeleteFlashcard"
        @showRenameFlashcard="showRenameFlashcard"
        @renameFlashcard="handelEditFlashcard"
      ></Card>
    </div>
  </div>
</template>

<style scoped></style>
