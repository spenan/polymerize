<!--
 * @Author: your name
 * @Date: 2021-07-20 16:28:42
 * @LastEditTime: 2021-07-20 17:02:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \polymerize\src\views\index.vue
-->
<template>
  <div>
    <van-nav-bar title="标题" />
    <van-tabbar v-model="active" @change="handelActive">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name:"Home",
  setup() {
    const active =ref(0)

    const handelActive=(e)=>{
      console.log(e)
      console.log(active.value)
    }

    return {
      active,
      handelActive
    }
  }
};
</script>

<style>
</style>