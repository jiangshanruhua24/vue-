<template>
  <div class="dairy">
      <div class="content">
          <img src="./../img/broadcast/图片5_03.png" alt="">
          <div>
              <p><span>豆瓣</span> <span> 写了日记</span></p>
              <p class="time">2018-05-23 10:39:23</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
    div.dairy{
        height: .72rem;
        padding: .2rem 0 0 .18rem;
        
        div.content{
            width: 1.88rem;
            height: .4rem;
            font-size: .14rem;
            color: #aaaaaa;
            display: flex;
            justify-content: space-between;
            img{
            width: .4rem;
            }
            div{
                height: .35rem;
                flex-direction: column;
                justify-content: space-between;
                p.time{
                    width: 120%;
                }
            }
        }
    }
</style>