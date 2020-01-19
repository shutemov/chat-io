<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <div class="header-flexbox">
        <span>Rooms</span>
        <div>
          <el-input size="mini" placeholder="Search room" v-model="inputData" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <ul>
      <li is="room-list-item" v-for="o in 4" :key="o"></li>
    </ul>
  </el-card>

</template>

<script>
  import RoomListItem from './RoomListItem'

  export default {
    name: "RoomList",
    components: {
      RoomListItem
    },
    data:()=>{
      return{
        inputData:null,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-flexbox {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
    width: 100%;
    margin-top: 15px;
  }
</style>
