<template>
<ul>
  <li is="user-item" v-for="o in getRoomUserList" :key="o" :user="o">

  </li>
</ul>

</template>

<script>

  import UserItem from './RoomUserListItem'
  import {mapGetters} from 'vuex'
  export default {
    name: "RoomUsersList",
    components: {
      UserItem
    },
    computed:{
      ...mapGetters(['getRoomUsers']),
      getRoomUserList(){
        return [].concat(this.getRoomUsers)
      }
    }
  }
</script>

<style scoped>

</style>
