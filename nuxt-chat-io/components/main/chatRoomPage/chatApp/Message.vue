<template>
  <div>
    <div class="header">
      <b>{{message.author}}</b>
      <span>{{message.date}}</span>
    </div>
    <el-card class="box-card">
      <div class="header">
      </div>
      <div class="text item">
        {{message.body}}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Message",
    props: {
      message: {
        type: Object,
        required: true,
        default: () => {
          return {
            author: 'Author from default'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .message {
    margin-bottom: 5px;
    border: 1px dashed #526488;
  }

  .text {
    font-size: 14px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-family: Gill Sans, Verdana;
    font-size: 11px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .item {
    /*margin-bottom: 18px;*/
    font-family: times, Times New Roman, times-roman, georgia, serif;
    color: #444;
    font-size: 12px;
    line-height: 44px;

    font-weight: bold;
  }

  .box-card {
    width: auto;
    margin-bottom: 10px;
  }


</style>
