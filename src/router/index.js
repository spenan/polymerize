/*
 * @Author: your name
 * @Date: 2021-07-20 16:21:13
 * @LastEditTime: 2021-07-20 16:29:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \polymerize\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  }
]
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes
})
export default router
