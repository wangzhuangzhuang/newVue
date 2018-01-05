<template>
	<div id="content">
		<div v-show="Load">
			<LoadAnimation></LoadAnimation>
		</div>
		<swiperHTML :bannner=bannner></swiperHTML>
		<div class="swiperText">
			<div class="swiper-container2">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="v in sy_notice">
						<a :href="v.notice_val">{{v.notice_theme}}</a>
					</div>
				</div>
			</div>
		</div>
		<div class="downloda">
			<a href="#">下载洋窝儿APP，更多跨境商品等你来</a>
		</div>
		<div class="borderBox back-f back-f">
			<div class="headline box box-pack-c box-align-c box-orient-v">
				<h3 class="text-c one_Title">爆款热卖<span><img src="../../../static/imgs/NEW.png"></span></h3>
				<h4 class='text-c'>高端好货  值得买</h4>
			</div>

			<div class="newBox">
				<div v-for='v in sy_jrsx'>
					<router-link :to="'/details/'+v.goods_id" @click.native="flushCom">
						<commodity :xsqg='v'></commodity>
					</router-link>
				</div>
			</div>
		</div>
		<div class="borderBox borderPadding back-f">
			<div class="headline box box-pack-c box-align-c box-orient-v">
				<h3 class="text-c one_Title">超值新品<span><img src="../../../static/imgs/NEW.png"></span></h3>
				<h4 class='text-c'>新品上线   时时购</h4>
			</div>
			<div class="newBox">
				<div class='box-flex' v-for='v in sy_dsbm'>
					<router-link :to="'/details/'+v.goods_id" @click.native="flushCom">
						<commodity :xsqg='v'></commodity>
					</router-link>
				</div>
			</div>
			<div>
				
			</div>
		</div>
		<!--<div class="borderBox sy_zqlb back-f">
               <div class="swiper-container3">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for='v in sy_zqlb'><img :src='v.special_img' class="img"></div>
                     </div>
                </div>
            </div>-->
		<div class="show_content ">
			<div class="show_content_list borderBox mt-10 back-f" v-for='v in sy_syfl'>
				<div class='img-box'>
					<router-link :to="'ClassifyDetails?category_id='+v.category_id+'&category_name='+v.category_name">
						<img :src='v.category_image' class="img">
					</router-link>
				</div>
				<div class='classify'>
					<div v-for="y in v.category_names">
						<router-link :to="'/details/'+y.goods_id" @click.native="flushCom">
							<commodity :xsqg='y' :back='"1"'></commodity>
						</router-link>
					</div>
				</div>
			</div>
			<div class="show_content_list" v-for='v in sy_ppmk'>
				<div class='img-box'>
					<img :src='v.home_brand_image' class="img">
				</div>
				<div>
					<div class="swiper-container3">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="y in v.brand_goods">
								<router-link :to="'/details/'+y.goods_id" @click.native="flushCom">
									<dl>
										<dt>
                                                                    <img :src="y.goods_main_url" class='img'>
                                                                </dt>
										<dd>
											<p>{{y.goods_name}}</p>
											<p>
												<span>��{{y.app_price}}</span>
												<span style="color:red;font-size:10px">��{{y.market_price}}</span>
											</p>
										</dd>
									</dl>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footerHTML :type='type'></footerHTML>
	</div>
