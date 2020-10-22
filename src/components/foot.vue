<template>
  <div class="foot">
      <div>
          <router-link to="/home">
          <img src="./img/foot/ic_tab_home_active.png" alt="" class="active">
          <img src="./img/foot/ic_tab_home_normal.png" alt="" class="normal">
          <span>首页</span>
          </router-link>
      </div>
      <div>
          <router-link to="/media">
          <img src="./img/foot/ic_tab_subject_normal.png" alt="" class="normal">
          <img src="./img/foot/ic_tab_subject_active.png" alt="" class="active">
          <span>书影音</span>
          </router-link>
      </div>
      <div>
          <router-link to="/broadcast">
          <img src="./img/foot/ic_tab_status_normal.png" alt="" class="normal">
          <img src="./img/foot/ic_tab_status_active.png" alt="" class="active">
          <span>广播</span>
          </router-link>
      </div>
      <div>
          <router-link to="/group">
          <img src="./img/foot/ic_tab_group_normal.png" alt="" class="normal">
          <img src="./img/foot/ic_tab_group_active.png" alt="" class="active">
          <span>小组</span>
          </router-link>
      </div>
      <div>
          <router-link to="/my">
          <img src="./img/foot/ic_tab_profile_normal.png" alt="" class="normal">
          <img src="./img/foot/ic_tab_profile_active.png" alt="" class="active">
          <span>我的</span>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'foot'
}
</script>

<style lang='less'>
    div.foot{
        display: flex;
        position: absolute;
        bottom: 0;
        height: .49rem;
        border-top: .01rem solid #ccc;
        width: 100%;
        font-size: 0;
        div {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            a{
                display: flex;
                flex-direction: column;
                font-size: .12rem;
                height: 100%;
                align-items: center;
                margin-top: .04rem;
                img{
                    width: .24rem;
                }
                .active{
                    display: none;
                }
                .normal{
                    display: block;
                }
            }
            a.router-link-active{
                span{
                    color: #42bd56;
                }
                .active{
                    display: block;
                }
                .normal{
                    display: none;
                }
            }
        }
    }
</style>