<template>
    <div class="columns is-centered">
      <div class="column is-5">
        <post-list></post-list>
      </div>
    </div>
</template>

<script>
    import PostList from "../components/postList";
    export default {
        name: "posts",
      components: {PostList}
    }
</script>

<style scoped>

</style>
