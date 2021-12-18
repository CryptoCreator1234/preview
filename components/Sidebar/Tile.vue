<template>
  <NuxtLink :to="to" class="tile group transition">
    <div
      class="bar group-hover:opacity-100 group-focus:opacity-100 transition"
    ></div>
    <i :class="`${icon} icon transition`"></i>
    {{ title }}</NuxtLink
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      default: '/',
    },
    icon: {
      type: String,
      default: 'bx bx-badge',
    },
    title: {
      type: String,
      default: 'Bond',
    },
  },
})
</script>

<style lang="scss">
.tile {
  @apply h-12 w-full flex items-center text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-none;

  .bar {
    @apply h-8 w-1 rounded-r-lg bg-gray-800 opacity-0;
  }

  .icon {
    @apply flex items-center justify-center h-10 w-10 rounded-full mx-6;
  }
}

.tile.nuxt-link-exact-active {
  @apply h-12 w-full flex items-center text-gray-800 font-bold;
  .bar {
    @apply h-8 w-1 rounded-r-lg bg-gray-800 opacity-100;
  }

  .icon {
    @apply flex items-center justify-center h-10 w-10 bg-gray-800 text-gray-100 rounded-full mx-6;
  }
}
</style>
