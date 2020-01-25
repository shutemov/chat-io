<template>
  <el-row type="flex" justify="center">
    <el-col :xs='18' :sm='12' :md="8" :lg="8">
      <registration-app></registration-app>
    </el-col>
  </el-row>
</template>

<script>
  import registrationApp from '../../components/main/auth/Registration'

  export default {
    name: "index",
    layout: "auth",
    components: {registrationApp}
  }
</script>

<style scoped>

</style>
