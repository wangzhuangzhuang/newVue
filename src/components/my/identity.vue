<template>
	<div id="identity">
		<div v-show="Load">
        	<LoadAnimation></LoadAnimation>
        </div>
        <headerHtml :type="type" :text="text"></headerHtml>
        <div class="identity_content">
        	<h1 class="back-f h1">提示：每个身份证每天购买保税仓商品的上限为￥2000，每年为￥20000，如果超出限额将会造成订单清关失败。</h1>
        	<ul class="back-f">
        		<li class="box box-pack-j box-align-c" v-for="v in identity">
        			<div class="">
        				<span class="mr-15">{{v.card_name}}</span>
        				<span>{{v.card_num}}</span>
        			</div>
        			<div class="">
        				<span class="mr-15">编辑</span>
        				<span>删除</span>
        			</div>
        		</li>
        	</ul>
        </div>
	</div>
</template>
<script type="text/ecmascript-6">
	import headerHtml from '../header/header.vue';
	import LoadAnimation from '../function/LoadAnimation.vue';
	import url from '../../Api/url.js';
	import Global from '../function/Global.vue';
	export default 
	{
		data()
		{
			return {
				type:"",
				data:{
					user_id:Global.Cookie.get('id'),
				},
				url:'all_order',
				Load:true,
				text:"我的身份证",
				identity:[]
			}
		},
		methods:{
			init()
			{
				this.getDate();
				let that = this;
				setTimeout(function(){
					that.$destroy();
				},3000)
			},
			getDate()
			{
				this.$http.post(url.url+"user_card",this.data,{emulateJSON:true}).then(function(res){
				   	let data = res.body.data;
			    	this.identity = data;
			    	this.Load = false;
			  	},function(){

			  	})
			}
		},
		beforeDestroy(){
			alert(1)
		},
		mounted(){
			this.init();
			/*this.$http.post(url.url+"user_card",this.data,{emulateJSON:true}).then(function(res){
			   
		  	},function(){

		  	})*/
		},
		components:
		{
			headerHtml,
			LoadAnimation
		}
	}
</script>
<style lang='less' scoped>
	.identity_content{
		h1{
			padding: 10px;
			line-height: 20px;
			color: red;
			border-bottom: 1px solid #E7E7E7;
		}
		li{
			height: 50px;
			padding: 0 15px;
			border-bottom: 1px solid #E7E7E7;
		}
	}
</style>