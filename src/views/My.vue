<template>
  <div class="my">
      <Head title="我的">
        <img src="./../components/img/my/ic_settings.png" slot="right" alt="" class="img-icon right">

      </Head>
      <mytop></mytop>
      <mylist txt='风险承受能力评估'>
        <img src="./../components/img/my/图片3_11.png" alt="" slot="img1">
      </mylist>
       <mylist txt='安全保障'>
        <img src="./../components/img/my/图片3_18.png" alt="" slot="img1">
      </mylist>
       <mylist txt='我的关注'>
        <img src="./../components/img/my/图片3_20.png" alt="" slot="img1">
      </mylist>
       <mylist txt='帮助中心'>
        <img src="./../components/img/my/图片3_24.png" alt="" slot="img1">
      </mylist>
      <mylist txt='关于我们'>
        <img src="./../components/img/my/图片3_20.png" alt="" slot="img1">
      </mylist>
       <mylist txt='检查更新'>
        <img src="./../components/img/my/图片3_31.png" alt="" slot="img1">
      </mylist>
       <mylist txt='联系客服'>
        <img src="./../components/img/my/图片3_34.png" alt="" slot="img1">
      </mylist>
  </div>
</template>

<script>
import Head  from 'components/head'
import mytop from 'components/my/mytop'
import mylist from 'components/my/mylist'
export default {
  name:'my',
  components:{
    Head,mytop,mylist
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang='less'>
  div.my{
   
  }
</style>