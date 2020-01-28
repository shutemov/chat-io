<template>

  <el-form ref="form" :model="form" @submit.native.prevent="signUp">

    <el-form-item label="Login:" prop="login">
      <el-input
        v-model="form.loginInput"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password:" class="password-input-block" prop="password">
      <el-input
        placeholder="Input password.."
        v-model="form.passwordInput"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" native-type="submit" :loading="loading">Sign up!</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "login",
    data: () => {
      return {
        form: {
          login: null,
          password: null
        },
        loading: false,
      }
    },
    methods: {
      signUp() {
        this.$router.push("/mainPage")
      }
    }

  }
</script>

<style scoped>
  /*.card-body > * {*/
  /*  !*margin-bottom: 15px;*!*/
  /*}*/
</style>
