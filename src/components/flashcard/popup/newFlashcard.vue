<script setup>
import { defineProps, ref, defineEmits } from "vue";
import closeIcon from "../icons/iconClose.vue";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
});

const newChineseWord = ref("");
const newPinyin = ref("");
const newMeaning = ref("");

const emit = defineEmits(["addNewFlashcard"]);

const closeButton = () => {
  props.popup.newFlashcard = false;
};

const addNewFlashcard = () => {
  emit(
    "addNewFlashcard",
    newChineseWord.value,
    newPinyin.value,
    newMeaning.value
  );
  props.popup.newFlashcard = false;
  newChineseWord.value = "";
  newPinyin.value = "";
  newMeaning.value = "";
};

const showFlashCardAdd = () => {
  props.popup.newFlashcard = true;
};

const closeFlashCardAdd = () => {
  props.popup.newFlashcard = false;
  newChineseWord.value = "";
  newPinyin.value = "";
  newMeaning.value = "";
};
</script>

<template>
  <div class="text-start font-outfit text-base font-semibold pb-2">
    <div>
      <h1
        class="cursor-pointer inline hover:bg-[#f4ead8] p-[4px] rounded-xl transition-all duration-[270ms]"
        @click="showFlashCardAdd"
      >
        Add new +
      </h1>
    </div>
  </div>
  <hr class="border-gray-300" />

  <section
    class="popup-newCollection z-50 fixed top-0 left-0"
    v-show="props.popup.newFlashcard"
  >
    <div
      class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
      @click.self="closeFlashCardAdd"
    >
      <div
        class="bg-white rounded-lg xl:scale-100 xl:w-[500px] xl:h-[463px] relative p-6 md:scale-[80%] sm:scale-[90%] mobile:scale-[73%] mobile:w-[500px]"
      >
        <closeIcon
          class="absolute top-3 right-4 cursor-pointer"
          @click="closeFlashCardAdd"
        />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-4xl font-mono font-semibold">
            Add new flashcard
          </div>
          <div class="my-6 flex flex-col items-center justify-center gap-y-7">
            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit">Chinese word</div>
              <input
                type="text"
                v-model="newChineseWord"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 focus:transition-all duration-[300ms]"
                placeholder="Chinese word"
              />
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit">Pinyin</div>
              <input
                type="text"
                v-model="newPinyin"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 focus:transition-all duration-[300ms]"
                placeholder="Pinyin"
              />
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit">Meaning</div>
              <input
                type="text"
                v-model="newMeaning"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 focus:transition-all duration-[300ms]"
                placeholder="Meaning"
              />
            </div>

            <div class="flex flex-row gap-5 py-2">
              <button
                class="bg-red-600 text-white rounded-md w-20 h-9 font-outfit font-medium"
                @click="closeFlashCardAdd"
              >
                CANCEL
              </button>
              <button
                class="bg-[#4096ff] text-white rounded-md w-20 font-outfit font-medium"
                @click="addNewFlashcard"
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
