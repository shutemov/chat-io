<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix header">
      <span>Auth</span>
      <el-button type="info" size="mini" @click="registrationActive">{{authState}}</el-button>
    </div>
    <div v-if="isRegistrationState" class="card-body">
      <registration-app></registration-app>
    </div>
    <div v-else>
      <login-app></login-app>
    </div>
  </el-card>
</template>

<script>
  import LoginApp from './Login'
  import RegistrationApp from './Registration'

  export default {
    name: 'authApp',
    components: {
      LoginApp,
      RegistrationApp
    },
    data() {
      return {
        authState: 'Sign up',
        isRegistrationState: false,
      }
    },
    methods: {
      registrationActive() {
        if (this.isRegistrationState) {
          this.authState = 'Sign up'
          this.isRegistrationState = false
          return
        }
        this.authState = 'login'
        this.isRegistrationState = true
        return;
      }
    }

  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    /*margin-bottom: 15px;*/
    /*margin-top: 5px;*/
  }


  .box-card {
    width: 480px;
    margin-top: 15px;
  }
</style>
