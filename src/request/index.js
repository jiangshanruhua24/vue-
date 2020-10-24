import axios from 'axios';
export default function(config){
    //instance就是实例化的axios对象
    const instance =axios.create({
        baseURL:'/api',
        timeout:2000,
        headers:{
            
        }
    });
    //拦截请求
    instance.interceptors.request.use(function(config){
        //config.headers[]
        return config;
    },function(error){
        return Promise.reject(error);
    });
    //拦截响应
    instance.interceptors.response.use(function(response){
        return response;
    },function(error){
        return Promise.reject(error);
    })
    return instance(config);
}