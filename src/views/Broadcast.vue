<template>
  <div class="broadcast">
    <Head title="广播">
        <img src="./../components/img/broadcast/ic_status_search_user.png" slot="left" alt="" class="img-icon left">
        <img src="./../components/img/media/ic_chat_green.png" slot="right" alt="" class="img-icon right">

    </Head>
    <broadlog></broadlog>
    <bdairy></bdairy>
    <broadlist></broadlist>
    <broadlist></broadlist>
  </div>
            
</template>

<script>
import Head from './../components/head'
import broadlog from './../components/broadcast/broadlog'
import bdairy from './../components/broadcast/bdairy'
import broadlist from './../components/broadcast/broadlist'
export default {
  components:{
    Head,broadlog,bdairy,broadlist
  }
}
</script>

<style scoped lang='less'>
  
</style>