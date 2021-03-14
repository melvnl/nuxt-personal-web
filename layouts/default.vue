<template>
  <div class="body py-3 md:py-16 lg:py-16 px-2 md:px-14 lg:px-50 xl:px-80 dark:bg-darkBackground dark:text-textWhite">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>

</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(3em);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

</style>
