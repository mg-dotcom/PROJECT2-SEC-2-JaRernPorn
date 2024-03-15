<script setup>
const props = defineProps({
  answer:String
})
const emits=defineEmits(['closePopup'])
console.log(props.answer);
</script>

<template>
  <section
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
  >
    <div class="w-full h-full flex justify-center items-center">
      <img
        src="/public/Frame.png"
        alt="Frame chinese theme"
        class="mx-auto mobile:w-96 lg:w-3/5 xl:w-6/12"
      />
      <div
        class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex-col space-y-14"
      >
        <div
          class="capitalize text-brownColor text-xl font-alkatra font-semibold tracking-wide relative right-7 top-8 sm:right-[50px] sm:text-4xl md:text-5xl lg:text-6xl lg:right-[60px] mobile:text-[25px]"
        >
          The answer is<br />
          <div
            class="text-green-700 font-NotoSansSC font-medium lowercase text-sm relative sm:text-2xl md:text-4xl mobile:text-[20px]"
          >
            {{ props.answer }}
          </div>
        </div>
        <button
          class="text-sm text-brownColor font-semibold font-alkatra tracking-wider relative right-7 bottom-3 hover:text-answer-fontColor hove:transition duration-150 sm:right-[50px] sm:top-[18px] sm:text-2xl md:text-3xl lg:right-[60px] mobile:text-[20px]"
          @click="$emit('closePopup')"
        >
          NEXT
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
