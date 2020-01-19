<template>
  <el-container>
    <el-header>
      <app-nav></app-nav>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside
        <room-user-list></room-user-list>
      </el-aside>
      <el-main>
        main
        <app-chat></app-chat>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppNav from './../components/main/mainPage/Navigation'
  import RoomUserList from './../components/main/chatRoomPage/RoomUserList'
  import AppChat from './../components/main/chatRoomPage/chatApp/AppChat'


  export default {
    name: "chatRoom",
    components: {
      AppNav, RoomUserList,AppChat
    }
  }
</script>

<style scoped>

</style>
