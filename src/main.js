// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';				
import routers from './routers';                    /////路由
/*require('vue2-animate/dist/vue2-animate.min.css')  /////动画*/
import store from './store'


require('../static/css/layer.css')
require('../static/js/layer.js')
// 安装 "VueRouter"这个插件
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)




 
const router = new VueRouter({
  mode: 'hash',
  routes: routers,
  base:__dirname,
  linkActiveClass :'active'
})
let app = new Vue({
  router,
  store,
}).$mount('#app');
 
export default app;

