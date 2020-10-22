<template>
  <div id="app">
    <div id="nav">
        <home></home>
        <foot></foot>
    </div>
   
  </div>
</template>
<script>
import './assets/css/common.css';
import foot from './components/foot'
import home from './views/Home'
export default{
  components:{
    foot,home
  }
}
</script>
<style lang="less">

</style>
