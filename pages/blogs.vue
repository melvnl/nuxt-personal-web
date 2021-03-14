<template>
  <div class="py-3">
    <h1 class="mt-5 md:mt-80 lg:mt-15 xl:mt-20 text-3xl font-semibold text-left">
      Articles
    </h1>
    <p class="text-left text-base">
      List of article based on my personal experience and knowledge, mostly about Software Engineering and Entrepreneurship.
    </p>
    <div class="articles mt-10">
      <div v-for="article of articles" :key="article" class="article ">
        <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug}}">
          <div class="article-details flex items-center p-5 pl-0 hover:bg-backgroundHoverColor">
            <img :src="require(`~/assets/images/${article.img}`)" alt="" class="">
            <div class="detail ml-6">
              <h3 class="text-base font-bold">
                {{ article.title }}
              </h3>
              <p class="text-sm">
                {{ article.description }}
              </p>
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
    const articles = await $content('blog', params.slug).only(['title', 'description', 'img', 'slug']).sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
