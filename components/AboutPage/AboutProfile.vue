<template>
  <ul class="my-2 list-disc ml-8 ">
    <li v-for="experience in experiences" :key="experience.id" class="my-1">
      {{ experience }}
    </li>
  </ul>
</template>

<script>
import data from '~/json/about.json'
export default {
  data () {
    return {
      experiences: data.workExperience
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
