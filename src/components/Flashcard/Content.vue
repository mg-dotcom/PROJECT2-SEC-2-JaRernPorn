<script setup>
import { defineProps, ref, onMounted } from 'vue'
import newFlashcard from './popup/newFlashcard.vue'
import Card from './Card.vue'
import {
  getItem,
  addItem,
  deleteItem,
  editItem
} from '../../libs/flashcard-libs/FetchFlashcard.js'
import { FlashcardModal } from '../../libs/flashcard-libs/FlashCardModal'

const props = defineProps({
  popup: {
    type: Object,
    required: true
  },
  closeOption: {
    type: Function,
    required: true
  },
  currentCollectionId: {
    type: String,
    required: true
  }
})

// const flashcards = ref([]);

const flashcards = ref(new FlashcardModal())

onMounted(async () => {
  const flashcardsData = await getItem(
    import.meta.env.VITE_BASE_URL,
    props.currentCollectionId
  )

  flashcards.value.addAllFlashcards(flashcardsData)
})

const SelectedIndex = ref(0)

const toggleOption = (index) => {
  props.popup.optionFlashcard = !props.popup.optionFlashcard
  SelectedIndex.value = index
}

const showRenameFlashcard = (index) => {
  props.popup.renameFlashcard = true
  SelectedIndex.value = index
}

const handleAddNewFlashcard = async (
  newId,
  newChineseWord,
  newPinyin,
  newMeaning
) => {
  if (newId === undefined) {
    const addedFlashcard = await addItem(
      import.meta.env.VITE_BASE_URL,
      props.currentCollectionId,
      {
        id: flashcards.value.getFlashcards().length + 1,
        chineseWord: newChineseWord,
        pinyin: newPinyin,
        meaning: newMeaning
      }
    )

    const lastCardAdded = addedFlashcard.cards[addedFlashcard.cards.length - 1]

    flashcards.value.addFlashcard(
      lastCardAdded.id,
      lastCardAdded.chineseWord,
      lastCardAdded.pinyin,
      lastCardAdded.meaning
    )
  }

  props.popup.optionFlashcard = false
}

const handelDeleteFlashcard = async (index) => {
  const statusCode = await deleteItem(
    import.meta.env.VITE_BASE_URL,
    props.currentCollectionId,
    index
  )

  if (statusCode === 200) {
    flashcards.value.removeFlashcard(index)
  }

  props.popup.optionFlashcard = false
}

const handelEditFlashcard = async (
  newChineseWord,
  newPinyin,
  newMeaning,
  index
) => {
  console.log(newChineseWord, newPinyin, newMeaning, index)

  const editedFlashcard = await editItem(
    import.meta.env.VITE_BASE_URL,
    props.currentCollectionId,
    {
      chineseWord: newChineseWord,
      pinyin: newPinyin,
      meaning: newMeaning
    },
    index
  )

  const selectedCard = editedFlashcard.cards[index]

  flashcards.value.editFlashcard(
    selectedCard.chineseWord,
    selectedCard.pinyin,
    selectedCard.meaning,
    index
  )

  props.popup.renameFlashcard = false
  props.popup.optionFlashcard = false
}
</script>

<template>
  <div class="w-8/12 mx-auto flex flex-col" @click.self="closeOption">
    <newFlashcard
      :popup="popup"
      :closeOption="closeOption"
      @addNewFlashcard="handleAddNewFlashcard"
    ></newFlashcard>

    <div
      v-if="flashcards.getFlashcards().length === 0"
      class="flex-grow flex justify-center items-center text-center h-[70vh]"
    >
      <div class="text-gray-300 text-sm">No flashcard added yet</div>
    </div>

    <!-- All Flashcard -->
    <div
      v-else-if="flashcards.getFlashcards().length > 0"
      class="grid grid-cols-1 px-10 py-7 text-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-17 sm:grid-cols-2 sm:gap-10"
      @click.self="closeOption"
    >
      <Card
        v-for="(card, index) in flashcards.getFlashcards()"
        :card="card"
        :index="index"
        :key="index"
        :popup="popup"
        :SelectedIndex="SelectedIndex"
        :computedFlashcards="flashcards.getFlashcards()"
        @toggle-option-flashcard="toggleOption"
        @deleteFlashcard="handelDeleteFlashcard"
        @showRenameFlashcard="showRenameFlashcard"
        @renameFlashcard="handelEditFlashcard"
      ></Card>
    </div>
  </div>
</template>

<style scoped></style>
../../libs/flashcard-libs/FlashcardManagement.js../../libs/flashcard-libs/fetchFlashcard.js
../../libs/flashcard-libs/FlashcardModal.js
