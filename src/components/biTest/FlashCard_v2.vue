<script setup>
import { ref } from 'vue';
import CollectionDisplay2 from './CollectionDisplay2.vue';

const collectionName=ref('')
const collections=ref([])
const createCollection=()=>{
    collections.value.push(collectionName.value)
    collectionName.value=''
}


</script>
 
<template>
<div>
    <h1>FlashCard</h1>
    Add new Collection :
    <input type="text" v-model="collectionName" class="border border-black">
    <button @click="createCollection()">Create</button>
    <!-- display collection -->
    <div v-for="(collection,index) in collections" :key="index">
        <CollectionDisplay2 :collectionName="collection"></CollectionDisplay2>
    </div>
    

</div>
</template>
 
<style scoped>

</style>