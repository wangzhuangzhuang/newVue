<template>
	<div>
		<div>
		    用户名：<input type="text">
		    密码： <input type="text">
		</div>
		<button v-on:click="btn()">登录</button>
	</div>
</template>	
<script type="text/ecmascript-6">
 import jquery from 'jquery';
  export default {
  	 props:['datas'],
  	 data() {
       return {
          scroll: '',
          data:"",
          text:"首页123"
       };
    },
     mounted(){
       
     },
     methods:{
     	btn:function(){
     		   
     	}
     }
     
  }
</script>  