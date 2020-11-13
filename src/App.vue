<template>
  <div id="app">
    
      <router-view></router-view>
      
      <foot></foot>
   
   
  </div>
</template>
<script>
import 'assets/css/common.css';
import foot from 'components/foot'

export default{
  components:{
    foot
  }
}
</script>
<style  lang="less">
body{overflow:hidden;}
 #app{
   height: 100%;
   overflow-y: auto;
 }
</style>
