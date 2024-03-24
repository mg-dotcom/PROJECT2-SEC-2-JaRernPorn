<script setup>
import { defineProps, defineEmits, ref } from "vue";
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
  }
});

const showOption = (index, event) => {
  emit("toggle-option-flashcard", index);
};

const deleteFlashcard = (index) => {
  emit("deleteFlashcard", index);
};

const showRenameFlashcard = (index) => {
  emit("showRenameFlashcard", index);
  props.popup.optionFlashcard = false;
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
const isClicked = ref(false);

const showMeaning = () => {
  isClicked.value = !isClicked.value;
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
        :SelectedIndex="SelectedIndex"
        @renameFlashcard="renameFlashcard"
      ></ranameFlashcard>

      <img
        class="z-40 bg-amber-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:bg-amber-300 rounded-full w-5 h-10 p-2 scale-[75%] absolute xl:top-0 xl:-right-[19px] lg:top-3 lg:-right-[8px] md:top-0 md:-right-[19px] transition-all duration-[270ms]"
        src="/img/flashcard-pic/option.svg"
        alt="option"
        @click="showOption(props.index)"
      />
      <div
        class="w-52 h-64 cursor-pointer group perspective bg-transparent xl:scale-100 lg:scale-90 md:scale-100 sm:scale-90 mobile:scale-90"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-30 w-full h-full duration-1000 cursor-pointer"
          :class="{ 'my-rotate-y-150': isClicked }"
          @click="showMeaning"
        >
          <div
            class="absolute bg-white border-[#FF9E94] py-4 px-7 rounded-xl border-2 w-full h-full backface-hidden overflow-y-auto"
          >
            <div class="flex flex-col h-full justify-center">
              <div
                class="flex items-center justify-center font-medium break-all xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl"
                :class="{
                  'h-auto':
                    props.computedFlashcards[props.index].chineseWord.length >
                    10,
                  'h-[140px]':
                    props.computedFlashcards[props.index].chineseWord.length <=
                    10,
                }"
              >
                {{ props.computedFlashcards[props.index].chineseWord }}
              </div>
              <hr class="my-2 border-gray-300 dark:border-gray-700" />
              <div
                class="flex items-center justify-center xl:text-2xl lg:text-2xl md:text-xl break-all"
                :class="{
                  'h-auto':
                    props.computedFlashcards[props.index].pinyin.length > 15,
                  'h-[42px]':
                    props.computedFlashcards[props.index].pinyin.length <= 15,
                }"
              >
                {{ props.computedFlashcards[props.index].pinyin }}
              </div>
            </div>
          </div>

          <div
            class="absolute my-rotate-y-200 backface-hidden bg-white border-[#FF9E94] py-4 px-7 rounded-xl border-2 w-full h-full overflow-y-auto"
          >
            <div class="flex flex-col h-full items-center justify-center">
              <div
                class="font-medium break-all text-center xl:text-xl lg:text-xl md:text-2xl"
              >
                {{ props.computedFlashcards[props.index].meaning }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
