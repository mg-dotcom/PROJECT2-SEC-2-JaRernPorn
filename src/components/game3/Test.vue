<script setup>
import { ref } from 'vue'
import data from '../../../data/game3/data.json'
// const music=ref(data.categories[0].units[0].items[0].pronunciation)
const music2 = ref(data.categories[0].units[0].items)
console.log(music2.value);

const optionPlay = ref('')

const audioControl = () => {
  optionPlay.value.play()
}
// console.log(music2.value);

const passingData = (index) => {

}
</script>

<template>
  <div>
    <button @click="audioControl">click</button>
    <!-- {{ music }} -->
    <audio controls class="" ref="optionPlay" >
      <source src="../../assets/pronunciation/apple.mp3" type="audio/mp3" />
      
      <!-- <source :src="music" type="audio/mp3" /> -->
    </audio>
  </div>

  <div class="w-20 bg-lime-600"
   v-for="(item,index) in music2" :key="index"
   @click="passingData()"
  >
   {{ item.meaning }}
  </div>
</template>

<style scoped></style>
