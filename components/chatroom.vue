<template>
    <div class="chatbox">
      <messagelist></messagelist>
      <message-form></message-form>
    </div>
</template>

<script>
import MessageForm from "./forms/message";
import Messagelist from "./messageList";
    export default {
        name: "Chatroom",
      components: {Messagelist, MessageForm}
    }
</script>

<style scoped>
    .chatbox{
        height: 460px;
        width: 305px;
        border-radius: 15px;
        background-color: gray;
        display: flex;
        flex-direction: column;
    }
</style>
