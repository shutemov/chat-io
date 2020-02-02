<template>

  <el-form ref="form" :model="form" :rules="rules" @submit="registrationNewUser">

    <el-form-item label="Login:" prop="login">
      <el-input
        v-model="form.login"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password:" class="password-input-block" prop="password">
      <el-input
        placeholder="Input.."
        v-model="form.password"
        show-password
      ></el-input>

    </el-form-item>

    <el-form-item label="Confirm password.." prop="confirmPassword">
      <el-input
        placeholder="Input.."
        v-model="form.confirmPassword"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="success" @click="registrationNewUser" :loading="loading">Registration!</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {REGISTRATION} from '../../../store/actions';
  import {mapActions} from 'vuex'

  export default {
    name: "registration",
    data() {
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {

          if (this.form.password !== '') {
            this.$refs.form.validateField('confirmPassword');
          }
          callback();
        }
      };
      var validateConfirmPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.form.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          login: '',
          password: '',
          confirmPassword: '',
        },
        rules: {
          login: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
          password: [{
            validator: validatePassword,
            trigger: 'blur'
          }],
          confirmPassword: [{
            validator: validateConfirmPassword,
            trigger: 'blur'
          }],
        },
        loading: false,
      }
    },
    methods: {
      ...mapActions([REGISTRATION]),

      async registrationNewUser() {

        const formData = {
          login: this.form.login,
          password: this.form.password
        }

        this.loading = true
        await this[REGISTRATION](formData)
        this.loading = false

      }
    }
  }
</script>

<style scoped>
  .card-body > * {
    margin-bottom: 15px;
  }
</style>
