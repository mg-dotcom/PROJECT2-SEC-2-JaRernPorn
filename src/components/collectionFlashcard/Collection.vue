<script setup>
import { defineProps, defineEmits, onMounted } from 'vue'

import renameCollection from '../collectionFlashcard/popup/renameCollection.vue'
import optionCollection from '../collectionFlashcard/popup/optionCollection.vue'
// import { getCollections } from '../../libs/flashcard-libs/FetchUtils' //destruct

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  popup: {
    type: Object,
    required: true
  },
  computedCollections: {
    required: true
  },
  closeOption: {
    type: Function,
    required: true
  },
  SelectedIndex: {
    type: Number,
    required: true
  }
})

const showOption = (index, event) => {
  emit('toggle-option-collection', index)
}

const emit = defineEmits([
  'changeCollectionName',
  'deleteCollection',
  'toggle-option-collection'
])

const passDeleteCollection = (index) => {
  emit('deleteCollection', index)
}

const passNewName = (newName, index) => {
  emit('changeCollectionName', newName, index)
}

// onMounted(async () => {
//   await getCollections(import.meta.env.VITE_BASE_URL)
// })
</script>

<template>
  <!-- Each Folder Collection -->
  <div class="relative flex flex-col items-center font-outfit">
    <div
      class="collection hover:shadow-lg rounded-3xl transition-all duration-[270ms]"
    >
      <img
        class="cursor-pointer scale-[105%] sm:scale-[110%] md:scale-[117%] lg:scale-100"
        src="/img/flashcard-pic/collection.svg"
        alt="collection"
      />
      <img
        class="z-40 opacity-70 hover:bg-gray-400 rounded-full w-10 h-10 lg:p-2 md:scale-[60%] md:p-2 lg:scale-[75%] cursor-pointer absolute transition-all duration-[270ms] lg:top-[19px] lg:right-[5px] md:top-[1px] md:right-[-11px] sm:top-[8px] sm:right-[-9px] mobile:scale-[70%] mobile:p-2 mobile:top-[7px] mobile:right-[-5px]"
        src="/img/flashcard-pic/option.svg"
        alt="option"
        @click="showOption(props.index, $event)"
      />
      <div
        class="absolute inset-[16px] flex items-center justify-center overflow-hidden cursor-pointer"
      >
        <div
          class="w-[75%] text-3xl font-medium whitespace-normal break-all overflow-ellipsis z-10 md:text-2xl lg:text-4xl"
        >
          {{ props.computedCollections[props.index].name }}
        </div>
      </div>
    </div>

    <optionCollection
      v-show="props.popup.optionCollection && SelectedIndex === props.index"
      :index="index"
      :popup="popup"
      @deleteCollection="passDeleteCollection"
    ></optionCollection>

    <renameCollection
      v-show="props.popup.renameCollection && SelectedIndex === props.index"
      :index="index"
      :popup="popup"
      :computedCollections="computedCollections"
      :closeOption="closeOption"
      @changeCollectionName="passNewName"
    ></renameCollection>
  </div>
</template>

<style scoped></style>
