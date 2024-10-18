<script setup>
import Option from "../components/game3/Option.vue";
import data from "../../../BE/data.json";
import Setting from "../components/Setting.vue";
import Answer_popup from "../components/Answer_popup.vue";
import { computed, ref } from "vue";
import SoundControl from "../components/SoundControl.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const paramCateIndex = route.params.cateIndex - 1;
const paramUnitIndex = route.params.unit - 1;

const currentIndexCate = ref(paramCateIndex);
const currentIndexUnit = ref(paramUnitIndex);

const answer = ref();
const meaning = ref();
const randomQuiz = ref(0);
const showSetting = ref(false);
const userSelected = ref();
const showAudio = ref(false);
const showPopup = ref(false);
const audioOfOption = ref(
  data.categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    randomQuiz.value
  ].pronunciation
);
const setColorOption = ref("");
const isSelected = ref(false);
const answerOfQuiz = ref("");

const currentCategory = computed(() => {
  return data.categories[currentIndexCate.value].name;
});

const countCheck = ref(0);

const currentQuiz = computed(() => {
  if (
    countCheck.value ===
    data.categories[currentIndexCate.value].units[currentIndexUnit.value].items
      .length
  ) {
    setTimeout(passToGame4, 2000);
  } else {
    answerOfQuiz.value =
      data.categories[currentIndexCate.value].units[
        currentIndexUnit.value
      ].items[randomQuiz.value].word;
    meaning.value =
      data.categories[currentIndexCate.value].units[
        currentIndexUnit.value
      ].items[randomQuiz.value].meaning;
  }
  return data.categories[currentIndexCate.value].units[currentIndexUnit.value]
    .items[randomQuiz.value].src;
});

//Shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateOption = computed(() => {
  const options =
    data.categories[currentIndexCate.value].units[currentIndexUnit.value].items;
  return shuffle([...options]);
});

const checkBtn = (selectedOption) => {
  userSelected.value = selectedOption.word;
  showAudio.value = true;
  audioOfOption.value = selectedOption.pronunciation;
  isSelected.value = true;
};

const toggleSetting = () => {
  showSetting.value = !showSetting.value;
};

const closePopup = () => {
  showPopup.value = !showPopup.value;
  setColorOption.value = "";
  countCheck.value++;
  isSelected.value = false;
  randomQuiz.value++;
};

const passToGame4 = () => {
  router.push({
    name: "Game4",
    params: {
      cateIndex: route.params.cateIndex,
      unit: route.params.unit,
    },
  });
};

const checkAnswer = () => {
  answer.value =
    data.categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      randomQuiz.value
    ].word;

  if (userSelected.value === answer.value) {
    countCheck.value++;
    setColorOption.value = answer.value;
    userSelected.value = "";
    setTimeout(() => {
      answer.value = "";
      setColorOption.value = "";
      isSelected.value = false;
      randomQuiz.value++;
    }, 2000);
  } else {
    answer.value = "";
    userSelected.value = "";
    showPopup.value = true;
  }
};
</script>

<template>
  <div class="font-outfit bg-main-bgColor min-h-screen">
    <header class="py-8 px-10 flex-grow-0">
      <div class="header flex justify-center items-center">
        <div
          class="categories text-title font-semibold font-outfit text-4xl flex items-center justify-start w-full"
        >
          Category: {{ currentCategory }}
        </div>
      </div>
      <div class="setting">
        <img
          src="/settingBtn/menu.svg"
          alt="setting button"
          class="w-8 absolute right-10 top-10 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          @click="toggleSetting"
        />
      </div>
    </header>
    <div></div>
    <div class="flex justify-center">
      <div class="quiz flex flex-col items-center">
        <div class="text-title text-4xl font-semibold py-2">
          Select the correct meaning.
        </div>

        <div
          class="pic bg-white flex flex-col items-center rounded-lg drop-shadow-lg w-32 py-5 m-5"
        >
          <img :src="currentQuiz" class="w-20" />
          <h3>{{ meaning }}</h3>
        </div>

        <div class="options pt-5 w-3/4">
          <SoundControl :soundPath="audioOfOption">
            <Option
              :options="generateOption"
              :correctOption="answer"
              :isSelected="isSelected"
              :userSelected="userSelected"
              @optionClicked="checkBtn"
            />
          </SoundControl>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="bg-title text-white text-2xl rounded-xl px-4 py-2 mt-5 hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        @click="checkAnswer"
      >
        Check
      </button>
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
      @goCategories="router.push({ name: 'Categories' })"
    />
  </div>
  <div class="" v-show="showPopup">
    <Answer_popup :answer="answerOfQuiz" @closePopup="closePopup" />
  </div>
</template>

<style scoped></style>
