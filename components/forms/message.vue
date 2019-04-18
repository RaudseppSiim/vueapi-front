<template>
    <div>
        <form class="form-area">
            <input class="message" placeholder="message" type="text">
            <input style="display:none" type="submit">
        </form>
    </div>
</template>

<script>
    export default {
        name: "message-form",
        methods: {
           
        },
      computed: {
      }
    }
</script>

<style scoped>
    .message{
            width: 90%;
        margin-left: 15px;
        margin-bottom: 15px;
        
        padding: 5px;
        border-radius: 25px;
        border:1px solid #3273dc;
    }
    .message:focus{
        outline-width: 0;
        border: 1px solid #46b8da;
    }
    
</style>