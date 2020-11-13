<template>
  <div class="login">
      <div>用户名<input type="text" v-model="username"></div>
      <div>密码:<input type="password" v-model="password"></div>
      <div class="btn">
          <button @click="log"> 登录 </button> 
        <button @click="regi">注册</button>
     </div>
  </div>
</template>

<script>
import {login,reg} from './../request/request'
export default {
    data(){
        return {
            username:'wangwu',
            password:'1234567'
            
        }
    },
    methods:{
        regi(){
            reg({username:this.username,password:this.password}).then(res=>{
                console.log(res);
            })
        },
        log(){
            login().then(res=>{
                //console.log(res);
                sessionStorage.setItem('token',res.token);
                console.log(sessionStorage.getItem('token'));
                this.$router.push('/home');
            })
        }
    }
}
</script>

<style scoped lang='less'>
.login{
    font-size: .2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 30%;
    div.btn{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
}
</style>