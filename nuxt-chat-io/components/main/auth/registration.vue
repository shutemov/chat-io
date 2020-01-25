<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Registration</span>
    </div>
    <div class="card-body">
      <label>Login</label>
      <el-input
        class="item"
        placeholder="Please input"
        v-model="loginInput"
        clearable>
      </el-input>
      <label>Password</label>
      <el-input class="item" placeholder="Please input password" v-model="passwordInput" show-password></el-input>
      <label>Repeat password</label>
      <el-input class="item" placeholder="Please input password" v-model="repeatPasswordInput" show-password></el-input>
      <div>
        <el-button type="success">Create!</el-button>
        <el-button type="danger">Back</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "registration",
    data: () => {
      return {
        loginInput: null,
        passwordInput: null,
        repeatPasswordInput: null,
      }
    }
  }
</script>

<style scoped>
  .card-body > * {
    margin-bottom: 15px;
  }
</style>
