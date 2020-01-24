<template>
  <div style="margin-top: 15px;">
    <el-input placeholder="Please input" v-model="inputMessage" >
      <el-button slot="append" icon="el-icon-email" @click="sendMessage"></el-button>
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

      sendMessage(){
        this.pushMessage('123')
      }
    }
  }
</script>

<style scoped>

</style>
