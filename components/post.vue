<template>
  <div class="section">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{post.title}}
        </p>
      </header>
      <div class="card-image">
        <figure class="image is-4by3" v-if="post.images">
          <img :src="post.images[0].src" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p>{{post.content}}</p>
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time :datetime="$moment(post.created_at).format()">{{$moment(post.created_at).fromNow()}}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "post",
      props: ['post'],
    }
</script>

<style lang="scss" scoped>

</style>
