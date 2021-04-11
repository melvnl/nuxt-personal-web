/* eslint-disable indent */
<template>
  <!-- fixed left-80 right-80 for fixed-nvbar-->
  <div class="">
    <header class="flex flex-wrap items-center lg:p-0 p-4 font-medium shadow-md lg:shadow-none">
      <div class="flex-1 flex justify-between items-center">
        <div>
          👋 <span>Melvin Liu</span>
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
            <li class="mx-1" @click="toggle">
              <nuxt-link to="/" class="px-2 lg:p-4 py-3 md:px-0 block  cursor-pointer hover:bg-backgroundHoverColor rounded-md dark:hover:bg-darkBackgroundHoverColor">
                Home
              </nuxt-link>
            </li>
            <li class="mx-1" @click="toggle">
              <nuxt-link to="/about" class="px-2 lg:p-4 py-3 md:px-0 block  cursor-pointer hover:bg-backgroundHoverColor rounded-md">
                About
              </nuxt-link>
            </li>
            <!-- <li class="mx-1" @click="toggle">
              <nuxt-link to="/blogs" class="px-2 lg:p-4 py-3 md:px-0 block  cursor-pointer hover:bg-backgroundHoverColor rounded-md">
                Blogs
              </nuxt-link>
            </li> -->
            <li class="mx-1" @click="toggle">
              <select class="px-2 lg:p-2 py-3 md:px-0 block  cursor-pointer  rounded-md focus:outline-none bg-backgroundColor">
                <option>ID</option>
                <option>EN</option>
              </select>
            </li>
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
