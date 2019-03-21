<template>
    <div>
      <post v-for="post in posts" :post="post"></post>
    </div>
</template>

<script>
    import Post from "./post";
    export default {
        name: "postList",
        components: {Post},
        data(){
          return {
            posts: [],
          }
        },
      created() {
          this.$axios.$get('posts').then((response)=>{
              this.posts = response.data;
          });
      }
    }
</script>

<style scoped>

</style>
