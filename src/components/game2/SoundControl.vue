<script setup>
const props = defineProps(['soundPath'])

const soundControl = () => {
  const sound = new Audio(props.soundPath)
  sound.play()
}
</script>

<template>
  <div @click="soundControl"><slot></slot></div>
</template>

<style scoped></style>
