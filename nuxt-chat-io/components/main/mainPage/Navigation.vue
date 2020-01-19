<template>
    <nav>
      <a href="http://localhost:3000/mainPage"  target="_blank">
        CHAT.IO
      </a>
      <el-menu  class="el-menu-demo" mode="horizontal" @select="">
        <el-menu-item index="1">Create room</el-menu-item>
        <el-menu-item index="2">My rooms</el-menu-item>

        <el-menu-item index="3"><a href="http://localhost:3000/chatRoom" target="_blank">Exit</a></el-menu-item>
      </el-menu>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style lang="scss" scoped>
 nav {
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 100%;
   border-bottom: 1px solid #e6e6e6;
 }
</style>
