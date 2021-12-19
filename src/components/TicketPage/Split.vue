<script lang="ts" setup>
import Slider from "@/components/common/Slider.vue";
import { User } from "@/types/User";
import { defineProps, PropType } from "vue";

defineProps({
  users: {
    type: Object as PropType<User[]>,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-8">
    <div v-for="(user, i) in users" :key="i" class="flex flex-col space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img
            :src="user.avatar"
            alt="avatar"
            class="bg-white rounded-full h-10 w-10"
          />
          <span class="font-semibold">{{ user.name }}</span>
        </div>
        <span class="font-bold">$200.86</span>
      </div>
      <Slider :width="(i + 1) * 45" :bgColor="user.color" />
    </div>
  </div>

  <div class="bg-purple-600 rounded-full w-full p-3">
    <button
      class="
        bg-purple-500
        rounded-full
        px-6
        py-4
        text-beige-500
        shadow-lg
        space-x-4
        flex
        items-center
      "
    >
      <span class="font-bold text-sm">Confirm Split</span>
      <FontAwesomeIcon size="lg" icon="long-arrow-alt-right" />
    </button>
  </div>
</template>
