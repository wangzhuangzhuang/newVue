// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routers from './routers'; /////路由
require('vue2-animate/dist/vue2-animate.css') /////动画
import store from './store'
import Global from './components/function/Global.vue';
import loadAnimation from './common/LoadAnimation';
require('../static/css/layer.css')
require('../static/js/layer.js')
// 安装 "VueRouter"这个插件
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(loadAnimation)
const router = new VueRouter({
	mode: 'hash',
	routes: routers,
	base: __dirname,
	linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.login)) { //这里meta字段的名称要与上面route里面保持一致
		var id = Global.Cookie.get('id');
		if(!id) { // 自己的判断条件
			next({
				path: '/login', // 重定向后的路由
				query: {
					redirect: to.fullPath// 登录成功之后可以根据query中的内容跳转回原来的路由(页面)
				} 
			})
		} else {
			next()
		}
	} else {
		next() // 确保一定要调用 next()
	}

})
let app = new Vue({
	router,
	store,
}).$mount('#app');

export default app;