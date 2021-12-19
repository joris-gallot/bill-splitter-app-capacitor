<script lang="ts" setup>
import { computed } from "vue";
import { useQuery } from "vue-query";

const fetchSplitWith = fetch("http://localhost:3004/split-with").then((res) =>
  res.json()
);
const { data: users, isLoading } = useQuery("split-with", () => fetchSplitWith);

const firstUsers = computed(() => {
  if (!isLoading.value && users.value && users.value.length) {
    return users.value.length > 3 ? users.value.slice(0, 3) : users.value;
  }

  return [];
});
</script>

<template>
  <div class="bg-beige-500 rounded-2xl text-purple-600">
    <div
      class="
        border-b-2 border-purple-500 border-dashed
        py-3
        flex
        items-center
        justify-center
      "
    >
      <button
        class="
          bg-purple-600
          text-white
          font-medium
          px-6
          py-1.5
          rounded-lg
          shadow-lg
          text-sm
        "
      >
        Receipt
      </button>
    </div>

    <div class="p-5 space-y-3">
      <div class="flex items-center space-x-12">
        <div class="flex flex-col space-y-1">
          <span class="text-sm">Title</span>
          <span class="text-xl font-bold">Team Dinner</span>
        </div>
        <div class="flex flex-col space-y-1">
          <span class="text-sm">Total bill</span>
          <span class="text-xl font-bold">$750.86</span>
        </div>
      </div>

      <div
        class="
          bg-purple-500
          text-white
          rounded-2xl
          text-center
          flex flex-col
          items-center
          justify-center
          p-3
          space-y-2
        "
      >
        <p v-if="isLoading">Loading...</p>
        <div v-else class="flex items-center -space-x-3">
          <img
            v-for="(user, i) in firstUsers"
            :key="i"
            :src="user.avatar"
            class="rounded-full w-10 h-10 border-2 border-purple-500 bg-white"
            :class="{ 'z-10': i === 1 }"
          />
        </div>
        <span class="font-semibold">Splitting with</span>
      </div>
    </div>
  </div>
</template>
