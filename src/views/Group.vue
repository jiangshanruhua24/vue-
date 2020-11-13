<template>
  <div class="group">
       <Head title="小组">
        <img src="./../components/img/media/ic_actionbar_search_icon.png" slot="left" alt="" class="img-icon left">
        <img src="./../components/img/media/ic_chat_green.png" slot="right" alt="" class="img-icon right">
        
      </Head>
      <div v-for="item in arr" :key="item.title">
      <div class="tit">{{item.title}}</div>
      <div class="list" v-for="it in item.group_list" :key="it.group_name">
        <div class="content">
            <div class="fir">
              <img :src=" it.img_url" alt="">
              <span>{{it.group_name}}</span>
              <span class="gray">{{it.group_member}}</span>
            </div>
            <div class="two gray">{{it.topic_title}}</div>
        </div>
      </div></div>
       <!-- <div class="list">
        <div class="content">
            <div class="fir">
              <img src="./../components/img/group/图片1_03.png" alt="">
              <span>刚才发生了一件重要的小事</span>
              <span class="gray">126人</span>
            </div>
            <div class="two gray">相信那些看似不经意的事，终会引发生命里xxxxx</div>
        </div>
      </div> -->
      <div class="tit2">
        更多相关小组
      </div>
  </div>
</template>

<script>
import Head from './../components/head'
import {group} from './../request/request' 
export default {
  data(){
    return{
      arr:[]
    }
  },
    mounted(){
      group().then(res=>{
        //console.log(res);
        this.arr=res.group;
      })
    },
    components:{
      Head
    }
}
</script>

<style scoped lang='less'>
  div.tit{
    font-size: .16rem;
    height: .36rem;
    width: 100%;
    padding: .15rem 0 0 .19rem;
  }
  div.list{
    height: .99rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    div.content{
       font-size: .14rem;
      width: 2.95rem;
      height: .83rem;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      flex-direction: column;
      div.fir{
        width: 2.91rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: .38rem;
          height: .38rem;
        }
      }
      div.two{
        margin-top: .14rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .gray{
        color: #bdbdbd;
      }
    }
  }
  div.tit2{
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    color: #42bd56;
    font-size: .14rem;
  }
</style>