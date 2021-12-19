<script setup lang="ts">
import TicketHeader from "@/components/TicketPage/Header.vue";
import TicketReceipt from "@/components/TicketPage/Receipt.vue";
import TicketSplit from "@/components/TicketPage/Split.vue";
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
  <div class="space-y-8">
    <TicketHeader />

    <div class="space-y-6">
      <TicketReceipt :isLoading="isLoading" :users="firstUsers" />
      <TicketSplit :isLoading="isLoading" :users="firstUsers" />
    </div>
  </div>
</template>
