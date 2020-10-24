<template>
  <div class="top">
    <div>
      <img src="./../img/my/ic_settings.png" alt="">
      <span>密码管理</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'mytop',
    data(){

    },
    props:{
      font:{
        type:String,
        default:'xxx'
      }
    },
}
</script>

<style scoped lang='less'>
  .top{
    width: 50%;
    height: .86rem;
    border-bottom: solid .01rem #ccc;
  }
</style>