<template>
 <div class="login">
      <span><img src="./../img/broadcast/user_normal.jpg" alt=""></span>
      <span class="txt" @click="login">登录发广播</span>
    </div>
</template>

<script>
export default {
    name:'broadcast',
    methods:{
      login(){
        this.$router.push('/login');
      }
    }
}
</script>

<style scoped lang='less'>
    div.login{
    width: 100%;
    height: .59rem;
    border: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    font-size: .14rem;
    padding-left: .18rem;
    span img{
      width: .4rem;
      border-radius: .2rem;
    }
    span.txt{
      margin-left: .1rem;
    }
  }
</style>