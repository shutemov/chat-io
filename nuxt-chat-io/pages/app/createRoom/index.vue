<template>
  <el-row type="flex" justify="center">
    <el-col :xs='18' :sm='12' :md="8" :lg="8">
      <el-form ref="form" :model="form" :rules="rules" @submit="onSubmit">

        <el-form-item label="Title:" prop="roomTitle">
          <el-input
            v-model="form.roomTitle"
            maxlength="30"
            show-word-limit></el-input>
        </el-form-item>

        <el-form-item label="Description:">
          <el-input
            type="textarea"
            autosize
            rows="4"
            aria-valuemin="2"
            aria-valuemax="4"
            v-model="form.roomDescription"
            maxlength="150"
            show-word-limit
          ></el-input>
        </el-form-item>

        <el-form-item label="Password required:">

          <el-switch
            v-model="form.roomHasPassword"
            @change="clearPasswordField"
          >
          </el-switch>

          <i v-if="form.roomHasPassword" class="el-icon-lock" style="margin-right: 5px;font-size: 15px;"></i>
          <i v-else class="el-icon-unlock" style="margin-right: 5px;font-size: 15px;"></i>


          <template v-if="form.roomHasPassword">
            <el-form-item class="password-input-block" prop="roomPassword">
              <el-input
                placeholder="Input password.."
                v-model="form.roomPassword"
                show-password
              ></el-input>

            </el-form-item>

            <el-form-item label=" " prop="roomConfirmPassword">
              <el-input placeholder="Confirm password.." v-model="form.roomConfirmPassword" show-password
              ></el-input>
            </el-form-item>
          </template>
        </el-form-item>

        <el-form-item>
          <el-button type="success" :loading="loading" @click="onSubmit">Create</el-button>
          <el-button type="danger" @click="goToMainPage">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import {mapActions} from 'vuex'
  import {CREATE_ROOM} from "../../../store/actions";


  export default {
    name: "index",

    layout: "default",

    data() {

      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.form.roomConfirmPassword !== '') {
            this.$refs.form.validateField('roomConfirmPassword');
          }
          callback();
        }
      };

      var validateConformPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.form.roomPassword) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };

      return {
        form: {
          roomTitle: '',
          roomPassword: '',
          roomConfirmPassword: '',
          roomDescription: '',
          roomHasPassword: true
        },
        rules: {
          roomTitle: [
            {
              required: true,
              message: 'Title must not be empty',
              trigger: 'blur'
            }
          ],
          roomPassword: [
            {
              validator: validatePassword,
              trigger: 'blur'
            }
          ],
          roomConfirmPassword: [
            {
              validator: validateConformPassword,
              trigger: 'blur'
            }
          ],

        },
        loading: false,
      }
    },


    methods: {

      ...mapActions([CREATE_ROOM]),

      async onSubmit() {
        let title = this.form.roomTitle
        let desciption = this.form.roomDescription
        let isRoomHasPassword = this.form.roomHasPassword
        let password = this.form.roomPassword
        let repeatPassword = this.form.roomConfirmPassword


        if (isRoomHasPassword) {
          if (title !== '' && desciption !== '' && password !== '' && repeatPassword !== '' && (password == repeatPassword)) {

            let formData = {
              title: title,
              description: desciption,
              password: password
            }

            alert('submit with password' + this.form.roomHasPassword);

            await this[CREATE_ROOM](formData)
            return
          }
        } else if (title !== '' && desciption !== '') {
          {
            let formData = {
              title: title,
              description: desciption,
            }

            alert('submit without password' + formData.title);


            await this[CREATE_ROOM](formData)

            return;
          }
        }
        alert('pls fill full fields of form')
      },
      goToMainPage() {
        this.$router.push('/app')
      },
      clearPasswordField() {
        if (this.form.roomHasPassword) {
          this.form.roomPassword = null
          this.form.roomConfirmPassword = null
        }
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

  .el-form {
    height: 100%;
  }

  .password-input-block {
    margin-bottom: 20px;
  }
</style>
