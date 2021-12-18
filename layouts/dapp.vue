<template>
  <div class="font-maze flex">
    <div class="min-h-screen bg-gray-200 w-56 flex flex-col fixed">
      <NuxtLink
        to="/"
        class="flex justify-center items-end h-16 text-center text-2xl text-gray-700 focus:outline-none"
      >
        MazeDao
      </NuxtLink>
      <div class="flex-grow flex flex-col justify-center mb-20">
        <SidebarTile to="/app" icon="bx bx-home-alt" title="Dashboard" />
        <SidebarTile to="/app/stake" icon="bx bx-layer" title="Stake" />
        <SidebarTile to="/app/wrap" icon="bx bxs-bolt" title="Wrap" />
        <SidebarTile to="/app/bond" icon="bx bx-badge" title="Bond" />
        <SidebarTile
          to="/app/calculator"
          icon="bx bx-calculator"
          title="Calculator"
        />
      </div>
      <div
        class="flex justify-between px-10 items-center h-16 text-center text-2xl text-gray-700"
      >
        <a href="twitter.com" class="hover:text-greek-green"
          ><i class="bx bxl-twitter"></i
        ></a>
        <a href="twitter.com" class="hover:text-greek-green"
          ><i class="bx bxl-discord-alt"></i
        ></a>
        <a href="twitter.com" class="hover:text-greek-green"
          ><i class="bx bxl-medium"></i
        ></a>
      </div>
    </div>
    <div class="ml-56 flex-grow">
      <div class="mx-6 flex flex-col">
        <div class="flex justify-between items-center mt-10">
          <span class="text-xl font-bold">{{ page }}</span>
          <div class="flex items-center">
            <div class="mr-4 text-gray-700">
              12.6528 <span class="text-gray-400 ml-1">$MIM</span>
            </div>
            <button
              class="border py-1 px-3 rounded-md flex items-center hover:bg-black hover:text-white hover:border-none transition"
            >
              <img src="/metamask.png" class="mr-2 h-4" /> Connect
            </button>
          </div>
        </div>
        <Nuxt />
        <div class="h-10"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      page: 'Dashboard',
    }
  },
  watch: {
    $route(newValue, _) {
      switch (newValue.path) {
        case '/app':
          this.page = 'Dashboard'
          break

        case '/app/stake':
          this.page = 'Stake'
          break

        case '/app/wrap':
          this.page = 'Wrap'
          break

        case '/app/bond':
          this.page = 'Bond'
          break

        case '/app/calculator':
          this.page = 'Calculator'
          break

        default:
          this.page = 'Dashboard'
          break
      }
    },
  },
})
</script>
