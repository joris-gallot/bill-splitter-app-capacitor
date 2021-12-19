<script lang="ts" setup>
import { useQueryProvider } from "vue-query";
useQueryProvider();
</script>

<template>
  <div class="safe-area">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.safe-area {
  padding-top: max(2rem, env(safe-area-inset-top));
  padding-right: max(1.5rem, env(safe-area-inset-right));
  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
  padding-left: max(1.5rem, env(safe-area-inset-left));
}
</style>
