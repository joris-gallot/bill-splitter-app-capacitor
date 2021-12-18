<script setup lang="ts">
import HomeHeader from "@/components/HomePage/Header.vue";
import HomePreviousSplit from "@/components/HomePage/PreviousSplit.vue";
import HomeTotalBill from "@/components/HomePage/TotalBill.vue";
</script>

<template>
  <div class="space-y-8">
    <HomeHeader />

    <div class="space-y-6">
      <HomeTotalBill />
      <HomePreviousSplit />
    </div>
  </div>
</template>
