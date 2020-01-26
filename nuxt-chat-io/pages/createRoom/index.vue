<template>
  <el-row type="flex" justify="center">
    <el-col :xs='18' :sm='12' :md="8" :lg="8">
      <el-form ref="form" :model="form">

        <el-form-item label="Title:">
          <el-input v-model="form.roomTitle"></el-input>
        </el-form-item>

        <el-form-item label="Description:">
          <el-input type="textarea" v-model="form.roomDescription"></el-input>
        </el-form-item>

        <el-form-item label="Password required:">
          <el-switch
            v-model="form.roomIsPasswordLock"
            active-text="None"
          >
          </el-switch>
          <el-form-item>
            <el-input placeholder="Pass" v-model="form.roomPassword" show-password
                      :disabled="form.roomIsPasswordLock"></el-input>
          </el-form-item>
          <el-form-item label=" ">
            <el-input placeholder="Repeat Pass" v-model="inputRepeatPassword" show-password
                      :disabled="form.roomIsPasswordLock"></el-input>
          </el-form-item>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="onSubmit">Create</el-button>
          <el-button type="danger" @click="goToMainPage">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>

  export default {
    name: "index",
    layout: "default",
    data() {
      return {
        form: {
          roomTitle: '',
          roomPassword: '',
          roomDescription: '',
          roomIsPasswordLock: true
        },
        inputRepeatPassword: null,
      }
    },
    methods: {
      onSubmit() {
        alert('submit!');
      },
      goToMainPage() {
        this.$router.push('/mainPage')
      }
    }
  }
</script>

<style scoped>
  .el-col {
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 5px 5px 20px;
  }
  .el-form{
    height: auto;
  }
</style>
