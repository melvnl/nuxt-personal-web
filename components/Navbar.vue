/* eslint-disable indent */
<template>
  <div class="nav fixed w-full shadow-md py-2 md:py-0 md:relative md:w-auto md:shadow-none bg-backgroundColor">
    <header class="flex flex-wrap items-center lg:p-0 p-4 font-medium">
      <div class="flex-1 flex justify-between items-center">
        <nuxt-link to="/" class="block  cursor-pointer ">
          <img src="~/assets/images/icons/logo.svg" alt="Melvin Liu, Software Engineer, Web Developer, Mobile Developer in Jakarta,Indonesia">
        </nuxt-link>
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
              <nuxt-link to="/" class="lg:p-4 py-3 md:px-0 block  cursor-pointer ">
                Home
              </nuxt-link>
            </li>
            <li class="mx-1" @click="toggle">
              <nuxt-link to="/about" class="lg:p-4 py-3 md:px-0 block  cursor-pointer ">
                About
              </nuxt-link>
            </li>
            <li class="mx-1" @click="toggle">
              <nuxt-link to="/blogs" class="lg:p-4 py-3 md:px-0 block  cursor-pointer ">
                Blog
              </nuxt-link>
            </li>
            <li class="mx-1">
              <a href="https://www.youtube.com/channel/UCa9w-ZqW-un9sgwHcmh-Nng" class="lg:p-4 py-3 md:px-0 block  cursor-pointer ">
                Youtube
              </a>
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

<style >

.nav.fixed{
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 99;
}

a.nuxt-link-exact-active {
   color: #4952FC;
}

</style>
