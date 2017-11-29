/*asdasdasdasdsa
* @Author: wzz
* @Date:   2017-09-25 16:32:07
* @Last Modified by:   wzz
* @Last Modified time: 2017-10-31 11:28:36
*/
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

const state = {
			show:false,         //、、、首页数据
			classify:false      //、、、分类数据
       };

const actions = {
		count:({commit,state},n) =>{
			console.log(n)
			/*commit('count');*/	
		}
	};

const mutations = {

	count(){
		alert(112)
	}

}
export default new vuex.Store({
    state,
    mutations,
    actions
})