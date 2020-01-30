<template>
  <div class="viewer" @change="updateMessage">
    <ul>
      <li is="message-block" v-for="o in updateMessage" :key="o" :message="o">
      </li>
    </ul>
  </div>
</template>

<script>
  import MessageBlock from './Message'
  import {mapGetters} from 'vuex'

  export default {
    name: "MassageViewer",
    data() {
      return {
        messages: []
      }
    },
    components: {
      MessageBlock
    },
    computed: {
      ...mapGetters(["getRoomMessages"]),

      updateMessage() {
        return [].concat(this.getRoomMessages)
      }
    }
  }
</script>

<style scoped>
  -webkit-scrollbar {
    width: 0;
  }

  .viewer {
    height: 75vh;
    width: 100%;
    overflow: auto;
  }

</style>
