<template>
  <div class="list">
      <span class="round"></span>
      <div class="txt">
          <span class="tit">5月24日凌晨3:00~6:00豆瓣停机维护</span>
          <span class="sm">因业务发展需要，豆瓣计划于5月24日(星期四)3:00~6:00对服务器进行机房迁移
              ，迁移期间全部豆瓣相关...
          </span>
      </div>
      <div class="simg">
          <img src="./../img/broadcast/图片5_07.png" alt=""><span>29</span>
          <img class="sty" src="./../img/broadcast/图片5_09.png" alt=""><span>14</span>
          <img class="sty" src="./../img/broadcast/图片5_11.png" alt=""><span>25</span>
          <span class="sty">···</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
    div.list{
        font-size: 0;
        position: relative;
        height: 2.09rem;
        span.round{
            width: .19rem;
            height: .19rem;
            background-color: #919191;
            border-radius: .16rem;
            position: absolute;
            top: .12rem;
            left: .44rem;
        }
        div.txt{
            width: 2.34rem;
            height: 1.27rem;
            background-color: #f9f9f9;
            position: absolute;
            top: 0;
            right: .18rem;
            padding: .19rem 0  0 .16rem;
            span.tit{
                font-size: .14rem;
                width: 75%;
                display: block;
            }
            span.sm{
                font-size: .12rem;
                color: #c7c7c7;
                width: 89%;
                display: block;
                margin-top: .11rem;
            }
        }
        div.simg{
            width: 2.31rem;
            height: .16rem;
            display: flex;
            span{
                width: .16rem;
                display: inline-block;
                color: #cfcfcf;
                font-size: .16rem;
                margin-left: .08rem;
                line-height: .16rem;
            }
            position: absolute;
            right: .18rem;
            top: 1.49rem;
            img.sty{
                margin-left: .22rem;
            }
            span.sty{
                margin-left:.57rem;
            }
        }
    }
</style>