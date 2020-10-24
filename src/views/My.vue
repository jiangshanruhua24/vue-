<template>
  <div class="my">
      <Head title="我的">
        <img src="./../components/img/my/ic_settings.png" slot="right" alt="" class="img-icon right">
        
      </Head>
      <mytop></mytop>
  </div>
</template>

<script>
import Head  from 'components/head'
import mytop from 'components/my/mytop'
export default {
  name:'my',
  components:{
    Head,mytop
  }
}
</script>

<style>

</style>