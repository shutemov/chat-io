<template>
  <div>
    <message-viewer :message="message" style="width: 600px;"></message-viewer>
    <input-message></input-message>
  </div>
</template>

<script>
  import MessageViewer from './MessageViewer'
  import InputMessage from './MessageInput'
  import store from '../../../../store/index'
  import mapMutations from 'vuex'

  export default {
    name: "AppChat",
    components: {
      MessageViewer,
      InputMessage
    },
    data() {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>

</style>
