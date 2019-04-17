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
    </div>
  </div>
</template>

<script>
  var faker = require('faker');
  import Post from "../../components/post";
  import Comment from "../../components/Comment";
  import CommentForm from "../../components/forms/comment";
  import CommentList from "../../components/CommentList";
    export default {
        name: "_id",
      components: {CommentList, CommentForm, Comment, Post},
      layout: 'signedIn',
      created() {
        this.$store.dispatch('posts/getPost', this.$route.params.id);
        // this.$store.dispatch('posts/pollComments', this.$route.params.id);
        this.$echo.channel('comments')
          .listen('NewComment', (e) => {
            this.$store.dispatch('posts/addComment', e.comment);
            console.log(e);
          });
      },
      computed: {
          post(){
            return this.$store.state.posts.single;
          }
      },
      data(){
          return {
            comments: [
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
