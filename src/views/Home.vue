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
    <!-- <Carousel :autotime='time' effect="cube">
        <template slot="img">
        <swiper-slide v-for="item in imgarr" :key="item" >
            <img :src="item" alt="">
        </swiper-slide>

        </template>
    </Carousel> -->
    <Carousel :autotime='time' effect="cube">
        <template slot="img">
        <swiper-slide v-for="item in arr2" :key="item" >
            <img :src="item" alt="">
        </swiper-slide>

        </template>
    </Carousel>
    <homelist v-for="item in list" :key="item.id" :title="item.title" :url='item.target.cover_url'
    :desc='item.target.desc' :author='item.target.author.name'>

    </homelist>
    </div>
</template>

<script>
import Head from './../components/head'
import Carousel from 'components/carousel'
import homelist from 'components/home/homelist'
import {carousel,homelist as home} from './../request/request'
export default {
    name:'Home',
    data(){
        return{
            time:1500,
            arr2:[],
            list:[],
        }
    },
    components:{
        Head,Carousel,homelist
    },
    mounted(){
        carousel().then(res=>{
            //console.log(res);
            //this.imgarr=res.list1;
            this.arr2=res.list;
        })
        home().then(res=>{
            console.log(res);
            this.list=res.recommend_feeds;
        })
    }
}
</script>

<style scoped lang='less'>
    .home{
        overflow-y: auto;
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