<template>

  <el-form ref="form" :model="form" @submit.native.prevent="signUp">

    <el-form-item label="Login:" prop="login">
      <el-input
        v-model="form.login"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password:" class="password-input-block" prop="password">
      <el-input
        placeholder="Input password.."
        v-model="form.password"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" native-type="submit" :loading="loading">log in!</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {LOGIN} from "../../../store/actions";
  import {mapActions} from 'vuex'

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
      ...mapActions([LOGIN]),

      async signUp() {

        const formData = {
          login: this.form.login,
          password: this.form.password
        }

        this.loading = true
        await this[LOGIN](formData)
        this.loading = false
      }
    }

  }
</script>

<style scoped>
  /*.card-body > * {*/
  /*  !*margin-bottom: 15px;*!*/
  /*}*/
</style>
