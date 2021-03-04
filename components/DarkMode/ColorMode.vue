<template>
  <button class="btn border border-white capitalize" @click="changeMode">
    {{ btnLabel }}
  </button>
</template>

<script>
export default {
  computed: {
    btnLabel () {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
