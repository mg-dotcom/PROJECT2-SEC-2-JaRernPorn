<script setup>
import { defineProps, ref, defineEmits } from "vue";
import closeIcon from "../../icons/iconClose.vue";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
});

const newChineseWord = ref("");
const newPinyin = ref("");
const newMeaning = ref("");
const chineseWordIsEmpty = ref(false);
const pinyinIsEmpty = ref(false);
const meaningIsEmpty = ref(false);

const emit = defineEmits(["addNewFlashcard"]);

const showFlashCardAdd = () => {
  props.popup.newFlashcard = true;
};

const closeFlashCardAdd = () => {
  props.popup.newFlashcard = false;
  newChineseWord.value = "";
  newPinyin.value = "";
  newMeaning.value = "";
  chineseWordIsEmpty.value = false;
  pinyinIsEmpty.value = false;
  meaningIsEmpty.value = false;
};

const addNewFlashcard = () => {
  const chineseWordEmpty = newChineseWord.value.trim() === "";
  const pinyinEmpty = newPinyin.value.trim() === "";
  const meaningEmpty = newMeaning.value.trim() === "";

  // if any of the input is empty, set red border and message
  if (chineseWordEmpty || pinyinEmpty || meaningEmpty) {
    chineseWordIsEmpty.value = chineseWordEmpty;
    pinyinIsEmpty.value = pinyinEmpty;
    meaningIsEmpty.value = meaningEmpty;
    return;
  } else {
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
    chineseWordIsEmpty.value = false;
    pinyinIsEmpty.value = false;
    meaningIsEmpty.value = false;
  }
};

const isEmpty = (value) => {
  return value === "";
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
                class="border-[1.5px] rounded-md p-2 w-[360px]"
                :class="{
                  'border-red-600': chineseWordIsEmpty,
                  'focus:border-red-600': chineseWordIsEmpty,
                  'border-black': !chineseWordIsEmpty,
                }"
                @input="chineseWordIsEmpty = isEmpty(newChineseWord)"
                placeholder="Chinese word"
              />
              <div
                v-if="chineseWordIsEmpty"
                class="absolute right-20 top-40 text-xs text-red-600"
              >
                Please fill value in form
              </div>
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit">Pinyin</div>
              <input
                type="text"
                v-model="newPinyin"
                class="border-[1.5px] rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 border-black"
                :class="{
                  'border-red-600': pinyinIsEmpty,
                  'focus:border-red-600': pinyinIsEmpty,
                  'border-black': !pinyinIsEmpty,
                }"
                @input="pinyinIsEmpty = isEmpty(newPinyin)"
                placeholder="Pinyin"
              />
              <div
                v-if="pinyinIsEmpty"
                class="absolute right-20 top-[258px] text-xs text-red-600"
              >
                Please fill value in form
              </div>
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit">Meaning</div>
              <input
                type="text"
                v-model="newMeaning"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5"
                :class="{
                  'border-red-600': meaningIsEmpty,
                  'focus:border-red-600': meaningIsEmpty,
                  'border-black': !meaningIsEmpty,
                }"
                @input="meaningIsEmpty = isEmpty(newMeaning)"
                placeholder="Meaning"
              />
              <div
                v-if="meaningIsEmpty"
                class="absolute right-20 top-[356px] text-xs text-red-600"
              >
                Please fill value in form
              </div>
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
