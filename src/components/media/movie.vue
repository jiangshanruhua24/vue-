<template>
  <div class="movie">
      <div class="tit">{{tit}}</div>
      <div class="img">
          <div class="content">
            <div v-for="item in arr" :key="item.id">
              <img :src="item.cover" alt="">
              <p><span>{{item.title}}</span></p>
              <p><span class="gray">评分{{item.rate}}</span></p>
            </div>
            <!-- <div>
              <img src="./../img/media/图片4_03.png" alt="">
              <p><span>超时空同居</span></p>
              <p><span class="gray">评分7.2</span></p>
            </div> -->
          </div>
      </div>
       <div class="tit">即将上映的电影</div>
      <div class="img sty">
          <div class="content">
            <div>
              <img src="./../img/media/图片4_03.png" alt="">
              <p><span>超时空同居</span></p>
              <p><span class="gray">评分7.2</span></p>
            </div>
            <div>
              <img src="./../img/media/图片4_03.png" alt="">
              <p><span>超时空同居</span></p>
              <p><span class="gray">评分7.2</span></p>
            </div>
            <div>
              <img src="./../img/media/图片4_03.png" alt="">
              <p><span>超时空同居</span></p>
              <p><span class="gray">评分7.2</span></p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import {movie} from './../../request/request'
export default {
    name:'movie',
    data(){
      return{
        tit:'',
        arr:[]
      }
    },
    mounted(){
      movie().then(res=>{
        console.log(res);
        this.tit=res.subjects.title;
        this.arr=res.subjects.list;
      })
    }
}
</script>

<style scoped lang='less'>
#app div.movie{
  overflow-y: auto;

  div.tit{
    font-size: .14rem;
    height: .5rem;
    padding-left: .21rem;
    line-height: .5rem;
  }
  div.img{
    height: 1.94rem;
    div.content{
      white-space: nowrap;
      overflow-x:scroll;
      overflow-y: scroll;
       width: 100%;
      font-size: .14rem;
      div{
        display: inline-block;
        margin-left: .3rem;
        width: 1rem;
        img{
          width: 100%;
          height: 1.5rem;
        }
        span.gray{
          font-size: .12rem;
          color: #b5b5b5;
        }
        p{
          text-align: center;
          margin-top: .02rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  div.sty{
    height: 2.5rem;
  }
}
</style>