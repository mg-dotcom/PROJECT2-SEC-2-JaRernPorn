<script setup>
import { defineProps, ref, defineEmits, watch } from "vue";
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
  SelectedIndex: {
    required: true,
  },
});

const chineseWordIsEmpty = ref(false);
const pinyinIsEmpty = ref(false);
const meaningIsEmpty = ref(false);

const isAddingFlashcard = ref(false); // เช็คสถานะสำหรับการเพิ่ม flashcard
const isRenamingFlashcard = ref(false); // เช็คสถานะสำหรับการเปลี่ยนชื่อ flashcard

const closeFlashCardAdd = () => {
  isAddingFlashcard.value = false;
  isRenamingFlashcard.value = false;
  resetValues();
};

const resetValues = () => {
  chineseWordIsEmpty.value = false;
  pinyinIsEmpty.value = false;
  meaningIsEmpty.value = false;
};

const isEmpty = (value) => {
  return value === "";
};

// For renaming flashcards
const oldChineseWord = ref("");
const oldPinyin = ref("");
const oldMeaning = ref("");

const watchSelectedIndex = () => {
  oldChineseWord.value = props.computedFlashcards[props.index].chineseWord;
  oldPinyin.value = props.computedFlashcards[props.index].pinyin;
  oldMeaning.value = props.computedFlashcards[props.index].meaning;
};

watch(
  () => props.computedFlashcards[props.SelectedIndex],
  () => {
    watchSelectedIndex();
  }
);

const emit = defineEmits(["addNewFlashcard", "renameFlashcard"]);

const renameFlashcard = () => {
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
      props.SelectedIndex
    );
    closeFlashCardAdd();
  }
};


// const renameFlashcard = () => {
//   const chineseWordEmpty = oldChineseWord.value.trim() === "";
//   const pinyinEmpty = oldPinyin.value.trim() === "";
//   const meaningEmpty = oldMeaning.value.trim() === "";
//   if (chineseWordEmpty || pinyinEmpty || meaningEmpty) {
//     chineseWordIsEmpty.value = chineseWordEmpty;
//     pinyinIsEmpty.value = pinyinEmpty;
//     meaningIsEmpty.value = meaningEmpty;
//     return;
//   } else {
//     emit(
//       "renameFlashcard",
//       oldChineseWord.value,
//       oldPinyin.value,
//       oldMeaning.value,
//       props.SelectedIndex
//     );
//     closeFlashCardAdd();
//   }
// };
</script>

<template>
  <section class="popup oldCollection z-50 fixed top-0 left-0" v-show="isRenamingFlashcard || isAddingFlashcard">
    <div class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen">
      <div
        class="bg-white rounded-lg xl:scale-100 xl:w-[500px] xl:h-[463px] relative p-6 md:scale-[80%] sm:scale-[90%] mobile:scale-[73%] mobile:w-[500px]">
        <closeIcon class="absolute top-3 right-4 cursor-pointer" @click="closeFlashCardAdd" />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-4xl font-mono font-semibold">
            {{ isRenamingFlashcard ? 'Edit flashcard' : 'Add new flashcard' }}
          </div>
          <div class="my-6 flex flex-col items-center justify-center gap-y-7">
            <!-- Chinese Word Input -->
            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Chinese word</div>
              <input type="text" :value="isRenamingFlashcard ? oldChineseWord : newChineseWord"
                class="border-[1.5px] rounded-md p-2 w-[360px]" @focus="$event.target.select()" :class="{
    'border-red-600': chineseWordIsEmpty,
    'focus:border-red-600': chineseWordIsEmpty,
    'border-black': !chineseWordIsEmpty,
  }" :placeholder="isRenamingFlashcard ? props.computedFlashcards[props.index].chineseWord : 'Chinese word'"
                @keydown.enter="isRenamingFlashcard ? renameFlashcard(props.index) : addNewFlashcard" />
              <div v-if="chineseWordIsEmpty" class="absolute right-20 top-40 text-xs text-red-600">
                Please fill value in form
              </div>
            </div>

            <!-- Pinyin Input -->
            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Pinyin
              </div>

              <input type="text" :value="isRenamingFlashcard ? oldPinyin : newPinyin"
                @input="isRenamingFlashcard ? oldPinyin = $event.target.value : newPinyin = $event.target.value"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px]" @focus="$event.target.select()" :class="{
                'border-red-600': pinyinIsEmpty,
                'focus:border-red-600': pinyinIsEmpty,
                'border-black': !pinyinIsEmpty, }" 
                :placeholder="isRenamingFlashcard ? props.computedFlashcards[props.index].pinyin : 'Pinyin'"
                @keydown.enter="isRenamingFlashcard ? renameFlashcard(props.index) : addNewFlashcard" />

              <div v-if="pinyinIsEmpty" class="absolute right-20 top-[258px] text-xs text-red-600">
                Please fill value in form
              </div>
            </div>

            <!-- Meaning Input -->
            <div class="chinese-word input-box gap-y-1 flex flex-col">
              <div class="font-outfit text-start">Meaning</div>
              <input type="text" :value="isRenamingFlashcard ? oldMeaning : newMeaning"
                class="border-[1.5px] border-black rounded-md p-2 w-[360px]" @focus="$event.target.select()" :class="{
                  'border-red-600': meaningIsEmpty,
                  'focus:border-red-600': meaningIsEmpty,
                  'border-black': !meaningIsEmpty,}" 
                  @input="meaningIsEmpty = isEmpty(isRenamingFlashcard ? oldMeaning : newMeaning)"
                :placeholder="isRenamingFlashcard ? props.computedFlashcards[props.index].meaning : 'Meaning'"
                @keydown.enter="isRenamingFlashcard ? renameFlashcard(props.index) : addNewFlashcard" />
              <div v-if="meaningIsEmpty" class="absolute right-20 top-[356px] text-xs text-red-600">
                Please fill value in form
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex flex-row gap-5 py-2">
              <button class="bg-red-600 text-white rounded-md w-20 h-9 font-outfit font-medium"
                @click="closeFlashCardAdd">
                CANCEL
              </button>
              <button class="bg-[#4096ff] text-white rounded-md w-20 font-outfit font-medium"
                @click="isRenamingFlashcard ? renameFlashcard(props.index) : addNewFlashcard">
                {{ isRenamingFlashcard ? 'OK' : 'ADD' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
