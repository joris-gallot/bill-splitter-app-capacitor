<template>
  <div class="flex items-center justify-between">
    <router-link
      :to="{ name: 'Home' }"
      class="
        rounded-2xl
        bg-purple-600
        shadow
        h-16
        w-16
        flex
        items-center
        justify-center
      "
    >
      <FontAwesomeIcon icon="chevron-left" size="lg" class="text-beige-500" />
    </router-link>

    <div class="flex items-center text-beige-500 space-x-6">
      <span class="text-3xl font-medium">Split Now</span>
      <FontAwesomeIcon icon="ellipsis-v" size="lg" class="text-beige-500" />
    </div>
  </div>
</template>
