<template>
  <div class="viewer" @change="updateMessage">
    <ul>
      <li is="message-block" v-for="o in updateMessage" :key="o">

      </li>
    </ul>
  </div>
</template>

<script>
  import MessageBlock from './Message'
  import {mapGetters} from 'vuex'

  export default {
    name: "MassageViewer",
    data(){
      return{
        messages:[]
      }
    },
    components: {
      MessageBlock
    },
    computed:{
      ...mapGetters(["getRoomMessages"]),

      updateMessage(){
        return [].concat(this.getRoomMessages)
      }
    }
  }
</script>

<style scoped>
  .viewer {
    height: 70vh;
    width: 100%;
    /*border: 1px dashed darkgreen;*/
    overflow: auto;
  }

</style>
