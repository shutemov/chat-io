<template>
  <el-row type="flex" justify="center">
    <el-col :xs='18' :sm='12' :md="8" :lg="8">
      <auth-app></auth-app>
    </el-col>
  </el-row>
</template>

<script>
  import AuthApp from '../components/main/auth/AuthApp.vue'

  export default {
    name: "index",
    layout: "auth",
    components: {AuthApp}
  }
</script>

<style scoped>

</style>
