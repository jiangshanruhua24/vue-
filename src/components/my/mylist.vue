<template>
  <div class="mylist">
      <div class="content">
          <slot name="img1"></slot>
          <span>{{txt}}</span>
          <img src="./../img/my/图片3_14.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        txt:{
            type:String
        }
    }
}
</script>

<style scoped lang='less'>
    .mylist{
        font-size: .14rem;
        width: 100%;
        height: .5rem;
        border-bottom: 1px solid #efefef;
        div.content{
            align-items: center;
            height: 100%;
            width: 88.4%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            span{
                flex: 1;
                margin-left: .11rem;
            }
        }
    }
</style>