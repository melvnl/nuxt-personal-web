<template>
  <div class="p-2 mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 md:p-0 text-fontColor">
    <!--Left Col-->
    <div class="flex flex-col w-full lg:w-3/4 justify-center items-start">
      <h1 class="font-bold text-5xl my-4 text-gray-700">
        {{ homepage.hero.greeting }}
      </h1>
      <p class="mb-4 text-xl text-left leading-6 mt-7 mr-4">
        {{ homepage.hero.leftDesc }}
      </p>
    </div>
    <!--Right Col-->
    <div class="w-full md:w-64 mx-auto md:mr-0 text-center min-h-80">
      <div class="rounded-md p-5 text-center  h-72 max-w-sm mx-auto bg-primaryColor shadow-2xl">
        <img src="../assets/images/hero-img.png" class="mx-auto " alt="Melvin Liu" srcset="">
        <p class="capitalize text-md mt-1 mb-3 text-fontSecondaryColor">
          {{ homepage.hero.rightDesc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/json/homepage.json'
export default {
  data () {
    return {
      homepage: data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
