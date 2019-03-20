<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{post.title}}</h1>
      <h2 class="subtitle">
        {{post.content}}
      </h2>
    </div>
  </section>
</template>

<script>
    export default {
        name: "post",
      props: ['post'],
    }
</script>

<style scoped>

</style>
