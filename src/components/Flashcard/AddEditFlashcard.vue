<script setup>
import { defineProps, defineEmits, ref, computed } from "vue";
import closeIcon from "../icons/iconClose.vue";

const props = defineProps({
  popup: {
    type: Object,
    required: true,
  },
  SelectedIndex: {
    type: Number,
    default: undefined,
  },
  SelectedFlashcard: {
    type: Object,
    default: {
      id: undefined,
      chineseWord: "",
      pinyin: "",
      meaning: "",
    },
  },
});

const previousFlashcard = computed(() => props.SelectedFlashcard)

const chineseWordIsEmpty = ref(false);
const pinyinIsEmpty = ref(false);
const meaningIsEmpty = ref(false);

const emit = defineEmits(["addNewFlashcard", "renameFlashcard"]);

const closeButton = () => {
  previousFlashcard.value = {
    id: undefined,
    chineseWord: "",
    pinyin: "",
    meaning: "",
  };
  chineseWordIsEmpty.value = false;
  pinyinIsEmpty.value = false;
  meaningIsEmpty.value = false;
  props.popup.addEditFlashcard = false;
};


const addNewFlashcard = () => {
  const chineseWordEmpty = previousFlashcard.value.chineseWord === "";
  const pinyinEmpty = previousFlashcard.value.pinyin === "";
  const meaningEmpty = previousFlashcard.value.meaning === "";

  if (chineseWordEmpty || pinyinEmpty || meaningEmpty) {
    chineseWordIsEmpty.value = chineseWordEmpty;
    pinyinIsEmpty.value = pinyinEmpty;
    meaningIsEmpty.value = meaningEmpty;
    return;
  } else {
    emit(
      "addNewFlashcard",
      previousFlashcard.value.id,
      previousFlashcard.value.chineseWord,
      previousFlashcard.value.pinyin,
      previousFlashcard.value.meaning
    );
    props.popup.addEditFlashcard = false;
    previousFlashcard.value = {
      id: undefined,
      chineseWord: "",
      pinyin: "",
      meaning: "",
    };
    chineseWordIsEmpty.value = false;
    pinyinIsEmpty.value = false;
    meaningIsEmpty.value = false;
  }
};

const isEmpty = (value) => {
  return value === "";
};

const renameFlashcard = () => {
  const chineseWordEmpty = previousFlashcard.value.chineseWord === "";
  const pinyinEmpty = previousFlashcard.value.pinyin === "";
  const meaningEmpty = previousFlashcard.value.meaning === "";

  if (chineseWordEmpty || pinyinEmpty || meaningEmpty) {
    chineseWordIsEmpty.value = chineseWordEmpty;
    pinyinIsEmpty.value = pinyinEmpty;
    meaningIsEmpty.value = meaningEmpty;
    return;
  } else {
    emit(
      "renameFlashcard",
      previousFlashcard.value.chineseWord,
      previousFlashcard.value.pinyin,
      previousFlashcard.value.meaning,
      props.SelectedIndex
    );
    props.popup.addEditFlashcard = false;
    previousFlashcard.value = {
      id: undefined,
      chineseWord: "",
      pinyin: "",
      meaning: "",
    };
    chineseWordIsEmpty.value = false;
    pinyinIsEmpty.value = false;
    meaningIsEmpty.value = false;
  }
};

const addOrEditFlashcard = () => {
  if (previousFlashcard.value.id === undefined) {
    addNewFlashcard();
  } else {
    renameFlashcard();
  }
};

</script>

<template>
  <section
    class="popup-newCollection z-50 fixed top-0 left-0"
    v-show="props.popup.addEditFlashcard"
  >
    <div
      class="bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-screen"
    >
      <div
        class="bg-white rounded-lg xl:scale-100 xl:w-[500px] xl:h-[463px] relative p-6 md:scale-[80%] sm:scale-[90%] mobile:scale-[73%] mobile:w-[500px]"
      >
        <closeIcon
          class="absolute top-3 right-4 cursor-pointer"
          @click="closeButton"
        />
        <div class="flex flex-col items-center justify-center">
          <div class="text-center text-4xl font-mono font-semibold">
            {{ previousFlashcard.id === undefined ? "Add new" : "Edit" }}
            collection
          </div>
            <div class="my-6 flex flex-col items-center justify-center gap-y-7">
              <div class="chinese-word input-box gap-y-1 flex flex-col">
                <div class="font-outfit">Chinese word</div>
                <input
                  type="text"
                  v-model.trim="previousFlashcard.chineseWord"
                  class="border-[1.5px] rounded-md p-2 w-[360px]"
                  :class="{
                    'border-red-600': chineseWordIsEmpty,
                    'focus:border-red-600': chineseWordIsEmpty,
                    'border-black': !chineseWordIsEmpty,
                  }"
                  @input="chineseWordIsEmpty = isEmpty(previousFlashcard.chineseWord)"
                  @keydown.enter="addOrEditFlashcard"
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
                  v-model.trim="previousFlashcard.pinyin"
                  class="border-[1.5px] rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5 border-black"
                  :class="{
                    'border-red-600': pinyinIsEmpty,
                    'focus:border-red-600': pinyinIsEmpty,
                    'border-black': !pinyinIsEmpty,
                  }"
                  @input="pinyinIsEmpty = isEmpty(previousFlashcard.pinyin)"
                  placeholder="Pinyin"
                  @keydown.enter="addOrEditFlashcard"
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
                  v-model.trim="previousFlashcard.meaning"
                  class="border-[1.5px] border-black rounded-md p-2 w-[360px] focus:outline-1 focus:ring-5"
                  :class="{
                    'border-red-600': meaningIsEmpty,
                    'focus:border-red-600': meaningIsEmpty,
                    'border-black': !meaningIsEmpty,
                  }"
                  @input="meaningIsEmpty = isEmpty(previousFlashcard.meaning)"
                  @keydown.enter="addOrEditFlashcard"
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
                  @click="closeButton"
                >
                  CANCEL
                </button>
                <button
                  class="bg-[#4096ff] text-white rounded-md w-20 font-outfit font-medium"
                  @click="addOrEditFlashcard"
                >
                {{ previousFlashcard.id === undefined ? 'ADD' : 'OK' }}
                </button>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
