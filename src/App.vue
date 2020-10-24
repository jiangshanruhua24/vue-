<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
      
      <foot></foot>
    </div>
   
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
<style scoped lang="less">

</style>
