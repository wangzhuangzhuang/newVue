<template>
	<div class='sPcontent'>
		<div class="lists" id="sPcontent_box">
			
			<section v-for='v in goodsArr'> 
				<router-link  :to="'/details/'+v.goods_id">
					<dl class="commodity">
	 		  	 		<dt>
	 		  	 			<img class="lazy success" :data-src="v.goods_main_url" src="../../../static/images/default_load.png">
	 		  	 		</dt>
	 		  	 		<dd>
	 		  	 			<p class="apostrophe_n">{{v.goods_name}}</p>
	 		  	 			<p class="price mt-10 pb-10">￥80.00</p>
	 		  	 		</dd>
	 		  	   	 </dl>
 		  	   	 </router-link>   
			</section>
			 
		</div>	
	</div>
</template>
<script type="text/ecmascript-6">
	import url from '../../Api/url.js';
	import dropload from '../../../static/js/dropload.min.js';
	import Global from './Global.vue';
	export default {
		props:['Load'],
		data(){
			return {
				goodsArr:[],
				data:'',
				urlStr:''
			}
		},
		methods:{
			droploadUrl(data,urlStr){
				this.$nextTick(function(){
					this.data = data;
					this.ajaxFn (urlStr);
					this.urlStr = urlStr;
				})

			},
			ajaxFn (urlStr,k){

				var that = this;
			   	 that.$http.post(url.url+urlStr,that.data,{emulateJSON:true}).then(function(res){
				   let data = res.body.data;
			   	    if(that.Load){
			   	    	that.$emit('LoadFn');
			   	    };
				    if(res.body.code == '10000'){
				    	var goodsArr =  data.brand_goods?data.brand_goods:data.categoty_goods;
				    	goodsArr = goodsArr?goodsArr:data;
					that.goodsArr=that.goodsArr.concat(goodsArr);

 					if(goodsArr.length != 0 && goodsArr.length == 20){
 						Global.reset.LazyLoadImg("#sPcontent_box");
 						that.data.page = that.data.page+1;
 						that.dropload.resetload();
 					}else if(goodsArr.length == 0){
 						
 						that.dropload.lock('down');
					    	that.dropload.noData();
					    	that.dropload.resetload();
 					}else if(goodsArr.length <20 && k != 1){
 						
 						Global.reset.LazyLoadImg("#sPcontent_box");
 						that.dropload.lock('down');
					    	that.dropload.noData();
					    	that.dropload.resetload();
					}else if(goodsArr.length <20 && k == 1){
						Global.reset.LazyLoadImg("#sPcontent_box");
						that.dropload.resetload();
					}
				    }else if(res.body.code == "-10015"){
				    	that.dropload.lock('down');
				    	that.dropload.noData();
				    	that.dropload.resetload();
				    }
 				  //   if( k ==1){
				   //  	that.dropload.unlock();
	 			 	// that.dropload.noData(false);
	 			 	// that.dropload.resetload();

 				  //   }
			  	 },function(){

			  	 })
			},
			droploadFn (urlStr) {
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
							that.data.page = 0;
							that.ajaxFn(urlStr,1);
					},
					loadDownFn : function(me){
							that.ajaxFn(urlStr);	
					
					},
					threshold : 50
				});

			},
		},
		mounted(){
			
                              	
		},
		updated:function(){
    	                 
		},
		watch:{
			urlStr:function(){
			    this.droploadFn(this.urlStr)
				
			}
		}

	}

</script>
<style lang="less">
	.sPcontent section {
	    width: 50%;
	    float: left;
	    img{
	    	width: 100%;
	    	
	    }
	    dl{
		    background: #fff;
		    border: 1px solid #e6e6e6;
		    border-radius: 5px;
		    overflow: hidden;
	    }
	    .commodity{
	    	margin-bottom: 10px;
	    }
	    &:nth-of-type(even) .commodity{
            margin-right: 10px;
            margin-left: 5px;
	    }
	    &:nth-of-type(odd) .commodity{
	    	margin-left:10px;
            margin-right:5px;
	    }
	  
	}
	
	#sPcontent_box{
		overflow: hidden;
	}
	.dropload-down{
		width: 100%;
	}
</style>
