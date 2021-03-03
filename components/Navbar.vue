/* eslint-disable indent */
<template>
  <div class="">
    <header class="flex flex-wrap items-center lg:py-0 py-2 font-medium">
      <div class="flex-1 flex justify-between items-center">
        <div>
          🌲 <span>Melvin Liu</span>
        </div>
      </div>

      <label for="menu-toggle" class="pointer-cursor lg:hidden block" @click="toggle"><svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>Melvin</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg></label>
      <input id="menu-toggle" class="hidden" type="checkbox">

      <div id="menu" :class="show ? 'block': 'hidden'" class="lg:flex lg:items-center lg:w-auto w-full">
        <nav>
          <ul
            class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
          >
            <li class="mx-1">
              <nuxt-link to="/" class="lg:p-4 py-3 px-0 block  cursor-pointer hover:bg-backgroundHoverColor rounded-md">
                Home
              </nuxt-link>
            </li>
            <li class="mx-1">
              <nuxt-link to="/about" class="lg:p-4 py-3 px-0 block  cursor-pointer hover:bg-backgroundHoverColor rounded-md">
                About
              </nuxt-link>
            </li>
            <li class="mx-1">
              <nuxt-link to="/project" class="lg:p-4 py-3 px-0 block  cursor-pointer hover:bg-backgroundHoverColor rounded-md">
                Projects
              </nuxt-link>
            </li>
            <li class="mx-1">
              <nuxt-link to="/blogs" class="lg:p-4 py-3 px-0 block  cursor-pointer hover:bg-backgroundHoverColor rounded-md">
                Blogs
              </nuxt-link>
            </li>
            <!-- <li>
              <a class="lg:p-4 py-3 px-0 block cursor-pointer lg:mb-0 mb-0" href="#">Support</a>
            </li> -->
            <!-- <button id="switchTheme" class="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" /></svg>
            </button> -->
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style>
a.nuxt-link-exact-active {
  background-color: #F2F2F2;
}
</style>
