<script lang="ts" setup>
import { useQuery } from "vue-query";

const fetchSplitWith = fetch("http://localhost:3004/split-with").then((res) =>
  res.json()
);
const { data: users, isLoading } = useQuery("split-with", () => fetchSplitWith);
</script>

<template>
  <div
    class="
      rounded-3xl
      bg-beige-500
      p-6
      text-purple-500
      flex
      items-start
      justify-between
      gap-14
      shadow-xl
    "
  >
    <div class="flex flex-col justify-between space-y-6">
      <div class="flex flex-col space-y-1">
        <span class="font-medium">Total bill</span>
        <span class="text-3xl font-bold">$750.86</span>
      </div>

      <router-link
        class="
          shadow-xl
          rounded-xl
          px-5
          font-semibold
          py-4
          bg-purple-500
          text-white
        "
        :to="{ name: 'Ticket' }"
      >
        Split now
      </router-link>
    </div>

    <div class="flex flex-col space-y-3">
      <span class="font-medium">Split with</span>

      <div v-if="isLoading">Loading...</div>

      <div v-else class="flex flex-wrap gap-1.5">
        <img
          v-for="(user, i) in users"
          :key="i"
          alt="avatar-user"
          :src="user.avatar"
          class="rounded-full border-4 border-white bg-white h-10 w-10"
        />
      </div>
    </div>
  </div>
</template>
