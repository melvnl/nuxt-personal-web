<template>
  <div class="py-3">
    <div class="p-2 mt-16 md:p-0">
      <h1 class="text-4xl font-bold mb-10 ">
        Articles
      </h1>
      <div v-for="article of articles" :key="article.id" class="article">
        <nuxt-link :to="{name: 'blog-slug', params: { slug: article.slug}}" class="article-parent">
          <div class="article-inner mb-4 p-2 md:p-5">
            <h3 class="article-title text-bold">
              {{ article.title }}
            </h3>
            <div class="article-description text-base font-medium">
              {{ article.description }}
            </div>
            <div class="article-date text-sm">
              {{ article.date }}
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'date', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
  head () {
    return {
      title: 'Melvin - Blog',
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

<style scoped>

h3{
  font-size: 20px;
  margin: 0;
  border: none;
}

.article-inner{
  border: 1px solid #000;
  border-radius: 7px;
}

.article-inner:hover{
  border: 1px solid #4952FC;
}

</style>
