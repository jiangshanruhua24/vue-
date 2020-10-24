import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    name:'Home',
    component: ()=> import ('views/Home.vue')
  },
  {
    path:'/',
    component:()=> import('views/Home.vue'),
    redirect:'home'
  },
  {
    path:'/my',
    name:'My',
    component: ()=> import ('views/My.vue') 
  },
  {
    path:'/group',
    name:'Group',
    component: ()=> import ('views/Group') 
  },
  {
    path:'/media',
    component: ()=> import ('views/Media'),
    children:[
      {
        path:'movie',
        component:()=> import ('./../components/media/movie.vue')
      },
      {
        path:'tv',
        component:()=>import('./../components/media/tv.vue')
      },
      {
        path:'book',
        component:()=>import('./../components/media/book.vue')
      },
      {
        path:'city',
        component:()=>import('./../components/media/city.vue')
      },
      {
        path:'music',
        component:()=>import('./../components/media/music.vue')
      },
      {
        path:'/',
        component:()=> import('./../components/media/movie.vue'),
        redirect:'movie'
      }
    ]
  },
  {
    path:'/broadcast',
    name:'Broadcast',
    component: ()=> import ('views/Broadcast') 
  }
 
]

const router = new VueRouter({
  routes
})

export default router
