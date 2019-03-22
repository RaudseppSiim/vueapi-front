<template>
  <div>
    <slot></slot>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <pagination-link v-for="page in pageArray" :page="page" :current="pagination.current_page === page" @clicked="$emit('paging', page)"></pagination-link>
      </ul>
    </nav>
  </div>
</template>

<script>
    import PaginationLink from "./paginationLink";
    export default {
        name: "pagination",
      components: {PaginationLink},
      props:{
          pagination: {},
        delta: {
            default: 2
        }
      },
      computed: {
        pageArray(){
          var current = this.pagination.current_page,
            last = this.pagination.last_page,
            delta = this.delta,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = [],
            l;

          for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
              range.push(i);
            }
          }

          for (let i of range) {
            if (l) {
              if (i - l === 2) {
                rangeWithDots.push(l + 1);
              } else if (i - l !== 1) {
                rangeWithDots.push('...');
              }
            }
            rangeWithDots.push(i);
            l = i;
          }

          return rangeWithDots;
        }
      }
    }
</script>

<style scoped>

</style>
