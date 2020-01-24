<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Auth</span>
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
        <el-button @click="signUp">Sign up</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "login",
    data: () => {
      return {
        loginInput: null,
        passwordInput: null
      }
    },
    methods:{
      signUp()
      {
        this.$router.push("/mainPage")
      }
    }

  }
</script>

<style scoped>
  .card-body >*{
    margin-bottom: 15px;
  }
</style>
