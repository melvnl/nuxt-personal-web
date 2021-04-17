<template>
  <div class="p-2 mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 md:p-0 text-fontColor">
    <!--Left Col-->
    <div class="flex flex-col w-full lg:w-3/4 justify-center items-start">
      <h1 class="font-bold text-5xl my-4 text-gray-700">
        {{ $t('hero.title') }}
      </h1>
      <p class="mb-4 text-xl text-left leading-6 mt-7 mr-4">
        I’m a Software Engineer and sometimes an User Interface Designer. I added value to society by building
        impactful software. Currently hooked with Typescript, and Go.
      </p>
    </div>
    <!--Right Col-->
    <div class="w-full md:w-64 mx-auto md:mr-0 text-center min-h-80">
      <div class="rounded-md p-5 text-center  h-72 max-w-sm mx-auto bg-primaryColor shadow-2xl">
        <img src="../assets/images/hero-img.png" class="mx-auto " alt="" srcset="">
        <p class="capitalize text-md mt-1 mb-3 text-fontSecondaryColor">
          I share my journey on software engineering and entrepreneurship on <a href="http://" class="">Youtube!</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
