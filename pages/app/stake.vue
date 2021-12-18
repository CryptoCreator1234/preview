<template>
  <div class="mt-20 flex justify-center">
    <div class="w-2/3 border rounded-xl p-5 flex flex-col">
      <div class="text-xl">Staking</div>
      <div class="text-xs text-gray-500">4 hrs, 5 mins to next rebase</div>
      <div class="mt-10 flex center">
        <div class="flex flex-col items-center w-1/3">
          <span class="text">APY</span>
          <span class="text-greek-green font-bold text-lg">304,330.9%</span>
        </div>
        <div class="flex flex-col items-center w-1/3">
          <span class="text">Total Value Deposited</span>
          <span class="text-greek-green font-bold text-lg">$128,436,915</span>
        </div>
        <div class="flex flex-col items-center w-1/3">
          <span class="text">Current Index</span>
          <span class="text-greek-green font-bold text-lg">2.66 HEC</span>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex justify-between">
          <span class="text-gray-700">Your Balance</span>
          <span class="font-bold text-greek-green">0.00 HEC</span>
        </div>
        <div class="flex justify-between mt-1">
          <span class="text-gray-700">Your Staked Balance</span>
          <span class="font-bold text-greek-green">0.00 HEC</span>
        </div>
        <div class="flex justify-between mt-1">
          <span class="text-gray-700">Next Reward Amount</span>
          <span class="font-bold text-greek-green">0.00 HEC</span>
        </div>
        <div class="flex justify-between mt-1">
          <span class="text-gray-700">Next Reward Yield</span>
          <span class="font-bold text-greek-green">0.20%</span>
        </div>
        <div class="flex justify-between mt-1">
          <span class="text-gray-700">ROI (5-Day Rate)</span>
          <span class="font-bold text-greek-green">11.6126%</span>
        </div>
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
