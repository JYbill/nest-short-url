import axios from 'axios';
// import { config ,success,fail} from 'vue/types/umd';
export function request(config){
  const instance = axios.create({
    baseURL:'/api1',
    timeout:10000
  })
  // 请求拦截
  // instance.interceptors.request.use(config=>{
  //     if (localStorage.getItem('token')) {

  //      config.headers.token = localStorage.getItem('token');

  //  }
  //   return config;
  // },err=>{
  //   console.log(err);
  //   return Promise.reject();
  // })
  // // 响应拦截
  // instance.interceptors.response.use(res=>{
  //   // console.log(res);
  //   return res.data
  // },err=>{
  //   console.log(err);
  // })
  return instance(config)
}