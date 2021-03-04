<template>
  <div class="body py-3 md:py-16 lg:py-16 px-2 md:px-14 lg:px-50 xl:px-80">
    <Navbar />
    <Nuxt />
  </div>
</template>

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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
