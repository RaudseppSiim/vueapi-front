<template>
  <div>
    <main-menu></main-menu>
    <nuxt />
  </div>
</template>

<style>
</style>
<script>
  import MainMenu from "../components/mainmenu";
  export default {
    components: {MainMenu},
    middleware:['signedIn']
  }
</script>
