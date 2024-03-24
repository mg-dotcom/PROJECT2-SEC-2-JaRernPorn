<script setup>
import { defineProps, ref, computed, onMounted } from "vue";
import newFlashcard from "./popup/newFlashcard.vue";
import { addNewFlashcard } from "../../libs/flashcard-libs/FlashCardModal.js";
import { deleteFlashcard } from "../../libs/flashcard-libs/FlashCardModal.js";
import Card from "./Card.vue";
import { editFlashcard } from "../../libs/flashcard-libs/FlashCardModal.js";
import { getFlashcard, addFlashcard } from "../../libs/fetchFlashcard.js";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
  closeOption: {
    type: Function,
    required: true,
  },
  currentCollectionId: {
    type: String,
    required: true,
  },
});

const flashcards = ref([]);

onMounted(async () => {
  flashcards.value = await getFlashcard(
    import.meta.env.VITE_BASE_URL,
    props.currentCollectionId
  );
});

const computedFlashcards = computed(() => {
  return flashcards.value;
});

const SelectedIndex = ref(0);

const toggleOption = (index) => {
  props.popup.optionFlashcard = !props.popup.optionFlashcard;
  SelectedIndex.value = index;
};

const showRenameFlashcard = (index) => {
  props.popup.renameFlashcard = true;
  SelectedIndex.value = index;
  // console.log("before select", SelectedIndex.value);
};

const handleAddNewFlashcard = async (
  newId,
  newChineseWord,
  newPinyin,
  newMeaning
) => {
  if (newId === undefined) {
    const addedFlashcard = await addFlashcard(
      import.meta.env.VITE_BASE_URL,
      props.currentCollectionId,
      {
        id: newId,
        chineseWord: newChineseWord,
        pinyin: newPinyin,
        meaning: newMeaning,
      }
    );
  }

  props.popup.optionFlashcard = false;
};

const handelDeleteFlashcard = (index) => {
  deleteFlashcard(index, flashcards.value);
  props.popup.optionFlashcard = false;
};

const handelEditFlashcard = (chineseWord, pinyin, meaning, index) => {
  editFlashcard(
    chineseWord,
    pinyin,
    meaning,
    SelectedIndex.value,
    flashcards.value
  );

  props.popup.renameFlashcard = false;
  props.popup.optionFlashcard = false;
};
</script>

<template>
  <div class="w-8/12 mx-auto flex flex-col" @click.self="closeOption">
    <newFlashcard
      :popup="popup"
      :closeOption="closeOption"
      @addNewFlashcard="handleAddNewFlashcard"
    ></newFlashcard>

    <div
      v-if="computedFlashcards.length === 0"
      class="flex-grow flex justify-center items-center text-center h-[70vh]"
    >
      <div class="text-gray-300 text-sm">No flashcard added yet</div>
    </div>

    <!-- All Flashcard -->
    <div
      v-else-if="computedFlashcards.length > 0"
      class="grid grid-cols-1 px-10 py-7 text-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-17 sm:grid-cols-2 sm:gap-10"
      @click.self="closeOption"
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
