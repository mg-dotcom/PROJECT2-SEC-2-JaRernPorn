<script setup>
import { ref, computed, defineProps } from "vue";
import data from "../../data/data.json";
import Setting from "../components/Setting.vue";
import Answer_popup from "../components/game2/Answer_popup.vue";
import SoundControl from "../components/SoundControl.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const answer = ref("");
const options = ref([]);
const currentIndex = ref(0); //คำถามปัจจุบัน
const showSetting = ref(false);
const showPopup = ref(false);
const checkStatus = ref(false);

const paramCateIndex = route.params.cateIndex - 1;
const paramUnitIndex = route.params.unit - 1;

const unitIndex = ref(paramUnitIndex);
const categoryIndex = ref(paramCateIndex);
//const items = category.categories[0].units[0].items

const currentCategory = data.categories[paramCateIndex];
const items = currentCategory.units[paramUnitIndex].items;

const audioOfOption = computed(() => {
  return data.categories[categoryIndex.value].units[unitIndex.value].items[
    currentIndex.value
  ].pronunciation;
});

const countCheck = ref(0);

const currentQuiz = computed(() => {
  if (countCheck.value === items.length) {
    currentIndex.value = 0;
    passToGame3();
  }

  answer.value = items[currentIndex.value].meaning; // กำหนดคำตอบจากข้อปัจจุบัน
  options.value = generateOptions(answer.value);

  return items[currentIndex.value].word; // แสดงคำปัจจุบันที่กำลังเล่น
});

const generateOptions = (answer) => {
  const optionsArray = [];
  optionsArray.push({ id: 1, value: answer });
  while (optionsArray.length < 3) {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomWord = items[randomIndex].meaning;
    if (!optionsArray.some((option) => option.value === randomWord)) {
      optionsArray.push({ id: optionsArray.length + 1, value: randomWord });
    }
  }
  return shuffle(optionsArray);
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const isSelected = ref(false);
const colorOption = ref(false);

const userSelected = ref("");
const userAnswer = (userSelectedOption) => {
  userSelected.value = userSelectedOption;
  isSelected.value = true;
};

const passToGame3 = () => {
  router.push({
    name: "Game3",
    params: {
      cateIndex: route.params.cateIndex,
      unit: route.params.unit,
    },
  });
};

const checkAnswer = () => {
  checkStatus.value = true;

  if (userSelected.value === answer.value) {
    colorOption.value = true;
    isSelected.value = false;
    setTimeout(() => {
      countCheck.value++;
      currentIndex.value++;
      colorOption.value = false;
      isSelected.value = false;
      answer.value = "";
    }, 2000);
  } else {
    showPopup.value = true;
    isSelected.value = false;
    colorOption.value = false;
  }
};

const closePopup = () => {
  showPopup.value = !showPopup.value;
  currentIndex.value++;
  countCheck.value++;
};

const toggleSetting = () => {
  showSetting.value = !showSetting.value;
};
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full">
    <div class="font-outfit">
      <header class="py-8 px-10 flex-grow-0">
        <!-- Back to home Button -->
        <div class="header flex justify-center items-center">
          <div
            class="categories text-title font-semibold font-outfit text-4xl flex items-center justify-start w-full"
          >
            Category: {{ currentCategory.name }}
          </div>
        </div>
        <div class="setting">
          <img
            src="/settingBtn/setting.svg"
            alt="setting button"
            class="w-10 absolute right-10 top-10 hover:scale-105 transition-all duration-300 ease-in-out"
            @click="toggleSetting"
          />
        </div>
      </header>

      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col items-center">
          <div class="text-title text-4xl font-semibold py-2">
            Select this in English.
          </div>

          <div
            class="flex justify-between items-center bg-white rounded-lg drop-shadow-lg w-80 py-5 px-5 scale-90"
          >
            <div class="flex flex-col text-2xl text-title font-semibold mx-3">
              <h3>{{ currentQuiz }}</h3>
            </div>
            <div
              class="flex flex-col hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <SoundControl :soundPath="audioOfOption">
                <img src="/SoundButton.svg" alt="SoundButton" />
              </SoundControl>
            </div>
          </div>

          <div class="py-5 w-3/4">
            <div class="grid grid-cols-1 gap-y-5 justify-center scale-90">
              <button
                v-for="(option, index) in options"
                :key="index"
                @click="userAnswer(option.value)"
                class="flex justify-center items-center bg-title text-white font-semiboldl text-2xl h-14 sm:h-20 rounded-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                :class="{
                  'bg-green-500': option.value === answer && colorOption,
                  'bg-blue-500': option.value === userSelected && isSelected,
                }"
              >
                {{ option.value }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="bg-title text-white p-2 rounded-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          @click="checkAnswer"
        >
          Check
        </button>
      </div>
    </div>
  </div>

  <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
    <Setting
      @closeSetting="toggleSetting"
      @restartGame="
          router.push({
            name: 'Game1',
            params: {
              cateIndex: route.params.cateIndex,
              unit: route.params.unit,
            },
          })
        "
      @resumeGame="toggleSetting"
      @goBackHome="router.push('/')"
    />
  </div>

  <div class="wrongAnswer" v-show="showPopup">
    <Answer_popup :answer="answer" @closePopup="closePopup" />
  </div>
</template>

<style scoped></style>
