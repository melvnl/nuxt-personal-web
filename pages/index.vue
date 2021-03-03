<template>
  <div class="body py-3 md:py-16 lg:py-16 px-2 md:px-14 lg:px-50 xl:px-80">
    <Navbar />
    <Hero />
    <WorkExp />
    <OsProject />
    <Dribble />
    <CodeLibrary />
    <Footer />
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Melvin Liu - Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'Freelancer, Software Engineer, UI/UX Designer, soon to be CTO' },
        { name: 'description', content: 'Melvin Liu, a Software Engineer based in Jakarta, Indonesia' },
        { name: 'author', content: 'Melvin Liu' }
      ]
    }
  }
}
</script>
