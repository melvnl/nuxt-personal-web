<template>
  <div class="py-3">
    <!-- <h1 class="mt-5 md:mt-80 lg:mt-15 xl:mt-20 text-3xl text-center">
      Gonna Add this page soon
    </h1> -->
    <div class="flex flex-wrap justify-around mt-16">
      <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-1">
        <img class="w-full" src="~/assets/images/works/projects/ips.png" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            Indonesia Patisserie School
          </div>
          <p class="text-grey-darker text-base text-justify">
            An edu-commerce project (udemy alike), where people can buy cooking courses for Indonesia Patisserie School based in North Jakarta.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-primaryColor bg-opacity-40 rounded px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Bootstrap</span>
          <span class="inline-block bg-primaryColor bg-opacity-40 rounded px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Jquery</span>
          <span class="inline-block bg-primaryColor bg-opacity-40 rounded px-3 py-1 text-sm font-semibold text-grey-darker">Sass</span>
        </div>
      </div>
      <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-1">
        <img class="w-full" src="~/assets/images/works/projects/hangman.png" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            React Hangman
          </div>
          <p class="text-grey-darker text-base text-justify">
            A simple hangman game build with React Js, this project is based on Brad Traversy Media youtube chanel. Check out his video by clicking this <a href="https://www.youtube.com/watch?v=jj0W8tYX_q8" class="font-semibold hover:bg-primaryColor rounded-sm p-1">Link</a>
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-primaryColor bg-opacity-40 rounded px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Reactjs</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Melvin - All Project',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'Freelancer, Software Engineer, UI/UX Designer, soon to be CTO' },
        { name: 'description', content: 'Indonesia Patisserie School, Julizar, React Hangman, PT. Generasi Indo Abadi, PT. Mysa Tama Deka/Sooji, Luckku Laundry.' },
        { name: 'author', content: 'Melvin Liu' }
      ]
    }
  }
}
</script>
