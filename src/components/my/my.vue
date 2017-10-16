<template>
	<div>
		<div class="headPortrait box box-pack-c box-align-c box-orient-vs" style="-webkit-box-orient: vertical;">
         		<div class="resetheadImg">
         			<img :src="src" id="user_image">
         		</div>
         		<div class="resetuserName" id="user_nickname">{{text}}</div>
				<div class="franchisee text-c" style="display: block;" v-if="join_type == 1">{{store_name}}</div>
				<div class="franchisee text-c" style="display: block;" v-if="join_type == 2">门店会员：{{store_name}}</div>
        </div>
        <div>

        	<div class="urlText">
            	<a class="box box-pack-j box-align-c" href="myOrder.html">
            		<div>我的订单</div>
            		<div class="back-r">查看全部订单</div>
            	</a>
            </div>
            <div class="urlText">
	            <a class="box box-pack-j box-align-c" href="customerService.html">
	                  <div>售后订单</div>
	                  <div class="back-r">查看售后订单</div>
	               </a>
            </div>
            <div class="urlText mt-10 border-t">
            	<a class="box box-pack-j box-align-c" href="identity.html">
            		<div>我的身份证</div>
            		<div class="back-r">&nbsp;</div>
            	</a>
            </div>
            <div class="urlText">
            	<a class="box box-pack-j box-align-c" href="MySite.html">
            		<div>我的收货地址</div>
            		<div class="back-r">&nbsp;</div>
            	</a>
            </div>
            <div class="urlText mt-10 border-t">
            	<a href="Collection.html" class="box box-pack-j box-align-c">
            		<div>收藏</div>
            		<div class="back-r">&nbsp;</div>
            	</a>
            </div>
            <div class="urlText">
            	<a href="evaluate.html" class="box box-pack-j box-align-c">
            		<div>我的评价</div>
            		<div class="back-r">&nbsp;</div>
            	</a>
            </div>
            <div class="urlText">
            	<a class="box box-pack-j box-align-c" href="healthy.html">
            		<div>健康订制</div>
            		<div class="back-r">&nbsp;</div>
            	</a>
            </div>
            <div class="urlText mt-10 border-t" id="SignOut" @click="SignOut">
            	<span class="box box-pack-c box-align-c tui">
            		退出当前账号
            	</span>
            </div>
            <div class="user_loading" @click='login' v-show="show"></div>
        </div>
        <footerHTML :type='type'></footerHTML>
	</div>
</template>
<script type="text/ecmascript-6">
	import footerHTML from '../footer/footer.vue';
	import Global from '../function/Global.vue';
	import url from '../../Api/url.js';
	export default {
		props:['data'],
		data() {
			return {
				type:"3",
				parent:this.data,
				show:true,
				user_id:Global.Cookie.get('id'),
				src:"../../../static/images/head.png",
				text:'洋窝儿（未登录）',
				join_type:'',
				store_name:''

			};
		},
		methods:{
			login(){
				this.$router.push("/login");
			},
			user_loading(){
				if(this.user_id){
					this.show = false;
					this.my(this.user_id)
				}
			},
			my(user_id){
				let that = this;
				this.$http.post(url.url+"my",{'user_id':user_id},{emulateJSON:true}).then(
	                  function (res) {
	                 	 that.src = res.body.data.user_image;
	                 	 that.text= res.body.data.user_nickname;
	                 	 that.join_type =res.body.data.join_type;
	                     that.store_name = res.body.data.store_name;
	                  },function (res) {
	                  // 处理失败的结果
	                  }
	             );
			},
			SignOut(){
				let that = this;
				layer.open({
	                content: "退出成功",
	                skin: 'msg',
	                time:1,
	                end:function(){
	                	Global.Cookie.delete('id');
	                	that.$router.go(0);
	                }
	              });
				
			}
		},
		mounted(){

            this.$nextTick(function(){
            	this.user_loading()	
            });
				

		},
		components: {
			footerHTML
		}
	}
</script>
<style lang='less'>
	.headPortrait{
		width: 100%;
		height: 205px;
		background: url('../../../static/images/headBack.jpg') no-repeat;
		background-position: center;
    	background-size: 100% auto;
    	position: relative;
	}

	
	.resetheadImg{
		    width: 85px;
		    height: 85px;
		    overflow: hidden;
		    img{
		    	display: block;
			    width: 100%;
			    height: 100%;
			    border-radius: 100%;
		    }
	}
	.resetuserName {
	    font-size: 16px;
	    color: #fff;
	    margin-top: 15px;
	}
	.franchisee{
		position: absolute;
		width: 100%;
	    height: 25px;
	    background: rgba(255,150,0,0.5);
	    left: 0;
	    bottom: 0;
	    line-height: 25px;
	    color: #FFFFFF;
	}
	.urlText{
		height: 40px;
	    border-bottom: 1px solid #e7e7e8;
	    padding: 0 12px;
	    background: #fff;
	}
	.urlText a, .urlText .tui {
	    height: 40px;
	    font-size: 14px;
    }
    .back-r {
	    background: url('../../../static/images/Arrow.png') no-repeat right center;
	    background-size: 11px auto;
	    padding-right: 20px;
	}
	.user_loading{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 49px;
		z-index: 9999999999;
	}
</style>