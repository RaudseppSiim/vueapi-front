<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link v-for="link in links" class="navbar-item" :to="link.link" :class="{'is-active': routeActive(link.link)}">{{link.title}}</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "mainmenu",
      data() {
          return {
            links: [
              {title: 'Index', link: '/'},
              {title: 'Posts', link: '/posts'},
              {title: 'List', link: '/posts/list'}
            ]
          }
      },
      methods: {
          routeActive(link){
            return link == this.$route.fullPath;
          }
      }
    }
</script>

<style scoped>
  .menu {
    width: 20%;
  }
</style>
