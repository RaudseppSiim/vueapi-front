<template>
  <table class="table is-bordered is-hoverable is-striped">
    <thead>
    <td v-for="key in keys">{{key}}</td>
    </thead>
    <tbody>
    <tr v-for="object in objects">
      <td  v-for="key in keys">{{object[key]}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "listTable",
      props:['objects', 'keys'],
    }
</script>

<style scoped>

</style>
