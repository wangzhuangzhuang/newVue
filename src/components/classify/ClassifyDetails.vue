<template>
	<div>
		<div v-show="Load">
        	<LoadAnimation></LoadAnimation>
        </div>
		<div class="fiexBox">
			<headerHtml :type="type" :text="text"></headerHtml>
			<div class="nav">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						 <div class="swiper-slide" v-for='v in brand' @click='tableFn($event,v.brand_id?v.brand_id:v.category_id)'>
						 	<span>{{v.brand_ch_name?v.brand_ch_name:v.category_name}}</span>
						 </div>
						  	
					</div>	
				</div>
			</div>
			<div class="sortWrap box">
	         			<div class="box-flex box box-pack-c box-align-c active" data-sort="0" @click="sortFn(0)">综合排序</div>
	         			<div class="box-flex box box-pack-c box-align-c" data-sort="1" @click="sortFn(1)">销量</div>
	         			<div class="box-flex box box-pack-c box-align-c soteJ" data-sort="2" @click="JsortFn($event)"><span>价格</span></div>
	         		</div>
		</div>
		<div class='content'>
			<droploadHtml ref='dropload'></droploadHtml>
		</div>
		
	</div>
</template>
<script type="text/ecmascript-6">
	import headerHtml from '../header/header.vue';
	import url from '../../Api/url.js';
	import dropload from '../../../static/js/dropload.min.js';
	import droploadHtml from '../function/dropload.vue';
	import LoadAnimation from '../function/LoadAnimation.vue';
	export default {
		data(){
			return {
				type:"ClassifyDetails",
				data:{
					category_id:this.$route.query.category_id,
					page:0,
					sort:0,
					table:0
				},
				brand:'',
				url:'category_class',
				Load:true,
				text:this.$route.query.category_name
			}
		},
		created(){
	                      
			 this.$http.post(url.url+"category_class",this.data,{emulateJSON:true}).then(function(res){
				   let data = res.body.data;
				  
				   this.brand = data.brand?data.brand:data.child_category;
				   this.$nextTick(function(){
				   	this.Load = false;
				   	 this.mySwiper() ;
				   	 this.$refs.dropload.droploadUrl(this.data,this.url);

				   })
			  	 },function(){

			  	 })
		  	

		},
		mounted(){
			   
		},
		methods:{
			tableFn(event,table){
				$(event.currentTarget).addClass("active").siblings().removeClass('active');
 			 	this.data.table = table;
 			 	this.data.page = 0;
 			 	$("#sPcontent_box").html("");
 			 	this.$refs.dropload.dropload.unlock();
 			 	this.$refs.dropload.dropload.noData(false);
 			 	this.$refs.dropload.dropload.resetload();
			},
			sortFn(sort){
				$(event.currentTarget).addClass("active").siblings().removeClass('active');
 			 	this.data.sort = sort;
 			 	this.data.page = 0;
 			 	$("#sPcontent_box").html("");
 			 	this.$refs.dropload.dropload.unlock();
 			 	this.$refs.dropload.dropload.noData(false);
 			 	this.$refs.dropload.dropload.resetload();
			},
			JsortFn(event){
				let obj = $(event.currentTarget);

				if(obj.find("span").hasClass('up')){
					obj.find("span").removeClass('up').addClass('bottom');
					this.data.sote = 3;
				}else if(obj.find("span").hasClass('bottom')){
					obj.find("span").removeClass('bottom').addClass('up');
					this.data.sote = 2;
				}else{
					obj.find("span").addClass('bottom');
					this.data.sote = 3;
				}
				this.data.page = 0;
 			 	$("#sPcontent_box").html("");
 			 	this.$refs.dropload.dropload.unlock();
 			 	this.$refs.dropload.dropload.noData(false);
 			 	this.$refs.dropload.dropload.resetload();
			},
			mySwiper(){

				var that = this;
				var mySwiper = new Swiper('.swiper-container',{
					slideToClickedSlide:true,
					centeredSlides : true,
					slidesPerView :'auto'
				});
				$(".swiper-wrapper").css('transform','translate3d(0,0,0)');
				var w = 0;
				$('.swiper-slide').each(function(index, el) {
					w += $(this).width()*1;
				});
				$(".nav").on('touchend',function(e){
					var  windowWidth = $(window).width()*1;
					var  lz = w - (windowWidth-10)+10;
					var l = $(".swiper-wrapper").css('transform');
					l =  l.replace(/3d/g,'end');
					l =  l.replace(/px/g,'');
					eval(l)
					if(w <= windowWidth){
						$(".swiper-wrapper").css('transform','translate3d(0,0,0)');
					};
					function translateend(x,y,z){
						if(x>=0){
							$(".swiper-wrapper").css('transform','translate3d(0,0,0)');
						}else{
							if(w*1+x*1 <= windowWidth-10){
								$(".swiper-wrapper").css('transform','translate3d('+(-lz)+'px,0,0)')
							} 
						}
					}
				});
				
			
			}
		},
		components:{
			headerHtml,
			droploadHtml,
			LoadAnimation
		}
	}
</script>	
<style lang="less">
	@import '../../assets/less/dropload.less';
	.header{
		position: inherit;
		width: 100%;
	}
	.nav{
		height: 35px;
		border-bottom: 1px solid #ccc;
		width: 100%;
		background: #fff;
	}
	.nav .swiper-slide{
		width: auto;
		height: 100%;
		line-height: 35px;
		padding-right:20px;
	}
	.nav .swiper-slide:first-child{
		padding-left: 20px;
	}
	.nav .swiper-slide:last-child{
		padding-right:5px;
	}
	.fiexBox{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	.sortWrap{
		width: 100%;
		height: 35px;
		border-bottom: 1px solid #ccc;
		background: #fff;
	}
	.content{
	    margin-top: 115px;
	    padding: 10px 0;
	}
	.sortWrap .active{
		color: #ff9600;
	}
	.nav .active{
		color: #ff9600;
	}
</style>