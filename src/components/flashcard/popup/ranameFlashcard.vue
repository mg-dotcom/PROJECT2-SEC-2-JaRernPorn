<script setup>
import { defineProps, ref, defineEmits } from "vue";
import closeIcon from "../icons/iconClose.vue";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
  computedFlashcards: {
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

console.log(props.computedFlashcards);

const oldChineseWord = ref("");
const oldPinyin = ref("");
const oldMeaning = ref("");

const emit = defineEmits(["addNewFlashcard"]);

// const addNewFlashcard = () => {
//   emit(
//     "addNewFlashcard",
//     newChineseWord.value,
//     newPinyin.value,
//     newMeaning.value
//   );
//   props.popup.newFlashcard = false;
//   newChineseWord.value = "";
//   newPinyin.value = "";
//   newMeaning.value = "";
// };

const showFlashCardAdd = () => {
  props.popup.newFlashcard = true;
};

// const closeFlashCardAdd = () => {
//   props.popup.renameFlashcard = false;
//   newChineseWord.value = "";
//   newPinyin.value = "";
//   newMeaning.value = "";
// };
</script>

<template>
  <section
    class="popup-newCollection z-50 fixed top-0 left-0"
    v-show="props.popup.renameFlashcard"
  >
    <div
      class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
      @click.self="closeFlashCardAdd"
    >
      <div
        class="bg-white rounded-lg xl:scale-100 xl:w-[500px] xl:h-[463px] relative p-6 md:scale-[80%] sm:scale-[90%] mobile:scale-[73%] mobile:w-[500px]"
      >
        <closeIcon class="absolute top-3 right-4 cursor-pointer" @click="" />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-4xl font-mono font-semibold">
            Edit flashcard
          </div>
          <div class="my-6 flex flex-col items-center justify-center gap-y-7">
            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Chinese word</div>
              <input
                type="text"
                v-model="oldChineseWord"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 focus:transition-all duration-[300ms]"
                :placeholder="props.computedFlashcards[props.index].word"
              />
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Pinyin</div>
              <input
                type="text"
                v-model="oldPinyin"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 focus:transition-all duration-[300ms]"
                :placeholder="props.computedFlashcards[props.index].pinyin"
              />
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Meaning</div>
              <input
                type="text"
                v-model="oldMeaning"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 focus:transition-all duration-[300ms]"
                :placeholder="props.computedFlashcards[props.index].meaning"
              />
            </div>

            <div class="flex flex-row gap-5 py-2">
              <button
                class="bg-red-600 text-white rounded-md w-20 h-9 font-outfit font-medium"
                @click=""
              >
                CANCEL
              </button>
              <button
                class="bg-[#4096ff] text-white rounded-md w-20 font-outfit font-medium"
                @click=""
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
