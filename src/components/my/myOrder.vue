<template>
	<div>
		<div v-show="Load">
        	<LoadAnimation></LoadAnimation>
        </div>
        <div>
        	<headerHtml :type="type" :text="text"></headerHtml>
        	<div>
        		<div class="nav">
					<ul class="nav_list back-f">
						<li class="active" @click='tableFn(0)'>全部订单</li>
						<li @click='tableFn(1)'>待付款</li>
						<li @click='tableFn(2)'>待发货</li>
						<li @click='tableFn(3)'>待收货</li>
						<li @click='tableFn(4)'>待评价</li>
					</ul>
				</div>
        	</div>
    		<div class='sPcontent pt-10'>
				<div class="lists" id="sPcontent_box">
					<div class="orderStyle"  v-for='v in goods'>
			       	    <header class="box box-pack-j box-align-c">
			       	   	  <p>{{v.add_time | formatDateS}}</p>
			       	   	  <p class="ff96 order_statusText">{{v.order_status | order_statusFilters}}</p>
			       	    </header>
		       	        <dl class="orderDl box" v-for='x in v.order_goods'>
			       	   	  	<dt>
			       	   	  		<img :src="x.goods_main_url" class="img">
			       	   	 	 </dt>
			       	   	  	<dd class="box-flex box box-orient-v box-pack-j ml-10">
				       	   	  	<h1 class="apostrophe_n f-14">{{x.goods_name}}</h1>
				       	   	  	<div>
				       	   	  	  	<p class="subtitle">{{x.sku_name}}</p>
			       	   	  	   		<div class="box box-pack-j mt-10 f-14">
				       	   	  	   	    <div class="price">￥{{x.app_price}}</div>
				       	   	  	   	    <div>X{{x.sku_buy_num}}</div>
				       	   	  	  	</div>
				       	   	 	</div>
			       	   	  	</dd>
			       	   </dl>
			       	   <div class="text-r">
			       	   	   共{{v.goods_count}}件商品 合计：<span class="f-16">￥{{v.actual_price}}</span><span class="subtitle">（含运费0.00元）</span>
			       	   	</div>
			       	   	<div class="text-r" v-if="v.order_status == 0">
				       	   	<button class="btn">
				       	   		取消订单
				       	   	</button>
				       	   	<button class="btn btn-active ml-10 del_order_1">付款</button>
			       	   	</div>
			       	   	<div class="text-r" v-else-if="v.order_status == 1">
				       	   	<button class="btn">
				       	   		申请退款
				       	   	</button>
			       	   	</div>
			       	   	<div class="text-r" v-else-if="v.order_status == 2">
				       	   	<button class="btn">
				       	   		查看物流
				       	   	</button>
				       	   	<button class="btn btn-active ml-10 del_order_1">确认收货</button>
			       	   	</div>
			       	   	<div class="text-r" v-else-if="v.order_status == 3">
				       	   	<button class="btn">
				       	   		查看物流
				       	   	</button>
				       	   	<button class="btn  ml-10 del_order_1">晒单评价</button>
			       	   	</div>
			       	  
			       </div>
				</div>
			</div>
        </div>
	</div>
