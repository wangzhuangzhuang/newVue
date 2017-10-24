<template>
	<div class='searchResult'>
		<div v-show="Load">
                    		<LoadAnimation></LoadAnimation>
                	</div>
                	<div class="fiexBox">
                		<headerHtml :type="type" :text="text"></headerHtml>
                		<div class="sortWrap box">
	         			<div class="box-flex box box-pack-c box-align-c active" data-sort="0" @click="sortFn(0)">综合排序</div>
	         			<div class="box-flex box box-pack-c box-align-c" data-sort="1" @click="sortFn(1)">销量</div>
	         			<div class="box-flex box box-pack-c box-align-c soteJ" data-sort="2" @click="JsortFn($event)"><span>价格</span></div>
	         		</div>
                	</div>
                	<div class='content searchResultContent'  >
			<droploadHtml ref='dropload' :Load='Load' v-on:LoadFn='LoadFn'></droploadHtml>
		</div>
                	
	</div>
</template>	
<script type="text/ecmascript-6">
	import headerHtml from '../header/header.vue';
	import droploadHtml from '../function/dropload.vue';
	import LoadAnimation from '../function/LoadAnimation.vue';
	import url from '../../Api/url.js';
	export default {
		data(){
			return {
				Load:true,
				type:'searchResult',
				text:this.$route.query.keyword,
				data:{
					keyword:this.$route.query.keyword,
					sort:0,
					page:0
				},
				url:'sy_ssy_list',
			}
		},
		mounted(){
			var that = this;
			setTimeout(function(){
	               that.$refs.dropload.droploadUrl(that.data,that.url,[]);
			},1000)
	                       
		},
		methods:{
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
			LoadFn(){
				this.Load = false;
			}

		},
		watch: {
            '$route' (to, from) {
            	
               this.$router.go(0);
                //this.init(this.getStatus(this.$route.path));
            }
       	},
		components:{
			headerHtml,
			droploadHtml,
			LoadAnimation
		}
	}
</script>
<style lang="less" scoped>
  .searchResultContent{
  	margin-top: 80px;
  }
</style>