<script setup>
import { defineProps, ref, computed, defineEmits, onMounted } from 'vue'
import newCollection from '../collectionFlashcard/popup/newCollection.vue'
import Collection from '../collectionFlashcard/Collection.vue'
import { CollectionModal } from '../../libs/flashcard-libs/CollectionModal.js'
import {
  getCollectionItem,
  addCollectionItem,
  deleteCollectionItem,
  editCollectionItem
} from '../../libs/flashcard-libs/FetchCollection.js'

const collections = ref(new CollectionModal())

const props = defineProps({
  popup: {
    type: Object,
    required: true
  },
  closeOption: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['clearName', 'toClearName'])

onMounted(async () => {
  const col = await getCollectionItem(import.meta.env.VITE_BASE_URL)
  collections.value.addAllCollection(col)
})

const computedCollections = computed(() => {
  return collections.value.getCollections()
})

const handleEditCollection = async (index, newName, id) => {
  const editedCollection = await editCollectionItem(
    import.meta.env.VITE_BASE_URL,
    id,
    {
      name: newName.trim()
    }
  )

  collections.value.editCollection(editedCollection.name, index)

  props.popup.renameCollection = false
  props.closeOption()
}

const handleDeleteCollection = async (index, id) => {
  const statusCode = await deleteCollectionItem(
    import.meta.env.VITE_BASE_URL,
    id
  )
  if (statusCode === 200) {
    collections.value.removeCollection(index)
  }
  props.closeOption()
}

const handleAddNewCollection = async (name) => {
  const newColName = name.trim()
  //BACKEND add
  const newCollectionName = await addCollectionItem(
    import.meta.env.VITE_BASE_URL,
    {
      name: newColName,
      cards: []
    }
  )

  collections.value.addCollection(
    newCollectionName.id,
    newCollectionName.name,
    newCollectionName.crads
  )
  props.popup.newCollection = false
}

const SelectedIndex = ref(0)

const toggleOptionCollection = (index) => {
  props.popup.optionCollection = !props.popup.optionCollection
  SelectedIndex.value = index
}
</script>

<template>
  <div class="w-8/12 mx-auto flex flex-col">
    <newCollection
      :closeOption="closeOption"
      :popup="popup"
      @addNewCollections="handleAddNewCollection"
    />

    <!-- All Collections -->
    <div
      v-if="computedCollections.length === 0"
      class="flex-grow flex justify-center items-center text-center h-[70vh]"
    >
      <div class="text-gray-300 text-sm">No collection added yet</div>
    </div>

    <div
      v-else-if="computedCollections.length > 0"
      class="grid grid-cols-1 gap-10 px-10 py-7 text-center lg:grid-cols-3 md:grid-cols-3 md:gap-17 sm:grid-cols-2 sm:gap-10"
      @click.self="closeOption"
    >
      <Collection
        v-for="(collection, index) in computedCollections"
        :collectionId="collection.id"
        :key="index"
        :index="index"
        :popup="popup"
        :computedCollections="computedCollections"
        :closeOption="closeOption"
        :SelectedIndex="SelectedIndex"
        @changeCollectionName="handleEditCollection"
        @deleteCollection="handleDeleteCollection"
        @toggle-option-collection="toggleOptionCollection"
      >
      </Collection>
    </div>
  </div>
</template>

<style scoped></style>
../../libs/fetchCollection.js
