<template>
  <li>
    <a
      v-if="page!=='...'"
      class="pagination-link"
      :aria-label="'Goto page ' + page"
      :aria-current="{page: current}"
      :class="{'is-current': current}"
      @click="$emit('clicked')"
    >{{page}}</a>
    <span
      v-if="page === '...'"
      class="pagination-ellipsis"
    >&hellip;</span>
  </li>
</template>

<script>
    export default {
        name: "paginationLink",
      props: ['page', 'current']
    }
</script>

<style scoped>

</style>
