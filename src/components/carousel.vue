<template>
  <div class="carousel">
    <swiper ref="mySwiper" :options="swiperOptions">
        <slot name="img"></slot>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>

export default {
    name:'carousel',
    mounted(){
       
    },
    data(){
        return {
            swiperOptions:{
                pagination:{
                    el:'.swiper-pagination'
                },
                autoplay:{
                    delay:this.autotime,
                    stopOnLastSlide:false,
                    disableOnInteraction:true,
                    effect:this.effect,
                }
            }
        }
    },
    props:{
        autotime:{
            type:Number,
            default:2000
        },
        effect:{
            type:String,
            default:'cube'
        }
    }
}
</script>

<style>

</style>