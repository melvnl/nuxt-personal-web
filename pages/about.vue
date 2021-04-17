<template>
  <div class="py-3">
    <div class="p-2 mt-16 md:p-0">
      <h1 class="text-4xl font-bold mb-10">
        About Me 👋
      </h1>
      <AboutDesc />
      <h1 class="text-2xl font-bold mt-8">
        Melvin :
      </h1>
      <AboutProfile />
      <h1 class="text-4xl mt-16 font-bold mb-10">
        Currently Using
      </h1>
      <AboutTech />
      <h1 class="text-4xl mt-16 font-bold mb-10">
        Community
      </h1>
      <AboutCommunity />
      <h1 class="text-4xl mt-16 font-bold mb-10">
        Projects 🤩
      </h1>
      <AboutProjects />
    </div>
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
