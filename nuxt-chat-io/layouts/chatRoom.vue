<template>
  <el-container>
    <el-header>
      <app-nav></app-nav>
    </el-header>
    <el-container class="el-container-style">
      <el-aside width="200px">
        <room-user-list></room-user-list>
      </el-aside>
      <el-main>
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
      AppNav, RoomUserList, AppChat
    }
  }
</script>

<style scoped>
  .el-main {
    display: flex;
    justify-content: center;
    height: 565px;
    background: url("https://www.pixel4k.com/wp-content/uploads/2018/10/material-design-4k_1539370636.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .el-aside {
    background-color: rgb(82, 137, 231);
    border: 1px solid #3b8070;
  }
</style>
