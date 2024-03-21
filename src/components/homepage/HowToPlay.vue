<script setup>
const emits = defineEmits(['howToPlay', 'closeHowtoplay'])
</script>

<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div
      @click="$emit('howToPlay', true)"
      class="grid grid-cols-1 bg-white w-full max-w-md max-h-96 overflow-y-auto rounded-xl p-5 shadow-md"
    >
      <div @click="$emit('closeHowtoplay', false)" class="flex justify-end">
        <img src="/close.svg" alt="close" class="w-3 cursor-pointer" />
      </div>
      <div
        class="text-4xl font-alkatra text-title font-semibold flex justify-center uppercase"
      >
        How To Play
      </div>
      <div class="flex flex-col gap-4 py-3">
        <div class="text-black font-outfit">
          1. Select the category.
          <div class="py-2">
            <img src="/homePage-pic/howtoplay-1.svg" alt="howtoplay-1" />
          </div>
        </div>
        <div class="text-black font-outfit">
          2. Select the unit.
          <div class="py-2">
            <img src="/homePage-pic/howtoplay-2.svg" alt="howtoplay-2" />
          </div>
        </div>
        <div class="text-black font-outfit">
          3. To play the game, select the correct answer to the following
          question. If you selected the wrong option, the answer will appear in
          the example below.
          <div class="py-2">
            <img
              src="/homePage-pic/howtoplay-3.svg"
              alt="howtoplay-2"
              class="w-96"
            />
          </div>
        </div>
        <div class="text-black font-outfit">
          4. Review the vocabulary you learned while playing.
          <div class="py-2">
            <img
              src="/homePage-pic/howtoplay-4.svg"
              alt="howtoplay-2"
              class="w-96"
            />
          </div>
        </div>
      </div>

      <div
        class="text-4xl font-alkatra text-title font-semibold flex justify-center uppercase py-4"
      >
        Flashcard
      </div>
      <div class="flex flex-col gap-4 py-3">
        <div class="text-black font-outfit">
          1. Create a collection of your vocabulary.
          <div class="py-2">
            <img src="/homePage-pic/flashcard-1.svg" alt="flashcard-1" />
          </div>
        </div>
        <div class="text-black font-outfit">
          2. Then, add flashcards to your collection.
          <div class="py-2">
            <img src="/homePage-pic/flashcard-2.svg" alt="flashcard-2" />
          </div>
        </div>
        <div class="text-black font-outfit">
          3. Click on the flashcard to see the word's definition.
          <div class="py-2">
            <img src="/homePage-pic/flashcard-3.svg" alt="flashcard-3" />
          </div>
        </div>
        <div class="text-black font-outfit">
          4. You can also create, update, and delete both collections and
          flashcards.
          <div class="py-2">
            <img src="/homePage-pic/flashcard-4.svg" alt="flashcard-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
