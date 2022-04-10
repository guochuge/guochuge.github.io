import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Coupe = () => import('views/coupe/Coupe')
const Conditions = () => import('views/conditions/Conditions')
const Attentions = () => import('views/attentions/Attentions')

// 1. 安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/coupe',
    component: Coupe,
  },
  {
    path: '/attentions',
    component: Attentions,
  },
  {
    path: '/conditions',
    component: Conditions,
  },


]

// 2. 创建路由对象
const router = new VueRouter({
  routes,
  base: __dirname,
  mode: 'history'
})

// 3. 导出 router
export default router
