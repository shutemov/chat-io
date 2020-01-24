<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Registration</span>
    </div>
    <div class="card-body">
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
        <el-button>Sign up</el-button>
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
        passwordInput: null
      }
    }
  }
</script>

<style scoped>

</style>
