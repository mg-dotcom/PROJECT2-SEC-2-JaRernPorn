<script setup>
import { defineProps, ref, defineEmits } from "vue";
import closeIcon from "../../icons/iconClose.vue";

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

const oldChineseWord = ref(props.computedFlashcards[props.index].chineseWord);
const oldPinyin = ref(props.computedFlashcards[props.index].pinyin);
const oldMeaning = ref(props.computedFlashcards[props.index].meaning);
const chineseWordIsEmpty = ref(false);
const pinyinIsEmpty = ref(false);
const meaningIsEmpty = ref(false);

const emit = defineEmits(["renameFlashcard"]);

const closeFlashCardAdd = () => {
  props.popup.renameFlashcard = false;
  props.popup.optionFlashcard = false;
  chineseWordIsEmpty.value = false;
  pinyinIsEmpty.value = false;
  meaningIsEmpty.value = false;
};

const renameFlashcard = (index) => {
  const chineseWordEmpty = oldChineseWord.value.trim() === "";
  const pinyinEmpty = oldPinyin.value.trim() === "";
  const meaningEmpty = oldMeaning.value.trim() === "";
  if (chineseWordEmpty || pinyinEmpty || meaningEmpty) {
    chineseWordIsEmpty.value = chineseWordEmpty;
    pinyinIsEmpty.value = pinyinEmpty;
    meaningIsEmpty.value = meaningEmpty;
    return;
  } else {
    emit(
      "renameFlashcard",
      oldChineseWord.value,
      oldPinyin.value,
      oldMeaning.value,
      index
    );
    props.popup.renameFlashcard = false;
    props.popup.optionFlashcard = false;
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
  <section
    class="popup oldCollection z-50 fixed top-0 left-0"
    v-show="props.popup.renameFlashcard"
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
            Edit flashcard
          </div>
          <div class="my-6 flex flex-col items-center justify-center gap-y-7">
            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Chinese word</div>
              <input
                type="text"
                v-model="oldChineseWord"
                class="border-[1.5px] rounded-md p-2 w-[360px] border-black"
                @focus="$event.target.select()"
                :placeholder="props.computedFlashcards[props.index].chineseWord"
                @keydown.enter="renameFlashcard(props.index)"
              />
              <div
                v-if="chineseWordIsEmpty"
                class="absolute right-20 top-40 text-xs text-red-600"
              >
                Please fill value in form
              </div>
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Pinyin</div>
              <input
                type="text"
                v-model="oldPinyin"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px]"
                @focus="$event.target.select()"
                @input="pinyinIsEmpty = isEmpty(oldPinyin)"
                :placeholder="props.computedFlashcards[props.index].pinyin"
                @keydown.enter="renameFlashcard(props.index)"
              />
              <div
                v-if="pinyinIsEmpty"
                class="absolute right-20 top-[258px] text-xs text-red-600"
              >
                Please fill value in form
              </div>
            </div>

            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Meaning</div>
              <input
                type="text"
                v-model="oldMeaning"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px]"
                @focus="$event.target.select()"
                @input="meaningIsEmpty = isEmpty(oldMeaning)"
                :placeholder="props.computedFlashcards[props.index].meaning"
                @keydown.enter="renameFlashcard(props.index)"
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
                @click="renameFlashcard(props.index)"
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
