<template>
<ul>
  <li is="user-item" v-for="o in 4" :key="o">

  </li>
</ul>

</template>

<script>

  import UserItem from './RoomUserListItem'

  export default {
    name: "RoomUsersList",
    components: {
      UserItem
    }
  }
</script>

<style scoped>

</style>
