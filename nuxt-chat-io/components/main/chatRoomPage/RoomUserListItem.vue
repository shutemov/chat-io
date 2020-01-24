<template>
  <div class="row">
    <el-badge is-dot class="item">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="50"></el-avatar>
    </el-badge>
    <div>nickname</div>
  </div>
</template>

<script>
  export default {
    name: "User"
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
