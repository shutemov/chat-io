<template>
  <div>
    <message-viewer></message-viewer>
    <input-message></input-message>
  </div>
</template>

<script>
  import MessageViewer from './MessageViewer'
  import InputMessage from './InputMessage'

  export default {
    name: "AppChat",
    components: {
      MessageViewer,
      InputMessage
    }
  }
</script>

<style scoped>

</style>
