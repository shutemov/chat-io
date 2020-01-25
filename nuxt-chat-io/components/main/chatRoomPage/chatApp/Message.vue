<template>
  <div class="message">
    <div>
      <div>{{message.author}}</div>
      <div>{{message.body}}</div>
    </div>
    <div>{{message.date}}</div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    props: {
      message: {
        type: Object,
        required: true,
        default: () => {
          return {
            author: 'Author from default'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .message {
    margin-bottom: 5px;
    border: 1px dashed #526488;
  }
</style>
