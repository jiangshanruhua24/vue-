import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path:'/my',
    name:'My',
    component: ()=> import ('../views/My') 
  },
  {
    path:'/group',
    name:'Group',
    component: ()=> import ('../views/Group') 
  },
  {
    path:'/media',
    name:'Media',
    component: ()=> import ('../views/Media') 
  },
  {
    path:'/broadcast',
    name:'Broadcast',
    component: ()=> import ('../views/Broadcast') 
  }
 
]

const router = new VueRouter({
  routes
})

export default router
