<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <pagination :pagination="$store.state.posts.pagination" @paging="loadPage" :delta="1">
        <list-table :objects="$store.state.posts.list" :keys="tableKeys" :actions="actions"></list-table>
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
            tableKeys: [
              {key: 'id', title: 'Id'},
              {key: 'title', title: 'Title'},
              {key: 'created_at', title: 'Creation date'}
              ],
            actions: [{title:'Edit', color:'is-primary'}, {title:'Delete', color:'is-danger'}],
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
