<script setup>
import { defineProps, defineEmits } from "vue";
import optionFlashcard from "./popup/optionFlashcard.vue";
import ranameFlashcard from "./popup/ranameFlashcard.vue";

const props = defineProps({
  computedFlashcards: {
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  SelectedIndex: {
    type: Number,
    required: true,
  },
  popup: {
    type: Object,
    required: true,
  },
});

const showOption = (index, event) => {
  emit("toggle-option-flashcard", index);
};

const deleteFlashcard = (index) => {
  emit("deleteFlashcard", index);
};

const showRenameFlashcard = (index) => {
  emit("showRenameFlashcard", index);
};

const emit = defineEmits([
  "toggle-option-flashcard",
  "deleteFlashcard",
  "showRenameFlashcard",
  "renameFlashcard",
]);

const renameFlashcard = (chineseWord, pinyin, meaning, index) => {
  emit("renameFlashcard", chineseWord, pinyin, meaning, index);
};
</script>

<template>
  <div class="flex flex-row">
    <div class="cards relative">
      <optionFlashcard
        v-show="props.popup.optionFlashcard && SelectedIndex === props.index"
        :index="index"
        :popup="popup"
        @deleteCollection="deleteFlashcard(props.index)"
        @showRenameFlashcard="showRenameFlashcard"
      ></optionFlashcard>

      <ranameFlashcard
        v-show="props.popup.renameFlashcard && SelectedIndex === props.index"
        :index="index"
        :popup="popup"
        :computedFlashcards="computedFlashcards"
        @renameFlashcard="renameFlashcard"
      ></ranameFlashcard>

      <div class="font-outfit">
        <div
          class="bg-white border-[#FF9E94] py-4 px-7 rounded-xl border-2 w-52 h-64 overflow-y-auto relative"
        >
          <!-- Option -->
          <img
            class="z-40 opacity-50 hover:bg-gray-400 rounded-full w-10 h-10 p-2 scale-[75%] absolute top-0 right-0 transition-all duration-[270ms]"
            src="/img/flashcard-pic/option.svg"
            alt="option"
            @click="showOption(props.index)"
          />

          <!-- Word in Card -->
          <div class="flex flex-col h-full">
            <div
              class="flex items-center justify-center h-[150px] font-medium break-all lg:text-5xl"
            >
              {{ props.computedFlashcards[props.index].chineseWord }}
            </div>
            <hr class="my-2 border-gray-300 dark:border-gray-700" />
            <div
              class="flex items-center justify-center lg:text-2xl break-all"
              :class="{
                'h-[50px] lg:text-xl':
                  props.computedFlashcards[props.index].pinyin.length > 10,
                'h-[50px] ':
                  props.computedFlashcards[props.index].pinyin.length <= 10,
              }"
            >
              {{ props.computedFlashcards[props.index].pinyin }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
