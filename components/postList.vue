<template>
    <div v-scroll="handle">
      <post v-for="post in $store.state.posts.list" :post="post"></post>
    </div>
</template>

<script>
    import Post from "./post";
    export default {
        name: "postList",
        components: {Post},
        data(){
          return {

          }
        },
      created() {
        this.$store.dispatch('posts/loadNextPosts');
      },
      methods: {
        handle(evt, el){
          let elHeight = el.clientHeight;
          let pageBottom = evt.target.defaultView.innerHeight + evt.target.defaultView.scrollY;
          let percentageScrolled = pageBottom * 100 / elHeight;
          if(percentageScrolled > 90 && !this.$store.state.posts.isLoading){
            this.$store.dispatch('posts/loadNextPosts');
          }
        }
      }
    }
</script>

<style scoped>

</style>
