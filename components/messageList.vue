<template>
    <div class="message-list">
      <message :sender="$store.state.auth.user.name" message="Ma olen jaanus!"></message>
    </div>
</template>

<script>
    import Message from "./message";
    export default {
        name: "Messagelist",
      components: {Message},
      created(){
          this.$echo.channel('messages')
          .listen('App\Events\NewMessage', (e) => {
            console.log(e);
          });
      }
      
    }
</script>

<style scoped>
    .message-list{
        height: 98%;
        padding: 10px;
    }
</style>
