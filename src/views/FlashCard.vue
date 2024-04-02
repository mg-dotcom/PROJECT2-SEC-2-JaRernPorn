<script setup>
import { reactive, ref, watch, onMounted } from "vue";
import Card from "../components/Flashcard/Card.vue";
import Header from "../components/Header.vue";
import { useRoute } from "vue-router";
import {
  getItem,
  addItem,
  deleteItem,
  editItem,
} from "../libs/flashcard-libs/FetchFlashcard.js";
import addEditFlashcard from "../components/Flashcard/AddEditFlashcard.vue";
import { FlashcardModal } from "../libs/flashcard-libs/FlashCardModal.js";

const route = useRoute();
const currentCollectionId = ref(route.params.id);
const collectionName = ref(route.params.name);

const showFlashCard = ref(true);

const popup = reactive({
  addEditFlashcard: false,
  optionEditDelete: false,
});

watch(
  () => route.params.name,
  (newName) => {
    collectionName.value = newName;
  }
);

const SelectedIndex = ref(undefined);

const showFlashCardAdd = () => {
  popup.addEditFlashcard = true;
  closeOption();
};

const showRenameFlashcard = (index) => {
  popup.addEditFlashcard = true;
  SelectedIndex.value = index;
  closeOption();
};

const toggleOption = (index) => {
  popup.optionEditDelete = !popup.optionEditDelete;
  SelectedIndex.value = index;
};

const closeOption = () => {
  popup.optionFlashcard = false;
  SelectedIndex.value = undefined;
};

const flashcards = ref(new FlashcardModal());

onMounted(async () => {
  const flashcardData = await getItem(
    import.meta.env.VITE_BASE_URL,
    currentCollectionId.value
  );
  flashcards.value.addAllFlashcards(flashcardData);
});

const handleAddNewFlashcard = async (
  newId,
  newChineseWord,
  newPinyin,
  newMeaning
) => {
  if (newId === undefined) {
    const addedFlashcard = await addItem(
      import.meta.env.VITE_BASE_URL,
      currentCollectionId.value,
      {
        id: Math.floor(Math.random() * 1000) + 1,
        chineseWord: newChineseWord,
        pinyin: newPinyin,
        meaning: newMeaning,
      }
    );

    const lastCardAdded = addedFlashcard.cards[addedFlashcard.cards.length - 1];

    flashcards.value.addFlashcard(
      lastCardAdded.id,
      lastCardAdded.chineseWord,
      lastCardAdded.pinyin,
      lastCardAdded.meaning
    );
  }

  popup.optionFlashcard = false;
};

const handelDeleteFlashcard = async (index) => {
  const statusCode = await deleteItem(
    import.meta.env.VITE_BASE_URL,
    currentCollectionId.value,
    index
  );

  if (statusCode === 200) {
    flashcards.value.removeFlashcard(index);
  }

  popup.optionFlashcard = false;
};

const handelEditFlashcard = async (
  newChineseWord,
  newPinyin,
  newMeaning,
  index
) => {
  const editedFlashcard = await editItem(
    import.meta.env.VITE_BASE_URL,
    currentCollectionId.value,
    {
      chineseWord: newChineseWord,
      pinyin: newPinyin,
      meaning: newMeaning,
    },
    index
  );

  const selectedCard = editedFlashcard.cards[index];

  flashcards.value.editFlashcard(
    selectedCard.chineseWord,
    selectedCard.pinyin,
    selectedCard.meaning,
    index
  );

  popup.renameFlashcard = false;
  popup.optionFlashcard = false;
};

</script>

<template>
  <div class="bg-main-bgColor min-h-screen w-full" @click.self="closeOption">
    <section v-if="showFlashCard" @click.self="closeOption">
      <Header :closeOption="closeOption">
        <template #title> {{ collectionName }} </template>
      </Header>

      <div class="w-8/12 mx-auto flex flex-col" @click.self="closeOption">
        <div
          class="text-start font-outfit text-base font-semibold pb-2"
          @click="closeOption"
        >
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

        <addEditFlashcard
          :popup="popup"
          :SelectedIndex="SelectedIndex"
          :SelectedFlashcard="flashcards.getFlashcards()[SelectedIndex]"
          @addNewFlashcard="handleAddNewFlashcard"
          @renameFlashcard="handelEditFlashcard"
        />

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
            :allFlashcards="flashcards.getFlashcards()"
            @toggle-option-flashcard="toggleOption"
            @deleteFlashcard="handelDeleteFlashcard"
            @showRenameFlashcard="showRenameFlashcard"
          ></Card>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
