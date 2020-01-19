<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="Room name" name="1">
      <div class="row">
        <div class="row" style="font-size: 15px;">
          <div>Small description</div>
        </div>
        <div>
          <i class="el-icon-user-solid" style="margin-right: 5px;font-size: 15px;">8</i>
          <i class="el-icon-lock" style="margin-right: 5px;font-size: 15px;"></i>

          <el-button type="primary" size="small" round>Enter</el-button>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  export default {
    name: "RoomListItem",
    data: () => {
      return {
        activeName: 1,
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
