<script setup>
import { ref, watchEffect } from 'vue'

const newWord = ref('')
const newMeaning = ref('')

// const { emit } = defineEmits(['addFlashcard']);

const showFlashCard = ref(true)
const showAddCard = ref(false)

function goToAddCard() {
  showAddCard.value = true
  showFlashCard.value = false
}

const flashcards = ref([])

watchEffect(flashcards, () => {
  if (flashcards.value.length > 0) {
    showFlashCard.value = true
    showAddCard.value = false
  }
})
// , { deep: true });
// ตรวจสอบการเปลี่ยนแปลงของ flashcards

const addFlashcard = () => {
  flashcards.value.push({
    id: flashcards.value.length + 1,
    word: newWord.value,
    meaning: newMeaning.value
  })
  clearForm()
}

function clearForm() {
  newWord.value = ''
  newMeaning.value = ''
}

function cancelAddFlashcard() {
  clearForm()
}
</script>

<template>
  <div class="bg-main-bgColor h-screen w-full p-5">
    <section v-if="showFlashCard">
      <div class="flex justify-between py-10 px-10">
        <div class="font-semibold font-outfit text-title">
          <h1><=</h1>
        </div>
        <div class="font-alkatra font-semibold text-title text-3xl">
          <h1>COLLECTION NAME</h1>
        </div>
        <div class="setting flex">
          <img src="/Setting.svg" alt="setting button" class="w-10" />
        </div>
      </div>

      <div class="font-outfit font-medium mx-10">
        <button @click="goToAddCard">Add new +</button>
      </div>

      <div class="px-9 my-2">
        <div class="border border-3 border-gray-300 w-full mb-8"></div>
      </div>

      <div class="cards flex-col justify-center items-center">
        <div class="flex flex-wrap gap-10 justify-center">
          <div v-for="card in flashcards" :key="card.id">
            <div
              class="flex flex-col justify-center h-[200px] w-[400px] rounded-3xl shadow-md bg-white"
            >
              <div class="flex flex-col items-center font-outfit text-lg">
                <!-- แสดงข้อมูลที่ add เพิ่มเข้ามา -->
                <div>{{ card.word }}</div>
                <div>{{ card.meaning }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AddCart -->
    <section v-else-if="showAddCard">
      <div
        class="flex justify-center text-title text-5xl font-outfit font-semibold m-5"
      >
        <h1>Collection Name</h1>
      </div>

      <div class="flex flex-col gap-10 items-center m-10">
        <div class="flex flex-col gap-5 font-Outfit font-medium text-lg">
          <div>
            Chinese word
            <div class="border border-gray-400">
              <input type="text" v-model="newWord" />
            </div>
          </div>
          <div>
            Meaning
            <div class="border border-gray-400">
              <input type="text" v-model="newMeaning" />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-6 justify-center">
          <div
            @click="addFlashcard"
            class="flex justify-center items-center bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white uppercase text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32"
          >
            <button type="submit">ADD</button>
          </div>
          <div
            @click="cancelAddFlashcard"
            class="flex justify-center items-center bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white uppercase text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32"
          >
            <button type="button">CANCEL</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
