<template>
  <el-container>
    <el-header>
      <span>Chat.IO</span>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>

<script>

  export default {
    name: "auth",
    methods:{
      goToRegistration(){
        this.$router.push('/registration')
      }
    }
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
  .el-main{
    height: 565px;
    background: url("https://img1.goodfon.com/original/1920x1080/5/8d/android-l-material-design-2370.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  span {
    font-size: 1.3rem;
  }

</style>
