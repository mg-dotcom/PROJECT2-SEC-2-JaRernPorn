<script setup>
import { ref } from 'vue'

const props = defineProps({
  collectionName: String,
  deleteCollection: Function,
  collectionIndex: Number,
  saveEditedCollectionName: Function
})

const editBox = ref(false)
const editedCollectionName = ref('')
const editCollection = () => {
  editBox.value = !editBox.value
  collectionName = editedCollectionName.value
}

const saveEditedCollection = () => {
  props.saveEditedCollectionName(editedCollectionName.value, props.collectionIndex)
  editBox.value = false
}

</script>

<template>
  <div class="bg-red-400">
    <span v-if="!editBox">{{ props.collectionName }}</span>
    <input v-else type="text" v-model="editedCollectionName" class="border border-black" />
    <button class="underline bg-blue-300" @click="props.deleteCollection(props.collectionIndex)">
      Delete
    </button>
    <button class="underline bg-pink-300" @click="editCollection">
      {{ editBox ? 'Cancel' : 'Edit' }}
    </button>
    <button v-if="editBox" class="underline bg-green-300" @click="saveEditedCollection()">
      Save
    </button>
  </div>
</template>

<style scoped></style>
