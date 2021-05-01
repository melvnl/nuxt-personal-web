<template>
  <div class="py-3">
    <div class="p-2 mt-16 md:p-0">
      <h1 class="text-2xl font-bold">
        Featured Projects
      </h1>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-1">
        <div v-for="project in projects" :key="project.id" class="mb-4">
          <img
            class="w-full h-auto"
            :src=" project.url"
            :alt="project.alt"
          >
          <p class="text-primaryColor font-semibold text-base mt-2">
            {{ project.slug }}
          </p>
          <h1
            class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate mb-2"
          >
            {{ project.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/json/project.json'
export default {
  data () {
    return {
      projects: data.project
    }
  }
}
</script>

<style>

</style>
