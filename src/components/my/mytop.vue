<template>
  <div class="top">
    <div>
      <img src="./../img/my/图片3_03.png" alt="">
      <span>密码管理</span>
    </div>
     <div>
      <img src="./../img/my/图片3_06.png" alt="">
      <span>银行卡管理</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'mytop',
    data(){
      return{
        
      }
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
    width: 100%;
    height: .81rem;
    border-bottom: solid 1px #ccc;
    font-size: .14rem;
    display: flex;
    align-items: center;
    div{
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: .54rem;

      img{
        width: .24rem;
      };
    }
  }
</style>