<template>
  <div>
    <div class="mt-8 px-4 py-8 border rounded-3xl flex justify-center">
      <div class="flex justify-center items-center flex-1">
        <div
          class="border rounded-full h-16 w-16 flex items-center justify-center mr-4 text-3xl text-greek-green"
        >
          <i class="bx bx-wallet"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-600">Portfolio Balance:</span
          ><span class="text-3xl mt-2">$ 1 000 000,00</span>
        </div>
      </div>
      <div class="w-px bg-gray-300" />
      <div class="flex justify-center items-center flex-1">
        <div
          class="border rounded-full h-16 w-16 flex items-center justify-center mr-4 text-3xl text-greek-green"
        >
          <i class="bx bx-line-chart"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-600">Best APY:</span
          ><span class="text-3xl mt-2">% 123 876 988,12</span>
        </div>
      </div>
      <div class="w-px bg-gray-300" />
      <div class="flex justify-center items-center flex-1">
        <div
          class="border rounded-full h-16 w-16 flex items-center justify-center mr-4 text-3xl text-greek-green"
        >
          <i class="bx bxs-badge-dollar"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-600">Locked Value:</span
          ><span class="text-3xl mt-2">$ 10 020 320,14</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-10 mt-10">
      <div class="border rounded-xl p-2">
        <Chart />
      </div>
      <div class="border rounded-xl p-2">
        <Chart />
      </div>
      <div class="border rounded-xl p-2">
        <Chart />
      </div>
      <div class="border rounded-xl p-2">
        <Chart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'dapp',
})
</script>
