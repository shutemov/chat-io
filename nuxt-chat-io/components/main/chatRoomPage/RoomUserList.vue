<template>
  <ul>
    <li is="user-item" v-for="(o,index) in getRoomUserList" :key="index + o" :user="o">

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
    computed: {
      ...mapGetters(['getRoomUsers']),
      getRoomUserList() {
        return [].concat(this.getRoomUsers)
      }
    }
  }
</script>

<style scoped>

</style>
