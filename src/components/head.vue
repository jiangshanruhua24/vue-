<template>
  <div class="head">
      <span>{{title}}</span>
      <slot name="right"></slot>
      <slot name="left"></slot>
      <slot name="homesearch"></slot>
  </div>
</template>

<script>
export default {
    name:'head1',
    props:{
        title:{
            type:String,
            default:'title'
        }
    }
}
</script>

<style scoped lang='less'>
    .head{
        font-size: 0;
        height: .43rem;
        border-bottom: .01rem solid #ccc;
        text-align: center;
        line-height: .43rem;
        position: relative;
        background-color: #f7f7f7;
        .img-icon{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: .25rem;
        }
        span{
            font-size: .18rem;
            color: #555;
        }
        .right{  
            right: .11rem;
        }
        .left{  
            right: .5rem;
        }
    }   

</style>