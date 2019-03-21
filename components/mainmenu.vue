<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a v-for="link in links" class="navbar-item" :href="link.link" :class="{'is-active': routeActive(link.link)}">{{link.title}}</a>
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
              {title: 'Posts', link: '/posts'}
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
