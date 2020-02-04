<template>
  <div>
    <nav>
      <nuxt-link to="/mainPage">
        CHAT.IO
      </nuxt-link>

      <el-menu class="el-menu-demo" mode="horizontal" @select="">
        <el-menu-item index="1">
          <nuxt-link to="/createRoom">Create room</nuxt-link>
        </el-menu-item>
        <el-menu-item index="2">My rooms</el-menu-item>
        <el-menu-item index="3">
          <nuxt-link to="/">Log out</nuxt-link>
        </el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "Navigation",
    methods: {
      goToMainPage() {
        this.$router.push('/mainPage')
      },
      goToCreateRoom() {
        this.$router.push('/createRoom')
      }
    }
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
