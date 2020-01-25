<template>
  <login-app></login-app>
</template>

<script>
  import LoginApp from './Login'

  export default {
    name: "authApp",
    components: {
      LoginApp
    },

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
    margin-top: 15px;
  }
</style>
