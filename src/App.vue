<script lang="ts" setup>
import { useQueryProvider } from "vue-query";
useQueryProvider();
</script>

<template>
  <div class="pt-16 px-6">
    <router-view></router-view>
  </div>
</template>
