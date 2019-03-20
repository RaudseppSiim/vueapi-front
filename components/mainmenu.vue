<template>
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li v-for="link in links">
        <a :href="link.link" :class="{'is-active': routeActive(link.link)}">{{link.title}}</a>
      </li>
    </ul>
  </aside>
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
