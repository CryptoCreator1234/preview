<template>
  <header class="bg-navbar-white h-16 w-full fixed shadow-navbar z-20">
    <div
      class="flex justify-between items-center h-full container px-4 mx-auto realtive"
    >
      <div class="flex justify-start flex-1">
        <h1 class="text-2xl">Maze</h1>
      </div>
      <div
        v-if="dropdown"
        class="absolute w-screen flex justify-center z-10"
        style="left: 0; top: 70px"
      >
        <div
          class="bg-white shadow-lg rounded-md w-full mx-4 p-4 divide-y flex flex-col max-h-96 overflow-y-scroll"
        >
          <NuxtLink
            to="/documentation"
            class="hover:text-greek-green focus:text-greek-green transition py-2 select-none"
          >
            Documentation
          </NuxtLink>
          <div class="py-2">
            <h2>Learn</h2>
            <div class="flex flex-col mt-2">
              <h2 class="mx-1 text-gray-500">How to use app ?</h2>
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-book-open mr-2"></i> Documentation</NuxtLink
              >
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxs-videos mr-2"></i> Videos</NuxtLink
              >
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-transfer-alt mr-2"></i> Buy</NuxtLink
              >
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-coin-stack mr-2"></i> Staking</NuxtLink
              >
              <h2 class="mx-1 text-gray-500 mt-2">How it work ?</h2>
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-book-open mr-2"></i> Documentation</NuxtLink
              >
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxs-videos mr-2"></i> Videos</NuxtLink
              >
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-line-chart mr-2"></i> Earn</NuxtLink
              >
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-lock-alt mr-2"></i> Vesting</NuxtLink
              >
              <NuxtLink
                to="/"
                class="p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxs-offer mr-2"></i> Bonds</NuxtLink
              >
            </div>
          </div>
          <div class="py-2">
            <h2>Socials</h2>
            <div class="flex flex-col mt-2">
              <NuxtLink
                to="/"
                class="mt-3 p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxl-medium mr-2"></i> Medium</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-github mr-2"></i> Github</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-reddit mr-2"></i> Reddit</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-telegram mr-2"></i> Telegram</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-twitter mr-2"></i> Twitter</NuxtLink
              >
              <NuxtLink
                to="/"
                class="mt-3 p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxl-discord-alt mr-2"></i> Discord</NuxtLink
              >
            </div>
          </div>
          <NuxtLink
            to="/documentation"
            class="hover:text-greek-green focus:text-greek-green transition py-2 select-none"
          >
            $MAZE
          </NuxtLink>
        </div>
      </div>
      <div
        class="hidden md:flex justify-center items-center flex-2 text-sm relative"
      >
        <div
          v-if="hover.learn.value"
          class="absolute w-screen flex justify-center z-10"
          style="top: 56px"
        >
          <div
            class="bg-white shadow-md rounded-md p-4 divide-x flex"
            @mouseleave="onLeave('learn')"
            @mouseenter="onEnter('learn')"
          >
            <div class="flex flex-col p-4">
              <h2 class="mx-1 text-gray-500">How to use app ?</h2>
              <NuxtLink
                to="/"
                class="mt-3 p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-book-open mr-2"></i> Documentation</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxs-videos mr-2"></i> Videos</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bx-transfer-alt mr-2"></i> Buy</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bx-coin-stack mr-2"></i> Staking</NuxtLink
              >
            </div>
            <div class="flex flex-col p-4">
              <h2 class="mx-1 text-gray-500">How it work ?</h2>
              <NuxtLink
                to="/"
                class="mt-3 p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bx-book-open mr-2"></i> Documentation</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxs-videos mr-2"></i> Videos</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bx-line-chart mr-2"></i> Earn</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bx-lock-alt mr-2"></i> Vesting</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxs-offer mr-2"></i> Bonds</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          v-if="hover.socials.value"
          class="absolute w-screen flex justify-center z-10"
          style="top: 56px"
        >
          <div
            class="bg-white shadow-md rounded-md p-4 divide-x flex"
            @mouseleave="onLeave('socials')"
            @mouseenter="onEnter('socials')"
          >
            <div class="flex flex-col p-4">
              <h2 class="mx-1 text-gray-500">Serious</h2>
              <NuxtLink
                to="/"
                class="mt-3 p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxl-medium mr-2"></i> Medium</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-github mr-2"></i> Github</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-reddit mr-2"></i> Reddit</NuxtLink
              >
            </div>
            <div class="flex flex-col p-4">
              <h2 class="mx-1 text-gray-500">Information</h2>
              <NuxtLink
                to="/"
                class="mt-3 p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxl-medium mr-2"></i> Medium</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-reddit mr-2"></i> Reddit</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-telegram mr-2"></i> Telegram</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-twitter mr-2"></i> Twitter</NuxtLink
              >
            </div>
            <div class="flex flex-col p-4">
              <h2 class="mx-1 text-gray-500">Community</h2>
              <NuxtLink
                to="/"
                class="mt-3 p-1 rounded hover:bg-gray-100 flex items-center"
                ><i class="bx bxl-discord-alt mr-2"></i> Discord</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-reddit mr-2"></i> Reddit</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-telegram mr-2"></i> Telegram</NuxtLink
              >
              <NuxtLink to="/" class="p-1 rounded hover:bg-gray-100"
                ><i class="bx bxl-twitter mr-2"></i> Twitter</NuxtLink
              >
            </div>
          </div>
        </div>
        <NuxtLink
          to="/documentation"
          class="hover:text-greek-green focus:text-greek-green transition px-4 py-2 mr-4 select-none"
        >
          Documentation
        </NuxtLink>
        <div
          class="hover:text-gray-500 transition px-4 py-2 mr-4 select-none relative"
          @mouseleave="onLeave('learn')"
          @mouseenter="onEnter('learn')"
        >
          Learn
          <div
            v-if="hover.learn.value"
            class="absolute inset-x-0 flex justify-center"
            style="bottom: -40px"
          >
            <div class="bg-white h-8 w-8 transform rotate-45 z-20"></div>
          </div>
        </div>
        <div
          class="hover:text-gray-500 transition px-4 py-2 mr-4 select-none relative"
          @mouseleave="onLeave('socials')"
          @mouseenter="onEnter('socials')"
        >
          Socials
          <div
            v-if="hover.socials.value"
            class="absolute inset-x-0 flex justify-center"
            style="bottom: -40px"
          >
            <div class="bg-white h-8 w-8 transform rotate-45 z-20"></div>
          </div>
        </div>
        <NuxtLink
          to="/token"
          class="hover:text-greek-green transition px-4 py-2 mr-4 select-none"
        >
          $MAZE
        </NuxtLink>
      </div>
      <div class="hidden md:flex justify-end flex-1">
        <NuxtLink
          to="/app"
          class="flex items-center h-10 px-8 bg-white hover:bg-greek-green hover:text-white hover:shadow-none focus:bg-greek-green focus:text-white focus:shadow-none rounded-md font-normal text-sm shadow transition select-none"
        >
          Access App
        </NuxtLink>
      </div>
      <div class="flex md:hidden justify-end flex-1">
        <button
          class="flex items-center justify-center h-10 w-10 bg-white hover:bg-greek-green hover:text-white hover:shadow-none focus:bg-greek-green focus:text-white focus:shadow-none rounded-md font-normal shadow transition select-none"
          @click="dropdown = !dropdown"
        >
          <i v-if="dropdown" class="bx bx-x"></i>
          <i v-else class="bx bx-menu"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      hover: {
        learn: { value: false, timeout: undefined } as {
          value: Boolean
          timeout?: NodeJS.Timeout
        },
        socials: { value: false, timeout: undefined } as {
          value: Boolean
          timeout?: NodeJS.Timeout
        },
      },
      dropdown: false,
    }
  },
  methods: {
    onEnter(type: string) {
      if (type === 'learn') {
        if (this.hover.learn.timeout !== undefined) {
          clearTimeout(this.hover.learn.timeout)
        }
        this.hover.learn.value = true
        this.hover.socials.value = false
      }
      if (type === 'socials') {
        if (this.hover.socials.timeout !== undefined) {
          clearTimeout(this.hover.socials.timeout)
        }
        this.hover.socials.value = true
        this.hover.learn.value = false
      }
    },
    onLeave(type: string) {
      if (type === 'learn') {
        if (this.hover.learn.timeout !== undefined) {
          clearTimeout(this.hover.learn.timeout)
        }

        this.hover.learn.timeout = setTimeout(() => {
          this.hover.learn.value = false
        }, 100)
      }

      if (type === 'socials') {
        if (this.hover.socials.timeout !== undefined) {
          clearTimeout(this.hover.socials.timeout)
        }

        this.hover.socials.timeout = setTimeout(() => {
          this.hover.socials.value = false
        }, 100)
      }
    },
  },
})
</script>
