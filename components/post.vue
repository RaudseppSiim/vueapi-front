<template>
  <div class="section">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{post.title}}
        </p>
      </header>
      <div class="card-image" v-if="post.images.length">
        <figure class="image is-4by3">
          <img :src="post.images[0].src" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p v-html="post.content.split('\n').join('<br>')"></p>
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time :datetime="$moment(post.created_at).format()">{{$moment(post.created_at).fromNow()}}</time>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" :class="{'has-text-danger': liked}" @click="doLike"><i class="fas fa-heart"></i></a>
        <a class="card-footer-item" :class="{'has-text-danger': disliked}" @click="doDislike"><i class="fas fa-heart-broken is-danger"></i></a>
        <a class="card-footer-item"><i class="fas fa-comment"></i></a>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
        name: "post",
      props: ['post'],
      data(){
          return {
            liked: false,
            disliked: false
          }
      },
      methods: {
          doLike(){
            this.liked = !this.liked;
            this.disliked = false;
          },
          doDislike(){
            this.disliked = !this.disliked;
            this.liked = false;
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
