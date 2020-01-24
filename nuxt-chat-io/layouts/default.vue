<template>
  <el-container>
    <el-header>
      <app-nav></app-nav>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <!--    <el-footer>Footer</el-footer>-->
  </el-container>
</template>

<script>

  import AppNav from './../components/main/mainPage/Navigation.vue'

  export default {
    components: {
      AppNav
    }
  }
</script>




<style scoped>

  .el-main{
    background-image: url("https://www.itl.cat/pngfile/big/73-736986_available-desktop-resolutions-material-design-pattern-background.jpg");
    height: 565px;
  }

  .el-container{
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
