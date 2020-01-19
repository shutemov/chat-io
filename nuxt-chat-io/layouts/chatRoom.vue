<template>
  <el-container>
    <el-header>
      <app-nav></app-nav>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside
        <room-user-list></room-user-list>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppNav from './../components/main/mainPage/Navigation'
  import RoomUserList from './../components/main/chatRoomPage/RoomUserList'


  export default {
    name: "chatRoom",
    components: {
      AppNav, RoomUserList
    }
  }
</script>

<style scoped>

</style>
