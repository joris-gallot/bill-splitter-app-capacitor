<script lang="ts" setup>
import { useQuery } from "vue-query";

const fetchMe = fetch("http://localhost:3004/me").then((res) => res.json());
const { data: me, isLoading } = useQuery("me", () => fetchMe);
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-col text-beige-500 text-3xl">
      <span>Orix</span>
      <span class="font-bold">Bill Splitter</span>
    </div>

    <div
      class="
        rounded-3xl
        bg-purple-600
        text-white
        border-2 border-purple-100 border-opacity-20
        shadow-lg
        h-20
        w-20
        text-center text-sm
        font-semibold
        flex flex-col
        justify-between
        overflow-hidden
      "
    >
      <p v-if="isLoading" class="h-full flex items-center justify-center">
        Loading...
      </p>

      <template v-else>
        <img :src="me.avatar" alt="avatar" class="h-12" />
        <div class="h-7 flex items-center justify-center w-full bg-purple-500">
          {{ me.name }}
        </div>
      </template>
    </div>
  </div>
</template>
