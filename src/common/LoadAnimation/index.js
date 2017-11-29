/*
* @Author: wzz
* @Date:   2017-10-31 10:25:00
* @Last Modified by:   wzz
* @Last Modified time: 2017-10-31 10:36:31
*/

import loadAnimation from './loadAnimation.vue'

const loading = {
	install: function(Vue){
		Vue.component('Loading',loadAnimation);
	}
}

export default loading