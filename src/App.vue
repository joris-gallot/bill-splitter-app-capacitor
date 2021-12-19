<script lang="ts" setup>
import { useQueryProvider } from "vue-query";
import { useRoute } from "vue-router";

useQueryProvider();
const route = useRoute();
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="route.name === 'Home' ? 'slide-left' : 'slide-right'">
      <component class="safe-area w-full" :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.safe-area {
  padding-top: max(2rem, env(safe-area-inset-top));
  padding-right: max(1.5rem, env(safe-area-inset-right));
  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
  padding-left: max(1.5rem, env(safe-area-inset-left));
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-out;
}

.slide-right-enter-from {
  transform: translateX(100%);
  position: absolute;
}

.slide-right-leave-to {
  /* left: -100%; */
  transform: translateX(-100%);
  position: absolute;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.75s ease-out;
}

.slide-left-enter-from {
  transform: translateX(-100%);
  position: absolute;
}

.slide-left-leave-to {
  transform: translateX(100%);
  position: absolute;
}
</style>
