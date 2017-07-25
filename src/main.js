// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routers from './routers';

// 安装 "VueRouter"这个插件
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
 
const router = new VueRouter({
  mode: 'history',
  routes: routers
})
let app = new Vue({
  router
}).$mount('#app');
/*  router.push('');*/
export default app;

