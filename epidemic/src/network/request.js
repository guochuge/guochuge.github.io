// 封装网络请求模块
import axios from 'axios';

export function request(config) {
  // 1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3007',
    timeout: 5000,
  })

  // 2. axios 的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3. 发送真正的网络请求
  // 返回的是一个 Promise 对象
  return instance(config)
}
