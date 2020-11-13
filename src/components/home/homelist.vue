<template>
  <div class="homelist">
      <div class="content">
          <div>
              <span>{{title}}</span>
              <span>{{desc}}</span>
              <span class="sm">作者：{{author}}</span>
          </div>
          <img :src="url" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        author:{},
        url:{},
        title:{},
        desc:{}
    }
}
</script>

<style scoped lang='less'>
    div.homelist{
        width: 100%;
        height: 1.68rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #eeeeee;
        div.content{
            font-size: .14rem;
            display: flex;
            justify-content: space-between;
            div{
                width: 1.92rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                span{
                    width: 96%;
                }
                span.sm{
                    font-size: .12rem;
                }
            }
            img{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>