<template>
  <div class="reg">
      <div>用户名<input type="text" v-model="username"></div>
      <div>密码:<input type="password" v-model="password"></div>
      <div class="btn">
          <button @click="login"> 登录 </button> 
        <button @click="regi"> 注册 </button>
     </div>
  </div>
</template>

<script>
import {reg} from './../request/request'
export default {    
    data(){
        return {
            password:'',
            username:''
        }
    },
    methods:{
        regi(){
            reg({username:this.username,password:this.password}).then(res=>{
                console.log(res);
            })
           
        },
        login(){
            
        }
    },
    mounted(){

    }
}
</script>

<style scoped lang='less'>
.reg{
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