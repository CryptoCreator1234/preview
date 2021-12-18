<template>
  <div class="font-maze bg-landing-white">
    <NavbarWidget />
    <div class="flex flex-col bg-hero">
      <main
        class="flex items-center justify-between mt-16 py-20 md:py-44 container mx-auto"
      >
        <div class="w-full px-4 md:px-0 lg:w-3/5">
          <h1 class="text-5xl font-bold text-black">
            The Decentralized <br />
            Reserve Currency
          </h1>
          <p class="text-2xl mt-4 text-gray-800">
            <span class="text-greek-green font-bold">MazeDAO</span> is building
            a community-owned decentralized financial infrastructure to bring
            more stability and transparency for the world.
          </p>
          <div class="uppercase text-lg text-gray-700 mt-10">announcements</div>
          <p class="mt-2 text-2xl">Read our latest announcements</p>
          <button
            class="bg-white flex items-center px-6 py-2 mt-4 shadow-md rounded-full hover:text-greek-green transition focus:text-greek-green focus:outline-none focus:ring"
          >
            <i class="bx bxl-medium mr-2 text-xl"></i> Medium
          </button>
        </div>
      </main>
    </div>
    <section
      class="flex items-center justify-center mt-6 container px-4 md:px-0 mx-auto"
    >
      <div
        class="bg-gray-200 rounded-lg w-full py-6 flex flex-col md:flex-row items-center fade-in"
      >
        <div
          class="flex flex-col justify-center items-center w-full my-2 md:w-1/3"
        >
          <span class="text-sm text-gray-600">Treasury Balance </span>
          <div class="text-2xl font-bold text-gray-800 flex items-center">
            <span class="mr-2">$</span
            ><Roller
              default-char="0"
              :transition="3"
              :text="balance"
              :is-number-format="true"
            />
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-full my-2 md:w-1/3"
        >
          <span class="text-sm text-gray-600">Total Value Locked</span>
          <div class="text-2xl font-bold text-gray-800 flex items-center">
            <span class="mr-2">$</span
            ><Roller
              default-char="0"
              :transition="3"
              :text="tvl"
              :is-number-format="true"
            />
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-full my-2 md:w-1/3"
        >
          <span class="text-sm text-gray-600">Current APY</span>
          <div class="text-2xl font-bold text-gray-800 flex items-center">
            <Roller
              default-char="0"
              :transition="3"
              :text="tvl"
              :is-number-format="true"
            />
            <span class="ml-2">%</span>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col justify-center mt-14 container px-4 md:px-0 md:w-9/12 lg:w-7/12 lg:w-1/2 mx-auto"
    >
      <h2 class="text-5xl font-bold text-gray-900 text-center">
        How MazeDAO works
      </h2>
      <div class="flex justify-between items-center mx-6 mt-10 fade-in">
        <div class="flex flex-col">
          <div class="flex flex-col">
            <div class="flex items-center">
              <div
                class="h-8 w-8 font-bold rounded-full bg-gray-200 text-gray-800 flex items-center justify-center"
              >
                1
              </div>
              <div class="font-semibold text-gray-600 ml-3 text-xl">
                Treasury Revenue
              </div>
            </div>
            <h4 class="font-bold text-3xl mt-4">Bonds & LP fees</h4>
            <p class="mt-2 w-72">
              Bond sales and LP Fees increase Treasury Revenue and lock in
              liquidity and help control OHM supply
            </p>
          </div>
        </div>
        <img src="/1.png" class="h-64 animate1" alt="" />
      </div>
      <div class="flex justify-between items-center mx-6 fade-in">
        <img src="/2.png" class="h-96 animate2" alt="" />
        <div class="flex flex-col">
          <div class="flex items-center">
            <div
              class="h-8 w-8 font-bold rounded-full bg-gray-200 text-gray-800 flex items-center justify-center"
            >
              2
            </div>
            <div class="font-semibold text-gray-600 ml-3 text-xl">
              Treasury Growth
            </div>
          </div>
          <h4 class="font-bold text-3xl mt-4">Maze Treasury</h4>
          <p class="mt-2 w-72">
            Treasury inflow is used to increase Treasury Balance and back
            outstanding OHM tokens and regulate staking APY
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center mx-6 fade-in">
        <div class="flex flex-col">
          <div class="flex items-center">
            <div
              class="h-8 w-8 font-bold rounded-full bg-gray-200 text-gray-800 flex items-center justify-center"
            >
              3
            </div>
            <div class="font-semibold text-gray-600 ml-3 text-xl">
              Staking Rewards
            </div>
          </div>
          <h4 class="font-bold text-3xl mt-4">OHM Token</h4>
          <p class="mt-2 w-72">
            Compounds yields automatically through a treasury backed currency
            with intrinsic value
          </p>
        </div>

        <img src="/3.png" class="h-64 animate3" alt="" />
      </div>
    </section>
    <footer class="flex justify-around text-4xl mt-20 bg-gray-200 p-6">
      <i class="bx bxl-twitter hover:text-greek-green"></i>
      <i class="bx bxl-discord-alt"></i>
      <i class="bx bxl-medium"></i>
      <i class="bx bxl-telegram"></i>
      <i class="bx bxl-youtube"></i>
      <i class="bx bxl-reddit"></i>
      <i class="bx bxl-github"></i>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Roller from 'vue-roller'

// TODO
// 1. Bounce image

export default Vue.extend<any, any, any>({
  components: {
    Roller,
  },
  data() {
    return {
      fadeInElements: [],
      balance: '0', //
      tvl: '0',
      apy: '0',
    }
  },
  mounted() {
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      for (let i = 0; i < this.fadeInElements.length; i++) {
        const elem = this.fadeInElements[i]
        if (this.isElemVisible(elem)) {
          if (i === 0) {
            this.balance = '775233394'
            this.tvl = '3105016252'
            this.apy = '7074'
          }
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
          this.fadeInElements.splice(i, 1)
        }
      }
    },
    isElemVisible(el: any) {
      const rect = el.getBoundingClientRect()
      const elemTop = rect.top + 100
      const elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    },
  },
})
</script>

<style>
.bg-hero {
  background-image: url('/background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}

.fade-in {
  opacity: 0;
  transform: scale(0.8);
  transition: 1s all ease-out;
}

.animate1 {
  animation: bounceOdd 6s infinite;
  animation-delay: 0s;
}

.animate2 {
  animation: bounceEven 6s infinite;
  animation-delay: 1s;
}

.animate3 {
  animation: bounceOdd 6s infinite;
  animation-delay: 3s;
}

@keyframes bounceOdd {
  0%,
  100% {
    transform: translate(2%, -10%);
    animation-timing-function: linear;
  }
  50% {
    transform: translate(-1%, 10%);
    animation-timing-function: linear;
  }
}

@keyframes bounceEven {
  0%,
  100% {
    transform: translate(-1%, -10%);
    animation-timing-function: linear;
  }
  50% {
    transform: translate(1%, 10%);
    animation-timing-function: linear;
  }
}
</style>