</template>
<script type="text/ecmascript-6">
	import headerHtml from '../header/header.vue';
	import url from '../../Api/url.js';
	import Global from '../function/Global.vue';
	import LoadAnimation from '../function/LoadAnimation.vue';
	import {formatDate}  from '../../common/formatDate.js';
	export default 
	{
		data()
		{
			return {
				type:"myOrder",
				data:{
					type:0,
					user_id:Global.Cookie.get('id'),
					page:0
				},
				url:'all_order',
				Load:true,
				text:"我的订单",
				goods:[]
			}
		},
		mounted(){
			
				this.droploadFn ();
			/**/
		},
		methods:{
			droploadFn () {
				let that = this;
			 	that.dropload = $('.sPcontent').dropload({
					scrollArea : window,
					domUp : {
						domClass   : 'dropload-up',
						domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
						domUpdate  : '<div class="dropload-update">松开立即刷新</div>',
						domLoad    : '<div class="dropload-load"><span class="loading"></span>正在刷新数据中...</div>'
					},
					domDown : {
						domClass   : 'dropload-down',
						domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
						domLoad    : '<div class="dropload-load"><span class="loading"></span>正在加载数据中...</div>',
						domNoData  : '<div class="dropload-noData"></div>'
					},
					loadUpFn : function(me){
							$("#sPcontent_box").html('');
							that.goods=[];
							that.data.page = 0;
							that.ajaxFn(1);
					},
					loadDownFn : function(me){
							
							that.ajaxFn();
						
					},
					threshold : 100
				});

			},
			ajaxFn(k){
				var that = this;
				this.$http.post(url.url+"all_order",this.data,{emulateJSON:true}).then(function(res){
				   	let data = res.body.data?res.body.data:[];
				   	that.Load=false;
					if(data.length != 0){
						    that.goods=that.goods.concat(data);
							that.$nextTick(function(){
								if(data.length == 20){
									that.data.page = that.data.page+1;
									that.dropload.resetload();
								}else if(data.length <20 && k != 1){
									that.dropload.lock('down');
								    that.dropload.noData();
						           	that.dropload.resetload();
								}; 
								if(data.length == 20 && k == 1){
									that.dropload.unlock();
									that.dropload.noData(false);
							        that.dropload.resetload();
								}else if(data.length < 20 && k == 1){
									that.dropload.resetload();
								}
								//Global.reset.LazyLoadImg("#sPcontent_box");
							})
							
						}else{
							that.dropload.lock('down');
					    	that.dropload.noData();
					    	that.dropload.resetload();
						}
			  	},function(){

			  	 })
			},
			tableFn(type){
				this.data.type=type;
				$(event.currentTarget).addClass('active').siblings().removeClass('active');
				$("#sPcontent_box").html('');
				this.goods=[];
				this.data.page = 0;
				this.dropload.unlock();
 			 	this.dropload.noData(false);
 			 	this.dropload.resetload();
			}
		},
		filters: {
            formatDateS(time) {
                var date = new Date(time*1000);
                return formatDate(date,"yyyy-MM-dd hh:mm");
            },
            order_statusFilters(k){
        		 if( k == 0){
                 	return '等待付款'
                 }else if( k == 1){
                 	return '待发货'
                 }else if( k == 2){
                 	return '待收货'
                 }else if( k == 3){
                 	return '交易成功'
                 }else if( k == 4){
                 	return '交易成功'
                 }else if( k == 5){
                 	return '退款审核中'
                 }else if( k == 6){////退款成功
                 	return '交易关闭'
                 }else if( k == 13){
                 	return '交易关闭'
                 }
            }

        },
		components:
		{
			headerHtml,
			LoadAnimation
		}
	}
</script>
<style lang="less">
	.orderStyle {
	    margin-bottom: 10px;
	    border-top: 1px solid #efeeee;
	    border-bottom: 1px solid #efeeee;
	    display: block;
	    width: 100%;
	    background: #fff;
	    padding-bottom: 10px;
	    header {
		    height: 30px;
		    border-bottom: 1px solid #efeeee;
		    padding: 0 10px;
		}
		.orderDl {
		    padding: 10px;
		    border-bottom: 1px solid #efeeee;
		}
		dt{
			width: 0.89rem;
			height: 0.89rem;
		}
		.text-r{
		    padding: 10px;
		    padding-bottom: 0;
		}
	}
	
</style>
<style lang='less' scoped>
	.nav_list{
		height:45px;
		overflow: hidden;
		border-bottom: 1px solid #ccc;
		li{
			float: left;
			width: 20%;
			height: 100%;
			line-height: 45px;
			text-align: center;
		}
		li.active{
			color:#ff9600;
		}
	}
</style>