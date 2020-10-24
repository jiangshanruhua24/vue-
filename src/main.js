import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {obj} from 'assets/js/utils.js';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
//import req from './request/index'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  mounted(){
    obj.setRem();

     
    // req({
    //   url:'/list',
    //   method:'get'
    // }).then(res=>{
    //   console.log(res);
    // });
  },
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
