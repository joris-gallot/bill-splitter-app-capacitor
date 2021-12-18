<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="text-xl">{{ msg }}</h1>
  <button
    class="bg-blue-600 rounded-lg text-white px-3 py-2"
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
</template>
