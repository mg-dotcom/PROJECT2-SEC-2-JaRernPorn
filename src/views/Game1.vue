<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute(); // using useRoute() hook to access the current route object
const router = useRouter();
import { categories } from "../../data/data.json";
import { computed, ref } from "vue";
import Card from "../components/game1/Card.vue";
import CheckButton from "../components/game1/CheckButton.vue";
import Setting from "../components/Setting.vue";

const paramCateIndex = route.params.cateIndex - 1;
const paramUnitIndex = route.params.unit - 1;

const currentIndexCate = ref(paramCateIndex);
const currentIndexUnit = ref(paramUnitIndex);
const currentIndexQuestion = ref(0);

const showColor = ref(false);
const checkStatus = ref(false);

const correctAnswer = ref(
  categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexQuestion.value
  ]
);

const isCorrect = ref(false);
const isWrong = ref(false);
const userAnswer = ref([]);
const userAnswerId = ref(null);

//Setting
const showSetting = ref(false);
const toggleSetting = () => {
  showSetting.value = !showSetting.value;
};

//Category
const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name;
});

//Question
const currentQuestion = computed(() => {
  return categories[currentIndexCate.value].units[currentIndexUnit.value].items[
    currentIndexQuestion.value
  ].meaning;
});

//Shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Chioces
const threeChoices = computed(() => {
  const choices =
    categories[currentIndexCate.value].units[currentIndexUnit.value].items;
  return shuffle([...choices]);
});

//CollectAnswer
const selectedAnswer = (item) => {
  userAnswer.value = [];
  userAnswer.value.push(item);
};

// Pass to game 2
const correctAnswers = ref([]);

const passToGame2 = () => {
  router.push({
    name: "Game2",
    params: {
      cateIndex: route.params.cateIndex,
      unit: route.params.unit,
    },
  });
};

//CheckAnswer
const checkAnswer = (userAns) => {
  checkStatus.value = true;

  correctAnswer.value =
    categories[currentIndexCate.value].units[currentIndexUnit.value].items[
      currentIndexQuestion.value
    ];

  if (userAns[0].id === correctAnswer.value.id) {
    // userAnswerId.value = userAnswer[0].id
    console.log("Correct!");
    isCorrect.value = true;

    setTimeout(() => {
      showColor.value = true;
      setTimeout(() => {
        showColor.value = false;
        isCorrect.value = false;
        currentIndexQuestion.value++; // 3
        // loop 3 questions
        if (currentIndexQuestion.value > 2) {
          currentIndexQuestion.value = 0;
          passToGame2();
        }
      }, 1500);
    }, 0);
  } else {
    console.log("Wrong!");
    userAnswerId.value = userAns[0].id;
    isWrong.value = true;
    isCorrect.value = true;
    setTimeout(() => {
      showColor.value = true;
      setTimeout(() => {
        showColor.value = false;
        isWrong.value = false;
        isCorrect.value = false;
        currentIndexQuestion.value++;
        if (currentIndexQuestion.value > 2) {
          currentIndexQuestion.value = 0;
          passToGame2();
        }
      }, 1500);
    }, 0);
  }

  userAns.splice(0, 1);
  checkStatus.value = false;

  console.log(currentIndexQuestion.value);
};
</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full flex flex-col">
    <div class="">
      <header class="py-8 px-10 flex-grow-0">
        <!-- Back to home Button -->
        <div class="header flex justify-center items-center">
          <div
            class="categories text-title font-semibold font-outfit text-4xl flex items-center justify-start w-full"
          >
            Category: {{ currentCategory }}
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

      <div class="">
        <div class="flex justify-center scale-100">
          <h2 class="text-title font-outfit font-semibold text-4xl">
            Which one of these is {{ currentQuestion }}?
          </h2>
        </div>

        <!-- Setting Part -->
        <div class="absolute left-0 right-0 top-1/3" v-show="showSetting">
          <Setting
            @closeSetting="toggleSetting"
            @restartGame=""
            @resumeGame=""
            @goBackHome=""
          />
        </div>

        <div class="scale-75">
          <Card
            :choices="threeChoices"
            :showColor="showColor"
            :isCorrect="isCorrect"
            :isWrong="isWrong"
            :userAnswer="userAnswer"
            :correctAnswer="correctAnswer"
            :userAnswerId="userAnswerId"
            :checkStatus="checkStatus"
            @selected="selectedAnswer"
          ></Card>
          <div class="flex justify-end absolute top-[420px] right-8">
            <CheckButton
              @click="checkAnswer(userAnswer)"
              :disabled="userAnswer.length === 0 || checkStatus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
