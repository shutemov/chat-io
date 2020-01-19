<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Auth</span>
      <a href="http://localhost:3000/mainPage" style="float: right; padding: 3px 0">Registration</a>
    </div>
    <label>login</label>
    <el-input
      class="item"
      placeholder="Please input"
      v-model="input"
      clearable>
    </el-input>
    <label>password</label>
    <el-input class="item" placeholder="Please input password" v-model="input" show-password></el-input>
    <div>
      <el-button>log in</el-button>
    </div>
  </el-card>
</template>

<script>
    export default {
        name: "loginApp",
      data:()=>{
          return{
            loginInput:null,
            passwordInput:null
          }
      }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 15px;
    margin-top: 5px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;

  }
</style>
