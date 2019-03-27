<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{modal.title}}</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="save">Save changes</button>
        <button class="button" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
        name: "modal",
        props: ['modal'],
        methods: {
          close(){
            this.$store.dispatch(this.modal.closeAction, this.modal.name);
          },
          save(){
            this.$store.dispatch(this.modal.saveAction);
          }
        }
    }
</script>

<style scoped>

</style>
