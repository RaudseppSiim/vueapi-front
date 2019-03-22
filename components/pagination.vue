<template>
  <div>
    <slot></slot>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <pagination-link :page="1"></pagination-link>
        <pagination-link page="..."></pagination-link>
        <pagination-link :page="45"></pagination-link>
        <pagination-link :page="46" :current="true"></pagination-link>
        <pagination-link :page="47"></pagination-link>
        <pagination-link page="..."></pagination-link>
        <pagination-link :page="86"></pagination-link>
        <!--<li><a class="pagination-link" aria-label="Goto page 1">1</a></li>-->
        <!--<li><span class="pagination-ellipsis">&hellip;</span></li>-->
        <!--<li><a class="pagination-link" aria-label="Goto page 45">45</a></li>-->
        <!--<li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>-->
        <!--<li><a class="pagination-link" aria-label="Goto page 47">47</a></li>-->
        <!--<li><span class="pagination-ellipsis">&hellip;</span></li>-->
        <!--<li><a class="pagination-link" aria-label="Goto page 86">86</a></li>-->
      </ul>
    </nav>
  </div>
</template>

<script>
    import PaginationLink from "./paginationLink";
    export default {
        name: "pagination",
      components: {PaginationLink},
      props:['pagination'],
    }
</script>

<style scoped>

</style>
