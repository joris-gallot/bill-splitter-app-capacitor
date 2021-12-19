<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  bgColor: {
    type: String,
    default: "bg-blue-400",
  },
  width: {
    type: Number,
    default: 30,
  },
});
</script>

<template>
  <div
    class="
      flex
      items-center
      justify-evenly
      rounded-full
      h-6
      relative
      bg-purple-600
    "
  >
    <div
      :style="[`width: ${width + 20}px`, `background-color: ${bgColor}`]"
      class="absolute left-0 top-0 bottom-0 rounded-full"
    ></div>
    <div
      :style="`left: ${width}px`"
      class="
        absolute
        left-10
        rounded-full
        shadow-lg
        cursor-pointer
        h-8
        w-8
        z-20
        border-2 border-white
        bg-beige-500
      "
    ></div>
    <template v-for="i in 5" :key="i">
      <div class="h-2 w-2 bg-white rounded-full z-10"></div>
      <div class="h-0.5 w-0.5 bg-white rounded-full z-10"></div>
      <div class="h-0.5 w-0.5 bg-white rounded-full z-10"></div>
    </template>
  </div>
</template>
