<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <pagination :pagination="$store.state.posts.pagination" @paging="loadPage" :delta="1">
        <list-table :objects="$store.state.posts.list" :keys="tableKeys"></list-table>
      </pagination>
    </div>
  </div>
</template>

<script>
    import ListTable from "../../components/listTable";
    import Pagination from "../../components/pagination";
    export default {
        name: "list",
      components: {Pagination, ListTable},
      data(){
          return {
            tableKeys: ['id', 'title', 'created_at']
          }
      },
      created() {
        this.$store.dispatch('posts/loadPostPage', 1);
      },
      methods: {
          loadPage(page){
            this.$store.dispatch('posts/loadPostPage', page);
          }
      }
    }
</script>

<style scoped>

</style>
