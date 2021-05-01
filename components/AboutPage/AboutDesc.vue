<template>
  <div class="my-2">
    <p class="text-justify">
      {{ about.desc.p1 }}
    </p>
    <p class="text-justify mt-2">
      {{ about.desc.p2 }}
    </p>
  </div>
</template>

<script>
import data from '~/json/about.json'
export default {
  data () {
    return {
      about: data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
