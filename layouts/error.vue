<template>
  <div>
    <div v-if="error.statusCode === 404" class="mt-20 flex flex-col items-center ">
      <img src="~/assets/images/error.png" alt="Error 404 Not Found">
      <h1 class="text-center text-xl text-primaryColor font-semibold">
        Page Not Found
      </h1>
    </div>
    <div v-else class="text-center text-xl text-primaryColor font-semibold">
      <img src="~/assets/images/error.png" alt="Error 404 Not Found">
      <h1 class="text-center text-xl text-primaryColor font-semibold">
        An Error Occured
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'] // you can set a custom layout for the error page
}
</script>
<style></style>
