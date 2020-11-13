import axios from './index'
export function carousel(){
    return axios({
        url:'/carousel',
        method:'get'
    })
}
//首页文章列表
export function homelist(){
    return axios({
        url:'/home',
        method:'get'
    })
}

export function login(){
    return axios({
        url:'/login',
        method:'post',
        data:{
            username:'wangwu',
            password:'1234567'
        }
    })
}

export function reg(user){
    console.log(user);
    return axios({
        url:'/register',
        method:'post',
        data:user
    })
}

export function group(){
    return axios({
        url:'/group',
        method:'get'
    })
}

export function movie(){
    return axios({
        url:'/movie_now',
        method:'get'
    })
}