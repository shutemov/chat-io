<template>
  <div style="margin-top: 15px;">
    <el-input placeholder="Please input" v-model="inputMessage" @keyup.native.enter="sendMessage(inputMessage)">
      <el-button slot="append" icon="el-icon-s-promotion" @click="sendMessage(inputMessage)" ></el-button>
    </el-input>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "InputMassage",

    data(){
      return{
          inputMessage: null,
      }
    },

    methods: {

      ...mapMutations(['pushMessage']),

      sendMessage(message){

        if (!message.trim()) return

        this.pushMessage(message)
        this.inputMessage = ''
      }
    }
  }
</script>

<style scoped>

</style>
