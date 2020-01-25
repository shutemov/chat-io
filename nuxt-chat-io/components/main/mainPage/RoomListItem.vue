<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item :title="room.title" name="1">
      <div class="row">
        <div class="row" style="font-size: 15px;">
          <div>{{room.description}}</div>
        </div>
        <div>
          <i class="el-icon-user-solid" style="margin-right: 5px;font-size: 15px;">{{room.userNum}}</i>
          <i v-if="room.isPassword" class="el-icon-lock" style="margin-right: 5px;font-size: 15px;"></i>

          <el-button type="primary" size="small" round @click="enterToChat">Enter</el-button>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  export default {
    name: "RoomListItem",
    props: {
      room: {
        type: Object,
        required: true,
        default: function () {
          return {roomName: 'hello world'}
        }
      },
    },
    data: () => {
      return {
        activeName: 1,
      }
    },
    methods: {
      enterToChat() {
        this.$router.push(`/chatRoom/${this.room.id}`)
      }
    }
  }
</script>

<style scoped>
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