</template>
<script type="text/ecmascript-6">
	import swiper from '../../../static/js/swiper.min.js';
	import jquery from '../../../static/js/jquery.js';
	import swiperHTML from '../function/swiper.vue';
	import LoadAnimation from '../function/LoadAnimation.vue';
	import footerHTML from '../footer/footer.vue';
	import commodity from '../../common/commodity.vue';
	import url from '../../Api/url.js';
	import Global from '../function/Global.vue';
	export default {
		data() {
			return {
				scroll: {},
				data: "",
				text: "首页",
				bannner: "",
				sy_notice: "",
				sy_jrsx: '',
				sy_dsbm: '',
				sy_zqlb: '',
				sy_syfl: '',
				Load: true,

				sy_ppmk: '',
				type: "1"
			};
		},
		created() {
			let that = this;
//			let bool = true;
//			this.$emit('loginData', {
//				name: 'show'
//			}, function(data) {
//				if(!data) {
//					return false
//				}
//				that.Load = false;
//				that.bannner = data.bannner;
//				that.sy_notice = data.sy_notice;
//				that.sy_jrsx = data.sy_jrsx;
//				that.sy_dsbm = data.sy_dsbm;
//				that.sy_zqlb = data.sy_zqlb;
//				that.sy_syfl = data.sy_syfl;
//				that.sy_ppmk = data.sy_ppmk;
//				that.$nextTick(function() {
//					new Swiper('.swiper-container', {
//						autoplay: 5000,
//						loop: true
//					});
//					new Swiper('.swiper-container2', {
//						autoplay: 3000,
//						loop: true,
//						direction: 'vertical'
//					});
//					new Swiper('.swiper-container3', {
//						slidesPerView: 2.5
//
//					});
//					new Swiper('.swiper-container4', {
//						slidesPerView: 4.5
//
//					});
//					setTimeout(function() {
//						Global.reset.LazyLoadImg("#content");
//					}, 100)
//
//				})
//				bool = false;
//			});
//
//			if(!bool) {
//				return false
//			}
			$.ajax({
				url: url.url + "sy_back",
				type: "post",
				dataType: "json",
				success: function(e) {
					let data = e.data;
					that.Load = false;
					that.bannner = data.bannner;
					that.sy_notice = data.sy_notice;
					that.sy_jrsx = data.sy_jrsx;
					that.sy_dsbm = data.sy_dsbm;
					that.sy_zqlb = data.sy_zqlb;
					that.sy_syfl = data.sy_syfl;
					that.sy_ppmk = data.sy_ppmk;
					that.$emit('loginData', {
						data: data,
						name: 'show'
					}, function(e) {});
					that.$nextTick(function() {
						Global.reset.LazyLoadImg("#content")
						new Swiper('.swiper-container', {
							autoplay: 5000,
							loop: true
						});
						new Swiper('.swiper-container2', {
							autoplay: 3000,
							loop: true,
							direction: 'vertical'
						});
						new Swiper('.swiper-container3', {
							slidesPerView: 2.5

						});
						new Swiper('.swiper-container4', {
							slidesPerView: 4.5

						});
					})
				}
			})

		},

		mounted() {

			//     var mySwiper = new Swiper('.swiper-container2', {

			// autoplay: 5000,//��ѡѡ��Զ�����
			// direction : 'vertical',
			// loop : true,
			// autoplayDisableOnInteraction : false

			//     })

		},
		updated: function() {

		},
		methods: {
			flushCom() {
//				this.$router.go(0);
			}
		},
		components: {
			swiperHTML,
			LoadAnimation,
			footerHTML,
			commodity
		}
	};
</script>
<style lang='less' scoped>
	.swiperText {
		height: 40px;
		width: 100%;
		overflow: hidden;
		line-height: 40px;
		padding-left: 50px;
		background: url('../../../static/imgs/Radio.png') no-repeat 13px center #fff;
		background-size: 25px auto;
	}
	
	.swiper-container2 .swiper-slide {
		height: 25px;
	}
	
	.borderPadding {
		padding: 10px;
		padding-left: 0px;
	}
	
	.one_Title {
		font-weight: bold;
		font-size: 14px;
		margin-top: 5px;
		margin-bottom: 3px;
	}
	
	.one_Title span {
		position: relative;
	}
	
	.one_Title span img {
		position: absolute;
		width: 30px;
		height: auto;
		top: -10px;
		right: -30px;
	}
	
	.newBox {
		overflow: hidden;
		padding: 0 12px;
	}
	
	.newBox a {
		display: block;
	}
	
	.newBox div {
		float: left;
		width: 32%;
		margin-right: 2%;
		margin-top: 10px;
	}
	
	.newBox div:nth-of-type(3n) {
		margin-right: 0;
	}
	
	.textNav {
		height: 25px;
		margin-top: 20px;
		margin-bottom: 7px;
	}
	
	.newBox section {
		padding: 10px;
	}
	
	.newBox section:last-child {
		padding-left: 5px;
	}
	
	.newBox section:first-child {
		padding-right: 5px;
	}
	
	.sy_zqlb {
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 10px;
	}
	
	.sy_zqlb .swiper-slide {
		padding-right: 10px;
	}
	
	.img {
		width: 100%;
		height: auto;
		display: block;
	}
	
	.border-a {
		border-radius: 5px;
		border: 1px solid #f0f0f0;
		padding: 7px 15px;
		white-space: nowrap;
	}
	
	.downloda {
		width: 100%;
		height: 44px;
		background: #fff;
		padding-top: 7px;
		margin-top: 10px;
		a {
			height: 30px;
			width: 90%;
			margin: 0 auto;
			text-align: center;
			color: #fff;
			background: #ff9600;
			display: block;
			border-radius: 15px;
			line-height: 30px;
		}
	}
	
	.headline {
		height: 56px;
		background: #FF9600;
		margin-left: -10px;
		margin-right: -10px;
		color: #fff;
	}
	.classify{
		overflow: hidden;
		div{
			float: left;
			width: 50%;
			padding: 17px 30px;
			border-bottom: 1px solid #c7c7c7;
		}
		div:nth-of-type(odd){
			border-right:1px solid #c7c7c7;
		}
		div:nth-of-type(even){
			border-right:1px solid #fff;
		}
		div:last-child{
			border-bottom: none;
		}
		div:nth-last-child(2){
			border-bottom: none;
		}
	}
</style>