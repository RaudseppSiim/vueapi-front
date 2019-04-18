<template>
    <div class="chat-area">
      <chatbutton></chatbutton>
      <chatroom></chatroom>
    </div>
</template>

<script>
import chatroom from './chatroom.vue' 
import Chatbutton from "./Chatbutton";
    export default {
        name: "chatarea",
      components: {Chatbutton,  chatroom}
    }
</script>

<style scoped>

  .chat-area{
    position: fixed;
    bottom: 50px;
    right: 60px;
  }
</style>
