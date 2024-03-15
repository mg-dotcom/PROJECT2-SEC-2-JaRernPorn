<script setup>
import { defineProps,ref } from 'vue'
const props = defineProps({
  source: String
})
console.log('Hi');
console.log(props.source);
const optionPlay = ref('')
const audioControl = () => {
  if (props.source.trim().length <= 0) {
    console.log('no audio')
  } else {
    optionPlay.value.play()
  }
  console.log('audio')
  optionPlay.value.play()
}
</script>

<template>
  <audio controls class="" ref="optionPlay" @click="audioControl">
    <!-- <source src="../../assets/pronunciation/apple.mp3" type="audio/mp3" /> -->
    <source :src="props.source" type="audio/mp3" />
  </audio>
</template>

<style scoped></style>
