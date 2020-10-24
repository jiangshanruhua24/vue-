<template>
    <div class="home">
    <Head title="">
        <div class="ipt-group" slot="homesearch">
            <img src="./../components/img/home/ic_group_search_small.png" >
            <input type="text" name="" class="ipt" placeholder="影视 图书 唱片 小组名">
            <img src="./../components/img/home/ic_scan_gray.png" alt="">
        </div>
        <img src="./../components/img/home/ic_chat_white.png" slot="right" class="img-icon right">
    </Head>
    <Carousel :autotime='1500' :effect="cube">
        <swiper-slide slot="img">
           <img src="./../components/img/home/01.jpg" alt="">
        </swiper-slide>
        <swiper-slide slot="img">
           <img src="./../components/img/home/02.jpg" alt="">
        </swiper-slide>
        <swiper-slide slot="img">
           <img src="./../components/img/home/03.jpg" alt="">
        </swiper-slide>
    </Carousel>     
    </div>
</template>

<script>
import Head from './../components/head'
import Carousel from 'components/carousel'
//import {f_carousel,f_homelist} from 'request/home'
export default {
    name:'Home',
    components:{
        Head,Carousel
    },
    data(){
        return {
            cube:'cube'

        }
    },
    mounted(){
        // f_carousel().then(res=>{
        //     console.log(res);
        // }),
        // f_homelist().then(res=>{
        //     console.log(res);
        // })
    }
}
</script>

<style scoped lang='less'>
    .home{
        
        .head{
            background-color: #48bd5a;
            overflow: hidden;
        }
        .ipt-group{
            width: 2.723rem;
            height: .3rem;
            background-color: #fff;
            border-radius: .05rem;
            margin-top: .08rem;
            margin-left: .05rem;
            display: flex;
            align-items: center;
            padding: 0 .17rem 0rem .05rem;
        }
        .ipt{
            flex: 1;
            height: .3rem;
            
            border: none;
            font-size: .12rem;
            color: #a7a6a6;
            outline: none;
        }
        .ipt-group>img{
            width: .2rem;
            height: .2rem;
        }
    }
</style>