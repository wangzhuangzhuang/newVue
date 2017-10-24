<template>
	<div>
		  <div v-show="Load">
	             	 <LoadAnimation></LoadAnimation>
	              </div>
	              <div id="content">
	              	<section class="mb-10 back-f" v-for='v in data'>
	              		<div>
	              			 <router-link :to="'ClassifyDetails?category_id='+v.category_id+'&category_name='+v.category_name">
	              				<img :data-src="v.category_image" class="img lazy" src='../../../static/images/default2.png'>
	              			</router-link>   
	              		</div>
	              		<nav class="classNav">
	              			 <router-link v-for='x in v.categoty_keyword' :to="'searchResult?keyword='+x.category_keyword">
	              			 	 {{x.category_keyword}}
	              			</router-link>   
	              			<!-- <a v-for='x in v.categoty_keyword' href="#" >{{x.category_keyword}}</a> -->
	              		</nav>
	              		<div class="swiper-box o-h">
	              			<section v-for='x in v.child_category'>
	              				 <router-link :to="'ClassifyDetails?category_id='+x.category_id+'&category_name='+x.category_name">
		              				<dl>
		              					<dt>
		              						<img :data-src="x.category_image" class="img lazy" src='../../../static/images/default_load.png'>
		              					</dt>
		              					<dd>
		              						<p class='SpecialEllipsis text-c'>
		              							{{x.category_name}}
		              						</p>
		              					</dd>
		              				</dl>
	              				</router-link>   
	              			</section>

	              		</div>	
	              	</section>
	              	<section class="mb-10 back-f" v-for='v in data'>
	              		<div>
	              			 <router-link :to="'ClassifyDetails?category_id='+v.category_id+'&category_name='+v.category_name">
	              				<img :data-src="v.category_image" class="img lazy" src='../../../static/images/default2.png'>
	              			</router-link>   
	              		</div>
	              		<nav class="classNav">
	              			 <router-link v-for='x in v.categoty_keyword' :to="'searchResult?keyword='+x.category_keyword">
	              			 	 {{x.category_keyword}}
	              			</router-link>   
	              			<!-- <a v-for='x in v.categoty_keyword' href="#" >{{x.category_keyword}}</a> -->
	              		</nav>
	              		<div class="swiper-box o-h">
	              			<section v-for='x in v.child_category'>
	              				 <router-link :to="'ClassifyDetails?category_id='+x.category_id+'&category_name='+x.category_name">
		              				<dl>
		              					<dt>
		              						<img :data-src="x.category_image" class="img lazy" src='../../../static/images/default_load.png'>
		              					</dt>
		              					<dd>
		              						<p class='SpecialEllipsis text-c'>
		              							{{x.category_name}}
		              						</p>
		              					</dd>
		              				</dl>
	              				</router-link>   
	              			</section>

	              		</div>	
	              	</section>
	              	<section class="mb-10 back-f" v-for='v in data'>
	              		<div>
	              			 <router-link :to="'ClassifyDetails?category_id='+v.category_id+'&category_name='+v.category_name">
	              				<img :data-src="v.category_image" class="img lazy" src='../../../static/images/default2.png'>
	              			</router-link>   
	              		</div>
	              		<nav class="classNav">
	              			 <router-link v-for='x in v.categoty_keyword' :to="'searchResult?keyword='+x.category_keyword">
	              			 	 {{x.category_keyword}}
	              			</router-link>   
	              			<!-- <a v-for='x in v.categoty_keyword' href="#" >{{x.category_keyword}}</a> -->
	              		</nav>
	              		<div class="swiper-box o-h">
	              			<section v-for='x in v.child_category'>
	              				 <router-link :to="'ClassifyDetails?category_id='+x.category_id+'&category_name='+x.category_name">
		              				<dl>
		              					<dt>
		              						<img :data-src="x.category_image" class="img lazy" src='../../../static/images/default_load.png'>
		              					</dt>
		              					<dd>
		              						<p class='SpecialEllipsis text-c'>
		              							{{x.category_name}}
		              						</p>
		              					</dd>
		              				</dl>
	              				</router-link>   
	              			</section>

	              		</div>	
	              	</section>
	              </div>
	              <footerHTML :type='2'></footerHTML>
	</div>
</template>	
<script type="text/ecmascript-6">
	import url from '../../Api/url.js';
	import LoadAnimation from '../function/LoadAnimation.vue';
	import Global from '../function/Global.vue';
 	import footerHTML from '../footer/footer.vue';
	export default {
		data() {
			return {
				Load : true,
				data:''
			}
		},
		created(){
			
		},
		mounted(){
			let that = this;
		    let data = that.$store.state.classify;
		    if(data){
		    	that.Load = false;
            	that.data = data;
            	that.$nextTick(function(){
            		setTimeout(function(){
                         Global.reset.LazyLoadImg("#content");
                    },600)
            	})
		    	return false;
		    }
			this.$nextTick(function(){
				$.ajax({
					url:url.url+"category",
					type:"post",
					dataType:"json",
					success:function(e){
						if(e.code == '10000'){
							that.Load = false;
							that.data = e.data;
							that.$store.state.classify=e.data;
							Global.reset.LazyLoadImg("#content");
							setTimeout(function(){
								Global.reset.LazyLoadImg("#content");
							},600)
						}
					}
				})
			});


		},
		methods:{
			flushCom () {
				this.$router.go(0);  
			}
		},
		components: {
			LoadAnimation,
			footerHTML
		}
	}
</script>
<style lang='less'>
	#content{
		padding-bottom: 50px;
	}
	.classNav{
		overflow: hidden;
		margin-bottom: 5px;
		a{
			margin-left: 10px;
			line-height: inherit;
			display: block;
			float: left;
			border-radius: 45px;
			margin-top: 5px;
			border: 1px solid #f0f0f0;
			padding: 7px 15px;
			white-space: nowrap;

		}		
	}
	.swiper-box>section{
		width: 25%;
		float: left;
		margin-top: 5px;
		.SpecialEllipsis{
			line-height: 26px;
		}
	}
</style>