<template>
  <div class="body py-3 md:py-16 lg:py-16 px-2 md:px-14 lg:px-50 xl:px-80 bg-backgroundColor">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}

*{
  color: #343434;
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
