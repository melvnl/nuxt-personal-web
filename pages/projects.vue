<template>
  <div class="py-3">
    <div class="p-2 mt-16 md:p-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div class="mb-4">
          <!--Banner image-->
          <img
            class="w-full h-auto"
            src="~/assets/images/works/projects/ips.png"
            alt="Indonesia Patisserie School"
          >
          <!--Tag-->
          <p class="text-primaryColor font-semibold text-base mt-2">
            E-commerce Website
          </p>
          <!--Title-->
          <h1
            class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
          >
            Indonesia Patisserie School
          </h1>
          <div class=" mt-2">
            <p class="font-semibold text-sm">
              Feb 24,2021
            </p>
          </div>
        </div>

        <div class="mb-4">
          <!--Banner image-->
          <img
            class="w-full"
            src="~/assets/images/works/projects/ptgia.png"
            alt="PT. Generasi Indo Abadi"
          >
          <!--Tag-->
          <p class="text-primaryColor font-semibold text-base mt-2">
            Company Profile
          </p>
          <!--Title-->
          <h1
            class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
          >
            PT. Generasi Indo Abadi
          </h1>
          <div class="mt-2">
            <p class="text-gray-500 font-semibold text-sm">
              Feb 24,2021
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-20">
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Melvin - About',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'Freelancer, Software Engineer, UI/UX Designer, soon to be CTO' },
        { name: 'description', content: 'Melvin Liu, a Software Engineer based in Jakarta, Indonesia, Fintech Enthusiast, and currenly enroll in Binus University' },
        { name: 'author', content: 'Melvin Liu' }
      ]
    }
  }
}
</script>
