<template>
  <div class="row">
    <el-badge is-dot class="item" type="success" v-if="user.isOnline">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="50"></el-avatar>
    </el-badge>
    <el-badge is-dot class="item"  v-else>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="50"></el-avatar>
    </el-badge>
    <div>{{user.username}}</div>
  </div>
</template>

<script>
  export default {
    name: "User",
    props:{
      user:{
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

  .row {
    margin: 20px;
    display: flex;
    align-items: center;
  }

  .item {
    margin-top: 10px;
    margin-right: 20px;
  }
</style>
