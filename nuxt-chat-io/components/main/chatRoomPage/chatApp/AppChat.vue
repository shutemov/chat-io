<template>
  <div>
    <message-viewer :message="message"></message-viewer>
    <input-message v-on:send:message="message = $event"></input-message>
    {{message}}
  </div>
</template>

<script>
  import MessageViewer from './MessageViewer'
  import InputMessage from './InputMessage'
  import store from '../../../../store/index'
  import mapMutations from 'vuex'

  export default {
    name: "AppChat",
    components: {
      MessageViewer,
      InputMessage
    },
    data(){
      return{
        message:null,
      }
    },
    computed:{

    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
