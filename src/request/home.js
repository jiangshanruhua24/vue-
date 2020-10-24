import req from './index'
export function f_carousel(){
    return req({
        url:'/carousel',
        method:'get'
    })
}
//首页文章列表
export function f_homelist(){
    return req({
        url:'/list',
        method:'get'
    })
}