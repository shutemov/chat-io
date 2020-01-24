<template>
  <el-container>
    <el-header>
      <span>Chat.IO</span>
<!--      <nuxt-link to="/mainPage" role="button">Registration</nuxt-link>-->
      <a href="#">Registration</a>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>

<script>

  export default {
    name: "auth",
  }
</script>


<style scoped>
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
    font-style: normal;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  span {
    font-size: 1.3rem;
  }

</style>
