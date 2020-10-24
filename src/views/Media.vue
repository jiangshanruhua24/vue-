<template>
  <div class="media">
      <Head title="书影音">
        <img src="./../components/img/media/ic_actionbar_search_icon.png" slot="left" alt="" class="img-icon left">
        <img src="./../components/img/media/ic_chat_green.png" slot="right" alt="" class="img-icon right">
         <!-- 二级路由 -->
        
      </Head>
       <ul class="router-media">
           <li><router-link to="/media/movie">电影</router-link></li>
           <li><router-link to="/media/book">读书</router-link></li>
           <li><router-link to="/media/tv">电视</router-link></li>
           <li><router-link to="/media/city">同城</router-link></li>
           <li><router-link to="/media/music">音乐</router-link></li>
           
         </ul>
         <!-- 二级路由出口 -->
         <router-view></router-view>
  </div>
</template>

<script>
import Head from './../components/head'
export default {
    components:{
      Head
    }
}
</script>

<style scoped lang='less'>
  .media{
    .router-media{
      height: .3rem;
      display: flex;
      li{
        flex: 1;
        a{
          display: block;
          font-size: .12rem;
          height: 100%;
          display: flex;
          align-items: center;
          color: #999;
          justify-content: center;
          border-bottom: .01rem solid #eee;
        }
        .router-link-active{
          color: #fff;
          background-color: #07d614;
          border-bottom: .01rem solid  #07d614;
        }
      }
    }
  }
</style>