<template>
  <article class="mt-20">
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  }
}
</script>

<style>

 article{
     display: block;
     margin: 0 auto;
     max-width: 800px;
 }

 h1, h2 ,h3 {
   font-weight: 700;
 }

 h1{
     font-size: 24px;
 }

 h2{
     font-size: 20px;
 }

 h3{
     font-size: 18px;
 }
</style>
