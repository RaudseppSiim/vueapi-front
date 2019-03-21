<template>
  <infinite-scroll @limit="loadPosts" :loading="this.$store.state.posts.isLoading">
    <post v-for="post in $store.state.posts.list" :post="post"></post>
  </infinite-scroll>


</template>

<script>
    import Post from "./post";
    import InfiniteScroll from "./infiniteScroll";
    export default {
        name: "postList",
        components: {InfiniteScroll, Post},
        data(){
          return {

          }
        },
      created() {
        this.$store.dispatch('posts/loadNextPosts');
      },
      methods: {
        loadPosts(){
          this.$store.dispatch('posts/loadNextPosts');
        }
      }
    }
</script>

<style scoped>

</style>
