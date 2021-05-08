<template>
  <article class="min-h-screen mt-20 p-2 md:p-0">
    <nuxt-content :document="article" />
    <hr class="mt-4">
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  head () {
    return {
      title: 'Melvin Liu - Blogs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'Entrepreneurship Blogs, Software Engineering Blogs, Programming Blogs, Coding Blogs' },
        { name: 'description', content: 'List of Blogs about Software Engineering & Entrepreneurship' },
        { name: 'author', content: 'Melvin Liu' }
      ]
    }
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
     font-size: 2rem;
     line-height: 2.25rem;
     margin-bottom: 4px;
 }

 h3{
     font-size: 1.75rem;
     margin-top: 60px;
     margin-bottom: 20px;
     border-bottom: 1px solid #EBEBEB;
     width: 100%;
     display: block;
 }

blockquote{
   margin-top: 1rem;
   margin-bottom: 4rem;
   padding-left: 1.25rem;
   border: 1px solid #4952FC;
   border-width: 0 0 0 .25rem;
   font-weight: 700;
   font-style: italic;
}

img{
 widows: auto;
 margin-top: 4px;
 margin-bottom: 20px;
}

</style>
